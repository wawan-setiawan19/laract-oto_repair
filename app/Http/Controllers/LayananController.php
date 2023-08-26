<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\Layanan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LayananController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        if($user->role == 'admin'){
            $layanans = DB::table('layanans')->get();
        }else{
            $layanans = DB::table('layanans')->where('id_bengkel', $user->id)->get();
        }
        return Inertia::render('Bengkel/Layanan',[
            'layanans' => $layanans,
            'assetPath' => asset('storage/layanan/'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = Auth::user();
        if($user->role == 'bengkel'){
            $bengkels = DB::table('users')->where('role','bengkel')->get();
            return Inertia::render('Bengkel/Tambah',[
                'bengkels' => $bengkels,
            ]);
        }
        return Inertia::render('Bengkel/Tambah');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'id_bengkel' => 'required|numeric',
            'nama_layanan' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'harga' => 'required|numeric|min:4',
            'thumbnail' => ['image'],
        ]);
        if ($request->thumbnail->isValid()) {
            $file = $request->thumbnail;
            $fileName = date('Y-m-d').$file->getClientOriginalName();
            $path = 'layanan/'.$fileName;
            Storage::disk('public')->put($path,file_get_contents($file));
            $layanan = Layanan::create([
                'id_bengkel' => $request->id_bengkel,
                'nama_layanan' => $request->nama_layanan,
                'kategori' => $request->kategori,
                'harga' => $request->harga,
                'thumbnail' => $fileName,
            ]);
        }

    return redirect(route('bengkel.layanan'));
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $user = Auth::user();
        $layanans = DB::table('layanans')->where('id', $id)->get();
        return Inertia::render('Bengkel/DetailLayanan',[
            'layanan' => $layanans,
            'assetPath' => asset('storage/layanan/'),
        ]);
    }

    public function createByCategory($id)
    {
        $user = Auth::user();
        if($user->role == 'bengkel'){
            $bengkels = DB::table('users')->where('role','bengkel')->get();
            return Inertia::render('Bengkel/Tambah',[
                'bengkels' => $bengkels,
                'category' => $id,
            ]);
        }
        return Inertia::render('Bengkel/Tambah');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $layanan = Layanan::find($id);
        return Inertia::render('Bengkel/EditLayanan',[
            'layanan' => $layanan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $layanan = Layanan::find($id);
        $request->validate([
            'id_bengkel' => 'required|numeric',
            'nama_layanan' => 'required|string|max:255',
            'kategori' => 'required|string|max:255',
            'harga' => 'required|numeric|min:4',
        ]);
        if ($request->hasFile('thumbnail')) {
            Storage::delete('public/layanan/'.$layanan->thumbnail);
            $file = $request->thumbnail;
            $fileName = date('Y-m-d').$file->getClientOriginalName();
            $path = 'layanan/'.$fileName;
            Storage::disk('public')->put($path,file_get_contents($file));
            // dd($path);
            $layanan->update([
                'id_bengkel' => $request->id_bengkel,
                'nama_layanan' => $request->nama_layanan,
                'kategori' => $request->kategori,
                'harga' => $request->harga,
                'thumbnail' => $fileName,
            ]);
        }else{
            $layanan->update([
                'id_bengkel' => $request->id_bengkel,
                'nama_layanan' => $request->nama_layanan,
                'kategori' => $request->kategori,
                'harga' => $request->harga,
            ]);
        }
        $layanan->save();
        return redirect(route('bengkel.layanan'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $layanan = Layanan::find($id);
        $layanan->delete();
        return redirect(route('bengkel.layanan'));
    }
}
