<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
{
    public function login(Request $request)
    {
        $response = array('response' => '', 'errors' => '', 'success' => false);
        $validator = Validator::make($request->all(), [
            'email' => 'required|exists:users|max:255',
            'password' => 'required|min:6',
        ]);
        if ($validator->fails()) {
            return $response['errors'] = $validator->messages()->all();
        } else {
            $user = User::where('email', $request->email)->first();
            if (Hash::check($request->password, $user->password)) {
                $_SESSION['user']['username'] = $user->name;
                $_SESSION['user']['id'] = $user->id;
                $_SESSION['user']['is_premium'] = $user->is_premium;
                $_SESSION['user']['email'] = $user->email;
                $_SESSION['user']['premium_expires_at'] = $user->premium_expires_at;
                $_SESSION['user']['token'] = hash('sha256', Str::random(60));
                $response['response'] = $_SESSION['user'];
                $response['success'] = true;
                return $response;
            } else {
                return $response['errors'] = ['Неправильный пароль!'];
            }
        }
    }

    public function register(Request $request): array
    {
        $response = array('response' => '', 'errors' => '', 'success' => false);
        $validator = Validator::make($request->all(), [
            'email' => 'required|unique:users|max:255',
            'name' => 'required|max:255',
            'password' => 'required|min:6',
        ]);
        if ($validator->fails()) {
            return $response['errors'] = $validator->messages()->all();
        } else {
            $user = new User();
            $user->password = Hash::make($request->password);
            $_SESSION['user']['username'] = $user->name = $request->name;
            $_SESSION['user']['is_premium'] = 0;
            $_SESSION['user']['email'] = $user->email = $request->email;
            $_SESSION['user']['premium_expires_at'] = 0;
            $_SESSION['user']['token'] = hash('sha256', Str::random(60));
            $user->save();
            $response['response'] = $_SESSION['user'];
            $response['success'] = true;
            return $response;
        }
    }

    public function logout()
    {
        if (isset($_SESSION['user'])) {
            unset($_SESSION['user']);
            return true;
        } else {
            return false;
        }
    }
}
