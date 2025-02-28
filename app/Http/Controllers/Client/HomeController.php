<?php

namespace App\Http\Controllers\Client;

use App\Models\Book;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

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
}
