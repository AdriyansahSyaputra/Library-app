<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;

class RegisterController extends Controller
{
    public function index()
    {
        return Inertia::render('Auth/Register');
    }

    public function store(RegisterRequest $request)
    {
        $validated = $request->validated();

        User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'jurusan' => $validated['jurusan'],
            'no_telepon' => $validated['no_telepon'],
            'password' => Hash::make($validated['password'])
        ]);

        return Inertia::render('Auth/Register', [
            'success' => true,
        ]);
    }
}
