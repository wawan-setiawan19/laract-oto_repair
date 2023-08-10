<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Layanan;
use PDF;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $dataLayanan = Layanan::selectRaw('kategori, COUNT(*) as count')
        ->groupBy('kategori')
        ->get();
        return Inertia::render('Admin/Dashboard',[
            'dataLayanan' => $dataLayanan,
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
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Admin $admin)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Admin $admin)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Admin $admin)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Admin $admin)
    {
        //
    }

    public function exportPdf(){
        $dataLayanan = Layanan::selectRaw('kategori, COUNT(*) as count')
        ->groupBy('kategori')
        ->get();
        $component = Inertia::render('Admin/VisualisasiData',[
            'dataLayanan' => $dataLayanan,
        ]);
        $html = $component;
        // dd($html);
        $pdf = PDF::loadHTML($html);
        return $pdf->stream();
    }
}
