<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\GameSettingController;
use App\Http\Controllers\FantGroupController;
use App\Http\Controllers\SubsettingController;
use App\Http\Controllers\FantController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::prefix('admin')->group(function () {
    Route::group(['middleware' => 'check.admin'], function () {
        Route::get('/logout/', [AdminController::class, 'adminLogout']);
        Route::view('/', '/admin/layouts/app');
        Route::prefix('gameSettings')->group(function () {
            Route::get('/', [GameSettingController::class, 'index'])->name('admin.gameSettings.index');
            Route::get('/create', [GameSettingController::class, 'createPage'])->name('admin.gameSettings.createPage');
            Route::post('/createNew', [GameSettingController::class, 'create'])->name('admin.gameSettings.create');
            Route::get('/edit/{id}', [GameSettingController::class, 'edit'])->name('admin.gameSettings.edit');
            Route::post('/update/{id}', [GameSettingController::class, 'update'])->name('admin.gameSettings.update');
            Route::get('/delete/{id}', [GameSettingController::class, 'delete'])->name('admin.gameSettings.delete');
        });
        Route::prefix('fantGroup')->group(function () {
            Route::get('/', [FantGroupController::class, 'index'])->name('admin.fantGroup.index');
            Route::get('/create', [FantGroupController::class, 'createPage'])->name('admin.fantGroup.createPage');
            Route::post('/createNew', [FantGroupController::class, 'create'])->name('admin.fantGroup.create');
            Route::get('/edit/{id}', [FantGroupController::class, 'edit'])->name('admin.fantGroup.edit');
            Route::post('/update/{id}', [FantGroupController::class, 'update'])->name('admin.fantGroup.update');
            Route::get('/delete/{id}', [FantGroupController::class, 'delete'])->name('admin.fantGroup.delete');
        });
        Route::prefix('subsetting')->group(function () {
            Route::get('/', [SubsettingController::class, 'index'])->name('admin.subsetting.index');
            Route::get('/create', [SubsettingController::class, 'createPage'])->name('admin.subsetting.createPage');
            Route::post('/createNew', [SubsettingController::class, 'create'])->name('admin.subsetting.create');
            Route::get('/edit/{id}', [SubsettingController::class, 'edit'])->name('admin.subsetting.edit');
            Route::post('/update/{id}', [SubsettingController::class, 'update'])->name('admin.subsetting.update');
            Route::get('/delete/{id}', [SubsettingController::class, 'delete'])->name('admin.subsetting.delete');
        });
        Route::prefix('fant')->group(function () {
            Route::get('/', [FantController::class, 'index'])->name('admin.fants.index');
            Route::get('/create', [FantController::class, 'createPage'])->name('admin.fant.createPage');
            Route::post('/createNew', [FantController::class, 'create'])->name('admin.fant.create');
            Route::get('/edit/{id}', [FantController::class, 'edit'])->name('admin.fant.edit');
            Route::post('/update/{id}', [FantController::class, 'update'])->name('admin.fant.update');
            Route::get('/delete/{id}', [FantController::class, 'delete'])->name('admin.fant.delete');
        });
        Route::prefix('user')->group(function () {
            Route::get('/', [UserController::class, 'index'])->name('admin.users.index');
            Route::get('/create', [UserController::class, 'createPage'])->name('admin.users.createPage');
            Route::post('/createNew', [UserController::class, 'create'])->name('admin.users.create');
            Route::get('/edit/{id}', [UserController::class, 'edit'])->name('admin.users.edit');
            Route::post('/update/{id}', [UserController::class, 'update'])->name('admin.users.update');
            Route::get('/delete/{id}', [UserController::class, 'delete'])->name('admin.users.delete');
        });
    });
    Route::get('/login/', [AdminController::class, 'adminLogin'])->name('admin.login');
    Route::post('/login/', [AdminController::class, 'adminLoginPost']);
});

//Route::view('/{path?}', 'app');

Route::any('{catchall}', function() {
    return view('app');
})->where('catchall', '.*');

