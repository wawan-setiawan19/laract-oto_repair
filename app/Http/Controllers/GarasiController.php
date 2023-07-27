<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class GarasiController extends Controller
{
    function show(){
        $user = Auth::user();
        $mobils = DB::table('mobils')->where('id_pemilik', $user->id)->get();
        return Inertia::render('Garasi',[
            'mobils' => $mobils,
            'assetPath' => asset('storage/mobil/'),
        ]);
    }
}
