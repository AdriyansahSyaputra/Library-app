<?php

namespace App\Http\Controllers\Admin;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\FormAddBookRequest;

class BookController extends Controller
{
    public function index()
    {
        // Ambil query parameter dari input
        $year = request()->input('year');
        $status = request()->input('status');

        $books = Book::query();

        // Filter berdasarkan tahun terbit
        if ($year) {
            $books->whereYear('tahun_terbit', $year);
        }

        // Filter berdasarkan status
        if ($status) {
            $books->where('status', $status);
        }

        $books = $books->get();

        return Inertia::render('Admin/Books', [
            'books' => $books,
            'filters' => [
                'year' => $year,
                'status' => $status
            ]
        ]);
    }


    public function store(FormAddBookRequest $request)
    {
        $validated = $request->validated();

        // Simpan gambar ke storage/covers dengan nama file unik
        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $filename = time() . '_' . $file->getClientOriginalName(); // Nama file unik
            $path = $file->storeAs('covers', $filename, 'public'); // Simpan ke storage/covers
        } else {
            $path = null; // Jika tidak ada gambar yang diupload
        }

        // Simpan data buku ke database
        Book::create([
            'gambar' => $path ? 'covers/' . $filename : null, // Simpan path relatif
            'judul' => $validated['judul'],
            'penulis' => $validated['penulis'],
            'deskripsi' => $validated['deskripsi'],
            'tahun_terbit' => $validated['tahun_terbit'],
            'status' => $validated['status'],
        ]);

        // Redirect ke halaman daftar buku
        return redirect()->route('dashboard.books')->with('success', 'Buku berhasil ditambahkan!');
    }

    public function update(FormAddBookRequest $request, $id)
    {
        $validated = $request->validated();

        // Ambil buku berdasarkan ID
        $book = Book::findOrFail($id);

        // Proses upload gambar jika ada
        if ($request->hasFile('gambar')) {
            $file = $request->file('gambar');
            $filename = time() . '_' . $file->getClientOriginalName();
            $path = $file->storeAs('covers', $filename, 'public');

            // Hapus gambar lama jika ada
            if ($book->gambar) {
                Storage::disk('public')->delete($book->gambar);
            }
        } else {
            // Jika tidak ada gambar baru, gunakan gambar lama
            $path = $book->gambar;
        }

        // Update data buku
        $book->update([
            'gambar' => $path,
            'judul' => $validated['judul'],
            'penulis' => $validated['penulis'],
            'deskripsi' => $validated['deskripsi'],
            'tahun_terbit' => $validated['tahun_terbit'],
            'status' => $validated['status'],
        ]);

       
        return redirect()->route('dashboard.books')->with('success', 'Buku berhasil diperbarui!');
    }


    public function delete($id)
    {
        $book = Book::find($id);

        if (!$book) {
            return response()->json(['message' => 'Buku tidak ditemukan!'], 404);
        }

        // Hapus gambar dari storage jika ada
        if ($book->gambar && Storage::exists('public/' . $book->gambar)) {
            Storage::delete('public/' . $book->gambar);
        }

        $book->delete();

        return redirect()->route('dashboard.books');
    }
}
