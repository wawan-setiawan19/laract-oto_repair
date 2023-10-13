<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Layanan extends Model
{
    use HasFactory;
    protected $fillable =[
        'id_bengkel',
        'nama_layanan',
        'kategori',
        'harga',
        'description',
        'thumbnail',
    ];
}
