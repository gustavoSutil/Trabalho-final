<?php

use App\Http\Controllers\BudgetController;
use App\Http\Controllers\ProductController;
use App\Models\Budget;
use App\Models\Client;
use App\Models\Item;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Route::prefix('product')->group(function(){
//     Route::get('/list', [ProductController::class, 'list'])->name('list_product');
//     Route::patch('/update/{data}/{value}', [ProductController::class, 'update'])->name('update_product');
//     Route::post()->name('insert_product');
// });


// Route::prefix('client')->group(function(){
//     Route::get('/list', [ClientController::class, 'list'])->name('list_client');
//     Route::patch('/update/{data}/{value}', [ClientController::class, 'update'])->name('update_client');
//     Route::post()->name('insert_client');
// });

// Route::prefix('item')->group(function(){
//     Route::get('/list', [ItemController::class, 'list'])->name('list_item');
//     Route::post()->name('insert_item');
// });

// Route::prefix('budget')->group(function(){
//     Route::get('/list', [BudgetController::class, 'list'])->name('list_budget');
//     Route::patch('/update', [BudgetController::class, 'update'])->name('update_budget');
//     Route::post()->name('insert_budget');
// });