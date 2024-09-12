<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return inertia('Home');
// });

Route::get('/', function () {
    sleep(2);
    return Inertia::render('Home');
});

// Route::inertia('/', 'Home');