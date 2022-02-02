<?php

namespace App\Http\Controllers;

use App\Models\Subsetting;
use Illuminate\Http\Request;
use App\Models\GameSetting;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

class GameSettingController extends Controller
{
    public function index()
    {
        $gameSettings = GameSetting::all();

        return View::make('admin.gameSetting.index')
            ->with('gameSettings', $gameSettings);
    }

    public function createPage()
    {
        return View::make('admin.gameSetting.create');
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|unique:game_settings|max:255',
        ]);

        $gameSetting = new GameSetting();
        $gameSetting->title = $validated['title'];
        $gameSetting->is_premium = $request->premium === null ? false : true;
        $gameSetting->is_finish = $request->finish === null ? false : true;
        $gameSetting->save();
        return redirect('/admin/gameSetting');
    }

//    public function show($id)
//    {
//        // get the shark
//        $shark = shark::find($id);
//
//        // show the view and pass the shark to it
//        return View::make('sharks.show')
//            ->with('shark', $shark);
//    }

    public function edit($id)
    {
        $gameSettings = GameSetting::find($id);
        // show the edit form and pass the shark
        return View::make('admin.gameSetting.edit')
            ->with('gameSetting', $gameSettings);
    }

    public function update(Request $request, $id)
    {
        // validate
        // read more on validation at http://laravel.com/docs/validation
        $validated = $request->validate([
            'title' => 'required|max:255',
        ]);
        // process the login
        $gameSettings = GameSetting::find($id);
        $gameSettings->title = $validated['title'];
        $gameSettings->is_premium = $request->premium === null ? false : true;
        $gameSettings->is_finish = $request->finish === null ? false : true;
        $gameSettings->save();
        return redirect('/admin/gameSetting');
    }

//    public function delete($id)
//    {
//        $gameSettings = GameSetting::where('id',$id)->delete();
//
//        return redirect('/admin/gameSetting');
//    }

    public function getSettings()
    {
        $gameSettings = GameSetting::all()->toArray();
        for ($i = 0; $i < count($gameSettings); $i++) {
            $gameSettings[$i]['subsettings'] = Subsetting::where('setting_id', $gameSettings[$i]['id'])->get()->toArray();
        }

        return $gameSettings;
    }

    public function sendSettings(Request $request)
    {
        if (is_array($request->all())) {
            $_SESSION = $request->all();
        } else {
            $_SESSION['settings'] = [];
        }
    }

    public function gameDurationSend(Request $request)
    {
        if (is_array($request->all())) {
            switch ($request->is_green) {
                case 0:
                    $_SESSION['game_duration']['green'] = '';
                    break;
                case 6:
                    $_SESSION['game_duration']['green'] = 'six_green';
                    break;
                case 8:
                    $_SESSION['game_duration']['green'] = 'eight_green';
                    break;
                case 10:
                    $_SESSION['game_duration']['green'] = 'ten_green';
                    break;
            }
            switch ($request->is_yellow) {
                case 0:
                    $_SESSION['game_duration']['yellow'] = '';
                    break;
                case 6:
                    $_SESSION['game_duration']['yellow'] = 'six_yellow';
                    break;
                case 8:
                    $_SESSION['game_duration']['yellow'] = 'eight_yellow';
                    break;
                case 10:
                    $_SESSION['game_duration']['yellow'] = 'ten_yellow';
                    break;
            }
            switch ($request->is_red) {
                case 0:
                    $_SESSION['game_duration']['red'] = '';
                    break;
                case 6:
                    $_SESSION['game_duration']['red'] = 'six_red';
                    break;
                case 8:
                    $_SESSION['game_duration']['red'] = 'eight_red';
                    break;
                case 10:
                    $_SESSION['game_duration']['red'] = 'ten_red';
                    break;
            }
        } else {
            $_SESSION['game_duration'] = [];
        }
    }

}
