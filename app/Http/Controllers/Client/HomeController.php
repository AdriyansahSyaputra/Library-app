<?php

namespace App\Http\Controllers\Client;

use App\Models\Book;
use Inertia\Inertia;
use App\Models\Borrow;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    public function index()
    {
        $books = Book::all();

        return Inertia::render('Client/Home', [
            'books' => $books
        ]);
    }

    public function showDetail($slug)
    {
        $book = Book::where('slug', $slug)->firstOrFail();

        return Inertia::render('Client/BookDetail', [
            'book' => $book
        ]);
    }

    public function borrow(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'tanggal_pinjam' => 'required|date',
            'tanggal_kembali' => 'required|date',
        ]);

        // Cek user yang sedang login
        $user = Auth::user();

        // Cek apakah buku tersedia
        $book = Book::find($request->input('book_id'));

        if ($book->status !== 'tersedia') {
            return response()->json([
                'success' => false,
                'message' => 'Buku tidak tersedia untuk dipinjam.',
            ], 400);
        }

        // Ubah status buku menjadi dipinjam
        $book->status = 'dipinjam';
        $book->save();

        // Simpan data peminjaman ke database
        Borrow::create([
            'user_id' => $user->id,
            'book_id' => $book->id,
            'tanggal_pinjam' => $request->input('tanggal_pinjam'),
            'tanggal_kembali' => $request->input('tanggal_kembali'),
            'status' => 'dipinjam',
        ]);

        return redirect()->back()->with('success', 'Buku berhasil dipinjam!');
    }
}
