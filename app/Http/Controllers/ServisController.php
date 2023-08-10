<?php

namespace App\Http\Controllers;

use App\Models\Servis;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class ServisController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = Auth::user();
        $layanans = DB::table('layanans')->get();
        return Inertia::render('Order',[
            'layanans' => $layanans,
            'assetPath' => asset('storage/layanan/'),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create($id)
    {
        $layanans = DB::table('layanans')->where('id', $id)->get();
        return Inertia::render('Order/RingkasanOrder',[
            'layanan' => $layanans,
        ]);
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
    public function show($id)
    {
        $layanans = DB::table('layanans')->where('id', $id)->get();
        return Inertia::render('Order/RingkasanOrder',[
            'layanan' => $layanans,
            'assetPath' => asset('storage/layanan/'),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Servis $servis)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Servis $servis)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Servis $servis)
    {
        //
    }
}
