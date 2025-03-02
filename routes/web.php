<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\BookController;
use App\Http\Controllers\Admin\BorrowController;
use App\Http\Controllers\Admin\DelayController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Client\MyLibraryController;

// Route for Client
Route::middleware('auth')->controller(HomeController::class)->group(function () {
    Route::get('/', 'index')->name('home');
    Route::get('/book/{slug}', 'showDetail')->name('book.detail');
    Route::post('/book', 'borrow')->name('book.borrow');
});

Route::get('/book', function () {
    return inertia('Client/BookDetail');
});

Route::middleware('auth')->group(function () {
    Route::get('/my-library', [MyLibraryController::class, 'index'])->name('my-library');
    Route::delete('/api/borrow/{id}', [MyLibraryController::class, 'returnBook'])->name('my-library.return');
});

// Route for Admin
Route::get('/dashboard', function () {
    return inertia('Admin/Dashboard');
})->middleware('auth')->name('dashboard');

Route::middleware('auth')->controller(BookController::class)->group(function () {
    Route::get('/dashboard/books', 'index')->name('dashboard.books');
    Route::post('/dashboard/books', 'store');
    Route::delete('/dashboard/books/{id}', 'delete');
});

Route::middleware('auth')->controller(UserController::class)->group(function () {
    Route::get('/dashboard/users', 'index')->name('dashboard.users');
});

Route::middleware('auth')->controller(BorrowController::class)->group(function () {
    Route::get('/dashboard/borrows', 'index')->name('dashboard.borrows');
    Route::get('/dashboard/borrowing/filter', [BorrowController::class, 'searchAndFilter']);
});

Route::middleware('auth')->controller(DelayController::class)->group(function () {
    Route::get('/dashboard/delays', 'index')->name('dashboard.delays');
});


// Route for Auth
Route::controller(RegisterController::class)->group(function () {
    Route::get('/register', 'index')->name('register');
    Route::post('/register', 'store');
});

Route::controller(LoginController::class)->group(function () {
    Route::get('/login', 'index')->name('login');
    Route::post('/login', 'login');
    Route::post('/logout', 'logout')->middleware('auth')->name('logout');
});
