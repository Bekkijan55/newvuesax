<?php

use Illuminate\Http\Request;

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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('login','AuthController@login');

Route::group(['middleware' => 'auth:api','return-json'],function () {
    Route::get('user','AuthController@user');
    Route::post('logout','AuthController@logout');
    Route::get('get-users','Api\UsersController@getUsers');
    Route::post('add-user','Api\UsersController@addUser');
    Route::post('add-contact','ContactController@store');
    Route::get('get-contacts','ContactController@getContacts');
    Route::post('update-user','Api\UsersController@updateUser');
    Route::post('edit-contact','ContactController@updateContact');
});


