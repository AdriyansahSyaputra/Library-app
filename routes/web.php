<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Client/Home');
});

Route::get('/book', function () {
    return inertia('Client/BookDetail');
});

Route::get('/login', function () {
    return inertia('Auth/Login');
});

Route::get('/register', function () {
    return inertia('Auth/Register');
});
