<?php

namespace App\Http\Controllers\Client;

use Carbon\Carbon;
use App\Models\Book;
use Inertia\Inertia;
use App\Models\Delay;
use App\Models\Borrow;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class MyLibraryController extends Controller
{
    public function index()
    {
        $borrowedBooks = Borrow::with('user', 'book')
            ->where('user_id', Auth::id())
            ->get();

        return Inertia::render('Client/MyLibrary', [
            'borrowedBooks' => $borrowedBooks->toArray()
        ]);
    }

    public function returnBook($id)
    {
        $borrow = Borrow::where('id', $id)->where('user_id', Auth::id())->first();

        if (!$borrow) {
            return response()->json(['message' => 'Buku tidak ditemukan atau bukan milik Anda'], 404);
        }

        $today = now(); // Tanggal hari ini
        $returnDate = Carbon::parse($borrow->tanggal_kembali);
        $lateDays = 0;
        $fine = 0;

        // Cek apakah terlambat
        if ($today->greaterThan($returnDate)) {
            $lateDays = $today->diffInDays($returnDate);
            $fine = $lateDays * 1500;

            // Simpan data keterlambatan ke tabel delays
            Delay::create([
                'borrow_id' => $borrow->id,
                'jumlah_hari' => $lateDays,
                'denda' => $fine,
            ]);
        }

        // Update status buku menjadi 'tersedia'
        $book = Book::find($borrow->book_id);
        if ($book) {
            $book->update(['status' => 'tersedia']);
        }

        // Hapus data peminjaman
        $borrow->delete();

        return response()->json([
            'message' => 'Buku berhasil dikembalikan',
            'late_days' => $lateDays,
            'fine' => $fine,
        ]);
    }
}
