<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FormAddBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'gambar' => ['required', 'image', 'mimes:jpeg,png,jpg', 'max:2048'],
            'judul' => ['required', 'string', 'max:255'],
            'penulis' => ['required', 'string', 'max:255'],
            'deskripsi' => ['required', 'string', 'max:255'],
            'tahun_terbit' => ['required'],
            'status' => ['required', 'string', 'max:255'],
        ];
    }

    public function passedValidation()
    {
        if ($this->hasFile('gambar')) {
            $filename = $this->file('gambar')->hashName();
            $path = $this->file('gambar')->storeAs('covers', $filename, 'public');
            $this->merge([
                'gambar' => $path, // Simpan path gambar ke data
            ]);
        }
    }
}
