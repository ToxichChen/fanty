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
        return View::make('admin.fantGroup.create');
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|unique:game_settings|max:255'
        ]);

        $gameSetting = new GameSetting();
        $gameSetting->title = $validated['title'];
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
        $gameSettings->save();
        return redirect('/admin/gameSetting');
    }

    public function delete($id)
    {
        $gameSettings = GameSetting::where('id',$id)->delete();

        return redirect('/admin/gameSetting');
    }

    public function getSettings() {
        $gameSettings = GameSetting::all()->toArray();
        for ($i = 0; $i < count($gameSettings); $i++) {
            $gameSettings[$i]['subsettings'] = Subsetting::where('setting_id',$gameSettings[$i]['id'])->get()->toArray();
        }

        return $gameSettings;
    }

}
