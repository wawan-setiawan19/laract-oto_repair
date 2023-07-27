<?php

namespace App\Http\Controllers;

use App\Models\Mobil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class MobilController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
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
            $request->validate([
                'id_pemilik' => 'required|numeric',
                'merk' => 'required|string|max:255',
                'tipe' => 'required|string|max:255',
                'tahun' => 'required|numeric|digits:4',
                'bahan_bakar' => 'required|string|max:255',
                'transmisi' => 'required|string|max:255',
                'nopol' => 'required|string|max:255|unique:'.Mobil::class,
                'picture' => ['nullable', 'image'],
            ]);
            if ($request->picture->isValid()) {
                $file = $request->picture;
                $fileName = date('Y-m-d').$file->getClientOriginalName();
                $path = 'mobil/'.$fileName;
                Storage::disk('public')->put($path,file_get_contents($file));
                // dd($path);
                $mobil = Mobil::create([
                    'id_pemilik' => $request->id_pemilik,
                    'merk' => $request->merk,
                    'tipe' => $request->tipe,
                    'tahun' => $request->tahun,
                    'bahan_bakar' => $request->bahan_bakar,
                    'transmisi' => $request->transmisi,
                    'nopol' => $request->nopol,
                    'picture' => $fileName,
                ]);
            }

        return redirect(route('garasi'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Mobil $mobil)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Mobil $mobil)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Mobil $mobil)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Mobil $mobil)
    {
        //
    }
}
