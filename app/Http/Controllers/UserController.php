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

    // ADMIN PANEL FUNCTIONALITY:

    public function index()
    {
        $users = User::all('id', 'name', 'email', 'is_admin', 'is_premium', 'premium_expires_at', 'created_at', 'updated_at');

        return View::make('admin.users.index')
            ->with('users', $users);
    }

    public function createPage()
    {
        return View::make('admin.users.create');
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required',
            'setting' => 'required',
            'subsetting' => 'required',
            'fantGroup' => 'required',
            'sex_type' => 'required|numeric|min:0|max:2',
            'sex' => 'required|numeric|min:0|max:2',
            'media' => 'max:8194'
        ]);
        $path = '';

        if ($request->file('media') !== null && $request->file()) {
            $path = $request->file('media')->store('public');
        }

        $fant = new Fant();
        $fant->content = $validated['content'];
        $fant->game_setting_id = $validated['setting'];
        $fant->fant_group_id = $validated['fantGroup'];
        $fant->subsetting_id = $validated['subsetting'];
        $fant->sex_type = $validated['sex_type'];
        $fant->sex = $validated['sex'];
        $fant->media = $path;
        $fant->save();
        return redirect('/admin/fant');
    }

    public function edit($id)
    {
        $fant = Fant::find($id);
        $subsetting = Subsetting::all();
        $settings = GameSetting::all();
        $fantGroups = FantGroup::all();
        // show the edit form and pass the shark
        return View::make('admin.fants.edit')
            ->with(['fant' => $fant, 'subsettings' => $subsetting, 'settings' => $settings, 'fantGroups' => $fantGroups]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'setting' => 'required',
        ]);
        $subsetting = Subsetting::find($id);
        $subsetting->title = $validated['title'];
        $subsetting->setting_id = $validated['setting'];
        $subsetting->save();
        return redirect('/admin/fant');
    }
}
