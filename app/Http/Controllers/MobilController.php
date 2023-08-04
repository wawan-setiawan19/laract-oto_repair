<?php

namespace App\Http\Controllers;
use App\Http\Requests\KendaraanUpdateRequest;
use App\Models\Mobil;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

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
        return Inertia::render('TambahKendaraan');
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
                'picture' => ['image'],
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
    public function show(Mobil $mobil, $id)
    {
        $user = Auth::user();
        $mobils = DB::table('mobils')->where('id', $id)->get();
        return Inertia::render('DetailKendaraan',[
            'mobil' => $mobils,
            'assetPath' => asset('storage/mobil/'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $mobil = Mobil::find($id);
        return Inertia::render('EditKendaraan',[
            'mobil' => $mobil
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(KendaraanUpdateRequest $request, $id)
    {
        $mobil = Mobil::find($id);
        $request->validate([
            'id_pemilik' => 'required|numeric',
            'merk' => 'required|string|max:255',
            'tipe' => 'required|string|max:255',
            'tahun' => 'required|numeric|digits:4',
            'bahan_bakar' => 'required|string|max:255',
            'transmisi' => 'required|string|max:255',
        ]);
        if ($request->hasFile('picture')) {
            Storage::delete('public/mobil/'.$mobil->picture);
            $file = $request->picture;
            $fileName = date('Y-m-d').$file->getClientOriginalName();
            $path = 'mobil/'.$fileName;
            Storage::disk('public')->put($path,file_get_contents($file));
            // dd($path);
            $mobil->update([
                'id_pemilik' => $request->id_pemilik,
                'merk' => $request->merk,
                'tipe' => $request->tipe,
                'tahun' => $request->tahun,
                'bahan_bakar' => $request->bahan_bakar,
                'transmisi' => $request->transmisi,
                'nopol' => $request->nopol,
                'picture' => $fileName,
            ]);
        }else{
            $mobil->update([
                'id_pemilik' => $request->id_pemilik,
                'merk' => $request->merk,
                'tipe' => $request->tipe,
                'tahun' => $request->tahun,
                'bahan_bakar' => $request->bahan_bakar,
                'transmisi' => $request->transmisi,
                'nopol' => $request->nopol,
            ]);
        }
        $mobil->save();
        return redirect(route('garasi'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $mobil = Mobil::find($id);
        $mobil->delete();
        // $mobil->delete();
        return redirect(route('garasi'));
    }
}
