<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['string', 'max:255'],
            'provinsi' => ['string', 'max:255'],
            'kota' => ['string', 'max:255'],
            'kecamatan' => ['string', 'max:255'],
            'alamat' => ['string', 'max:255'],
            'jenis_kelamin' => ['string', 'max:255'],
            'tanggal_lahir' => ['date'],
            'email' => ['email', 'max:255', Rule::unique(User::class)->ignore($this->user()->id)],
        ];
    }
}
