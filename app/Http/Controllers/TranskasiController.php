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
            $transkasis = DB::table('transkasis')->join('users', 'transkasis.id_user', '=', 'users.id')
            ->where('id_user', $user->id)->orWhere('id_bengkel', $user->id)->get();
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

        $id_transaksi = uniqid();
        if($request->metode_pembayaran !== 'Tunai'){
            $params = [
                'transaction_details' => [
                    'order_id' => $id_transaksi,
                    'gross_amount' => $request->harga,
                ],
            ];
            $snapToken = Snap::getSnapToken($params);
            $transkasi = Transkasi::create([
                'id_bengkel' => $request->id_bengkel,
                'id_user' => $request->id_user,
                'id_order' => $id_transaksi,
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
                'id_order' => $id_transaksi,
                'nama_layanan' => $request->nama_layanan,
                'kategori' => $request->kategori,
                'harga' => $request->harga,
                'metode_pembayaran' => $request->metode_pembayaran,
                'status_pembayaran' => 'waiting',
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
        $transkasi = Transkasi::find($id);
        $transkasi->update([
            'status_pembayaran' => $request->status_pembayaran,
        ]);
        $transkasi->save();
        return redirect(route('transaksi'));
    }

    public function konfirmasi($id)
    {
        $transkasi = Transkasi::where('id_order', $id)->update(['status_pembayaran' => 'confirm']);
        return redirect(route('transaksi'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Transkasi $transkasi)
    {
        //
    }

    public function callback(Request $request)
    {
        Config::$serverKey = config('services.midtrans.server_key');
        Config::$isProduction = config('app.midtrans_env') === 'production';
        Config::$isSanitized = true;
        Config::$is3ds = true;
        $hashed = hash("sha512", $request->order_id.$request->status_code.$request->gross_amount.Config::$serverKey);

        if($hashed == $request->signature_key){
            if($request->transaction_status == 'capture' || $request->transaction_status == 'settlement'){
                $transkasi = Transkasi::where('id_order', $request->order_id);
                $transkasi->update([
                    'status_pembayaran' => 'paid',
                ]);
                return redirect(route('transaksi'));
            }
        }
    }
    public function finish(Request $request)
    {
        Config::$serverKey = config('services.midtrans.server_key');
        Config::$isProduction = config('app.midtrans_env') === 'production';
        Config::$isSanitized = true;
        Config::$is3ds = true;
        $hashed = hash("sha512", $request->order_id.$request->status_code.$request->gross_amount.Config::$serverKey);

        if($hashed == $request->signature_key){
            if($request->transaction_status == 'capture' || $request->transaction_status == 'settlement'){
                $transkasi = Transaksi::find($request->order_id);
                $transkasi->update([
                    'status_pembayaran' => 'paid',
                ]);
                return redirect(route('transaksi'));
            }
        }
    }
}
