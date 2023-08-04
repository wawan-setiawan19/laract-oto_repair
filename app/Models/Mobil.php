<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\URL;

class Mobil extends Model
{
    use HasFactory;

    protected $fillable =[
        'id_pemilik',
        'merk',
        'tipe',
        'tahun',
        'bahan_bakar',
        'transmisi',
        'nopol',
        'picture',
    ];
    
    protected $casts = [
        'picture',
    ];

}
