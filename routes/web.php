<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route::get('/', function () {
//     return inertia('Home');
// });

// Route::get('/', function () {
//     sleep(2);
//     return Inertia::render('Home');
// });

Route::get('/', [PostController::class, 'index']);

Route::resource('posts', PostController::class)->except('index');

// Route::inertia('/', 'Home');