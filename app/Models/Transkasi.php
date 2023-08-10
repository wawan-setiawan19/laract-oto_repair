<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transkasi extends Model
{
    use HasFactory;

    protected $fillable =[
        'id_bengkel',
            'id_user',
            'nama_layanan',
            'kategori',
            'metode_pembayaran',
            'status_pembayaran',
            'tanggal_transaksi',
    ];
}
