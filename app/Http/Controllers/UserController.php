<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\View;
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

            $_SESSION['user']['id'] = $user->id;

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

    public function checkIfLoggedIn()
    {
        if (isset($_SESSION['user'])) {
            return $_SESSION['user'];
        } else {
            return false;
        }
    }

    public function index()
    {
        $users = User::all('id', 'name', 'email', 'is_admin', 'is_premium', 'premium_expires_at', 'created_at', 'updated_at');

        return View::make('admin.users.index')
            ->with('users', $users);
    }

    public function edit($id)
    {
        $user = User::find($id);

        return View::make('admin.users.edit')
            ->with(['user' => $user]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'name' => 'required|max:255'
        ]);
        $user = User::find($id);
        $user->name = $validated['name'];
        if (isset($request->premium) && $request->premium === 'on'
            && isset($request->date) != null ) {
            $user->is_premium = 1;
            $user->premium_expires_at = $request->date;
        } else {
            $user->is_premium = 0;
        }
        if (isset($request->admin) && $request->admin === 'on') {
            $user->is_admin = 1;
        } else {
            $user->is_admin = 0;
        }
        $user->save();
        return redirect('/admin/user');
    }
}
