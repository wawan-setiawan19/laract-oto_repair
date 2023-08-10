<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Models\Bengkel;
use App\Models\Layanan;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PDF;
use App;

class BengkelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bengkels = Bengkel::all();
        $dataLayanan = Layanan::selectRaw('kategori, COUNT(*) as count')
        ->groupBy('kategori')
        ->get();
        return Inertia::render('Bengkel/Dashboard',[
            'bengkels' => $bengkels,
            'dataLayanan' => $dataLayanan,
            'assetPath' => asset('storage/bengkel/'),
        ]);
    }

    public function layanan()
    {
        
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
    public function show(Bengkel $bengkel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Bengkel $bengkel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Bengkel $bengkel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Bengkel $bengkel)
    {
        //
    }

    public function exportPdf(){
        $bengkels = Bengkel::all();
        $dataLayanan = Layanan::selectRaw('kategori, COUNT(*) as count')
        ->groupBy('kategori')
        ->get();
        $component = Inertia::render('Bengkel/Report', [
            'bengkels' => $bengkels,
            'dataLayanan' => $dataLayanan,
        ]);
        // $html = $component->toResponse(app('request'))->getContent();
        // dd($html);
        $pdf = PDF::loadView('pdfs.print');
        return $pdf->stream();
    }
}
