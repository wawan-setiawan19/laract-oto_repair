<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class AkunController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show()
    {
        $totalColumns = 7; // Total kolom profil yang ada (nama, alamat, tanggal_lahir, nomor_telepon)
        $tableName = 'users'; // Nama tabel user

        $user = Auth::user();
        $user = User::find($user->id);
        $filledColumns = 0;

        if($user->name != null) $filledColumns++;
        if($user->tanggal_lahir != null) $filledColumns++;
        if($user->provinsi != null) $filledColumns++;
        if($user->kota != null) $filledColumns++;
        if($user->kecamatan != null) $filledColumns++;
        if($user->alamat != null) $filledColumns++;
        if($user->jenis_kelamin != null) $filledColumns++;

        $profileCompletionPercentage = ($filledColumns / $totalColumns) * 100;
        return Inertia::render('Akun',[
            'percentage' => $profileCompletionPercentage,
        ]);
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
