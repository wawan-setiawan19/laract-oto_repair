<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AkunController;
use App\Http\Controllers\MobilController;
use App\Http\Controllers\GarasiController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/', function(){
    return Inertia::render('Homepage',[
        'title' => 'Home'
    ]);
});

Route::get('/form', function(){
    return Inertia::render('FormKendaraan',[
        'title' => 'Form Kendaraan'
    ]);
});

// Route Kendaraan
Route::middleware(['auth', 'verified'])->group(function(){
    Route::resource('kendaraan', MobilController::class);
    // Route::get('/kendaraan', function () {
    //     return Inertia::render('DetailKendaraan');
    // })->name('kendaraan.edit');
    Route::get('/kendaraan/add', function () {
        return Inertia::render('TambahKendaraan');
    })->name('kendaraan.add');
    // Route::get('/kendaraan', function () {
    //     return Inertia::render('DetailKendaraan',[
    //         'assetPath' => 
    //     ]);
    // })->name('kendaraan.detail');
    Route::post('kendaraan/add', [MobilController::class, 'store'])->name('tambah-kendaraan');
    Route::delete('kendaraan/{id}', [MobilController::class, 'destroy'])->name('kendaraan.destroy');
    Route::post('kendaraan/{id}', [MobilController::class, 'update'])->name('kendaraan.update');
});

// Route Menu
Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/order', function () {
        return Inertia::render('Order');
    })->name('order');
    // Route::get('/garasi', function () {
    //     return Inertia::render('Garasi');
    // })->name('garasi');
    Route::get('/garasi', [GarasiController::class, 'show'])->name('garasi');
    Route::get('/akun', [AkunController::class, 'show'])->name('akun');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
