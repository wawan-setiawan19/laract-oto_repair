<?php

namespace App\Http\Requests;

use App\Models\Mobil;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class KendaraanUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
        'id_pemilik' => 'required|numeric',
        'merk' => 'required|string|max:255',
        'tipe' => 'required|string|max:255',
        'tahun' => 'required|numeric|digits:4',
        'bahan_bakar' => 'required|string|max:255',
        'transmisi' => 'required|string|max:255',
        'nopol' => 'required|string|max:255',
    ];
    }
}
