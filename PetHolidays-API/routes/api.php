<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AccommodationController;

Route::controller(AccommodationController::class)->group(function () {
    Route::get('/accommodations', 'index');
    Route::post('/accommodation', 'store');
    Route::get('/accommodation/{id}', 'show');
    Route::put('/accommodation/{id}', 'update');
    Route::delete('/accommodation/{id}', 'destroy');
});
