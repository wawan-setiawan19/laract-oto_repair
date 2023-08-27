<?php

namespace App\Http\Controllers;

use App\Models\Transkasi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Midtrans\Config;
use Midtrans\Snap;

class TranskasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        if($user->role == 'admin'){
            $layanans = DB::table('transkasis')->get();
        }else{
            $transkasis = DB::table('transkasis')->where('id_user', $user->id)->get();
        }
        return Inertia::render('Order/List',[
            'transaksis' => $transkasis,
            'assetPath' => asset('storage/layanan/'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        Config::$serverKey = config('services.midtrans.server_key');
        Config::$isProduction = config('app.midtrans_env') === 'production';
        Config::$isSanitized = true;
        Config::$is3ds = true;

        if($request->metode_pembayaran !== 'Tunai'){
            $params = [
                'transaction_details' => [
                    'order_id' => uniqid(),
                    'gross_amount' => $request->harga,
                ],
            ];
            $snapToken = Snap::getSnapToken($params);
            $transkasi = Transkasi::create([
                'id_bengkel' => $request->id_bengkel,
                'id_user' => $request->id_user,
                'nama_layanan' => $request->nama_layanan,
                'kategori' => $request->kategori,
                'harga' => $request->harga,
                'metode_pembayaran' => $request->metode_pembayaran,
                'status_pembayaran' => 'unpaid',
                'tanggal_transaksi' => $request->tanggal_transaksi,
                'snap_token' => $snapToken,
            ]);
        }else{
            $transkasi = Transkasi::create([
                'id_bengkel' => $request->id_bengkel,
                'id_user' => $request->id_user,
                'nama_layanan' => $request->nama_layanan,
                'kategori' => $request->kategori,
                'harga' => $request->harga,
                'metode_pembayaran' => $request->metode_pembayaran,
                'status_pembayaran' => 'done',
                'snap_token' => 'tunai',
                'tanggal_transaksi' => $request->tanggal_transaksi,
            ]);
        }
        return redirect(route('transaksi'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Transkasi $transkasi)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Transkasi $transkasi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $transkasi = Transaksi::find($id);
        $transkasi->update([
            'status_pembayaran' => $request->status_pembayaran,
        ]);
        dd($request->status_pembayaran);
        $transkasi->save();
        return redirect(route('transaksi'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transkasi $transkasi)
    {
        //
    }
}
