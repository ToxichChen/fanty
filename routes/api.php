<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\GameSettingController;
use App\Http\Controllers\FantController;
use App\Http\Controllers\MusicController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\SubscriptionController;
use App\Http\Controllers\CheckoutController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('formLogin', 'UserController@loginForm');
Route::get('formRegister', 'UserController@registerForm');

Route::post('/user/login', [UserController::class, 'login']);
Route::post('/user/register', [UserController::class, 'register']);
Route::get('/user/logout', [UserController::class, 'logout']);
Route::get('/settings/get', [GameSettingController::class, 'getSettings']);
Route::post('/settings/send', [GameSettingController::class, 'sendSettings']);
Route::post('/settings/gameDuration/send', [GameSettingController::class, 'gameDurationSend']);
Route::post('/fant/generate', [FantController::class, 'generateFant']);
/*
 * Incoming data:
 *  current_level: ('red', 'yellow', 'green')
 *  fant_number: 1 (refresh to 0 with each level)
 *  sex: 1 (men)/ 2 (women)
 *  */
Route::post('/fant/likeFant', [FantController::class, 'likeFant']);
Route::post('/fant/dislikeFant', [FantController::class, 'dislikeFant']);
Route::get('/fant/checkLikedOrDisliked', [FantController::class, 'checkLikedOrDisliked']);
/*
 * Outgoing data:
 * -1: disliked
 *  0: not liked/disliked
 *  1: liked
 */

Route::post('/fant/getPunishment', [FantController::class, 'getPunishment']);
/*
 * Incoming data:
 *  current_level: ('red', 'yellow', 'green')
 *  sex: 0 (men)/ 1 (women)
 */
Route::get('/fant/getFinalPunishment', [FantController::class, 'getFinalPunishment']);

Route::get('/fant/getFinishFant', [FantController::class, 'getFinishFant']);

Route::get('/user/checkIfLoggedIn', [UserController::class, 'checkIfLoggedIn']);

// Music API
Route::get('/music/getMusicList', [MusicController::class, 'getMusicList']);

// Posts APIs
Route::get('/post/getAllPosts', [PostController::class, 'getAllPosts']);

Route::get('/post/getPostById/{id}', [PostController::class, 'getPostById']);

//Email Support
Route::post('/email/support', [EmailController::class, 'sendSupportEmail']);
/**
 * Incoming data:
 *  name:  string
 *  email: string
 *  title: string
 *  text:  string
 */

// Create payment
Route::post('/checkOut/createPayment', [CheckoutController::class, 'createPayment']);

// Get all Subscriptions
Route::get('/subscriptions/getAllSubscriptions', [SubscriptionController::class, 'getAllSubscriptions']);
