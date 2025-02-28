<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Client/Home');
});

Route::get('/book', function () {
    return inertia('Client/BookDetail');
});

Route::get('/my-library', function () {
    return inertia('Client/MyLibrary');
});

Route::get('/login', function () {
    return inertia('Auth/Login');
});

Route::get('/register', function () {
    return inertia('Auth/Register');
});

Route::get('/dashboard', function () {
    return inertia('Admin/Dashboard');
});

Route::get('/dashboard/books', function () {
    return inertia('Admin/Books');
});

Route::get('/dashboard/users', function () {
    return inertia('Admin/Users');
});

Route::get('/dashboard/borrowing', function () {
    return inertia('Admin/Borrowing');
});
