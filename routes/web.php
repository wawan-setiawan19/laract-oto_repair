<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AkunController;
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
        'title' => 'OtoRepair Home'
    ]);
});

Route::get('/form', function(){
    return Inertia::render('FormKendaraan',[
        'title' => 'OtoRepair - Form Kendaraan'
    ]);
});


Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::get('/order', function () {
        return Inertia::render('Order');
    })->name('order');
    Route::get('/garasi', function () {
        return Inertia::render('Garasi');
    })->name('garasi');
    Route::get('/kendaraan', function () {
        return Inertia::render('FormKendaraan');
    })->name('kendaraan.edit');
    Route::get('/akun', [AkunController::class, 'show'])->name('akun');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
