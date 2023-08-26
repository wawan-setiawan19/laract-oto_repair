<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AkunController;
use App\Http\Controllers\MobilController;
use App\Http\Controllers\GarasiController;
use App\Http\Controllers\BengkelController;
use App\Http\Controllers\ServisController;
use App\Http\Controllers\LayananController;
use App\Http\Controllers\TranskasiController;
use App\Http\Controllers\AdminController;
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
    Route::get('/kendaraan/add', function () {
        return Inertia::render('TambahKendaraan');
    })->name('kendaraan.add');
    Route::post('kendaraan/add', [MobilController::class, 'store'])->name('tambah-kendaraan');
    Route::delete('kendaraan/{id}', [MobilController::class, 'destroy'])->name('kendaraan.destroy');
    Route::post('kendaraan/{id}', [MobilController::class, 'update'])->name('kendaraan.update');
});

// Admin Route
Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('admin/dashboard', [AdminController::class, 'index'])->name('admin.dashboard');
    Route::get('admin/export', [AdminController::class, 'exportPdf'])->name('admin.export');
});

// Bengkel Route
Route::middleware(['auth', 'verified'])->group(function(){
    Route::resource('layanan', LayananController::class);
    Route::get('bengkel/dashboard', [BengkelController::class, 'index'])->name('bengkel.dashboard');
    Route::get('bengkel/layanan', [LayananController::class, 'index'])->name('bengkel.layanan');
    Route::get('bengkel/export', [BengkelController::class, 'exportPdf'])->name('bengkel.export');
});

Route::middleware(['auth', 'verified'])->group(function(){
    Route::resource('order', ServisController::class);
    Route::get('order/{id}', [ServisController::class, 'show'])->name('order.show');
    Route::get('order/category/{id}', [ServisController::class, 'showCategory'])->name('order.category');
    Route::post('order', [TranskasiController::class, 'store'])->name('order.store');
    Route::get('transaksi', [TranskasiController::class, 'index'])->name('transaksi');
});

// Route Menu
Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/order', [ServisController::class, 'index'])->name('order');
    Route::get('/garasi', [GarasiController::class, 'show'])->name('garasi');
    Route::get('/akun', [AkunController::class, 'show'])->name('akun');
    Route::get('/bengkel', [BengkelController::class, 'index'])->name('bengkel');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::put('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
