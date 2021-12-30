<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AdminController extends Controller
{
    public function adminLoginPost(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|exists:users|max:255',
            'password' => 'required|min:6',
        ]);
        $user = User::where('email', $validated['email'])->first();
        if (Hash::check($validated['password'], $user->password) && $user->is_admin === 1) {
            $_SESSION['admin_user']['username'] = $user->name;
            $_SESSION['admin_user']['admin'] = 1;
            return redirect('/admin/');
        } elseif ($user->is_admin === 0) {
            throw ValidationException::withMessages(['email' => 'User with such email does not have access to admin panel!']);
        } elseif (Hash::check($validated['password'], $user->password) === false) {
            throw ValidationException::withMessages(['password' => 'Password is wrong!']);
        }
    }

    public function adminLogin()
    {
        if (isset($_SESSION['admin_user'])) {
            return redirect('/admin/');
        } else {
            return view('admin.login');
        }
    }

    public function adminLogout()
    {
        if (isset($_SESSION['admin_user'])) {
            unset($_SESSION['admin_user']);
        }
        return view('admin.login');
    }
}
