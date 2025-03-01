<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BookController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Client\MyLibraryController;

Route::middleware('auth')->controller(HomeController::class)->group(function () {
    Route::get('/', 'index')->name('home');
    Route::get('/book/{slug}', 'showDetail')->name('book.detail');
    Route::post('/borrow-book', 'borrow')->name('book.borrow');
});

Route::get('/book', function () {
    return inertia('Client/BookDetail');
});

Route::middleware('auth')->controller(MyLibraryController::class)->group(function () {
    Route::get('/my-library', 'index')->name('my-library');
});

Route::get('/dashboard', function () {
    return inertia('Admin/Dashboard');
})->middleware('auth')->name('dashboard');

Route::middleware('auth')->controller(BookController::class)->group(function () {
    Route::get('/dashboard/books', 'index')->name('dashboard.books');
    Route::post('/dashboard/books', 'store');
    Route::delete('/dashboard/books/{id}', 'delete');
});

Route::get('/dashboard/users', function () {
    return inertia('Admin/Users');
});

Route::get('/dashboard/borrowing', function () {
    return inertia('Admin/Borrowing');
});


Route::controller(RegisterController::class)->group(function () {
    Route::get('/register', 'index')->name('register');
    Route::post('/register', 'store');
});

Route::controller(LoginController::class)->group(function () {
    Route::get('/login', 'index')->name('login');
    Route::post('/login', 'login');
    Route::post('/logout', 'logout')->middleware('auth')->name('logout');
});
