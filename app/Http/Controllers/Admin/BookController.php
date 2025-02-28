<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\FormAddBookRequest;

class BookController extends Controller
{
    public function index()
    {
        $books = Book::all();

        return Inertia::render('Admin/Books', [
            'books' => $books
        ]);
    }

    public function store(FormAddBookRequest $request)
    {
        // Buat buku baru dengan data yang sudah divalidasi
        Book::create($request->validated());

        // Redirect ke halaman daftar buku
        return redirect()->route('dashboard.books')->with('success', 'Buku berhasil ditambahkan!');
    }
}
