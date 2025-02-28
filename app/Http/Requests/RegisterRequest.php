<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'jurusan' => ['required', 'string', 'max:255'],
            'no_telepon' => ['required', 'string', 'max:255'],
            'password' => ['required', 'confirmed', 'min:8'],
        ];
    }

    protected function passedValidation()
    {
        $this->merge([
            'password' => Hash::make($this->input('password')),
        ]);
    }
}
