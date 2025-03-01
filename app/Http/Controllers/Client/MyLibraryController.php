<?php

namespace App\Http\Controllers\Client;

use Inertia\Inertia;
use App\Models\Borrow;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MyLibraryController extends Controller
{
    public function index()
    {
        $borrowedBooks = Borrow::with('user', 'book')->get();

        return Inertia::render('Client/MyLibrary', [
            'borrowedBooks' => $borrowedBooks
        ]);
    }
}
