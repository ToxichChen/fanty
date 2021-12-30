<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Models\Subsetting;
use Illuminate\Support\Facades\DB;
use App\Models\GameSetting;

class SubsettingController extends Controller
{
    public function index()
    {
        $subsettings = DB::table('subsettings')
            ->join('game_settings', 'subsettings.setting_id', '=', 'game_settings.id')
            ->select('subsettings.*', 'game_settings.title as setting_name')
            ->get();
        return View::make('admin.subsetting.index')
            ->with('subsettings', $subsettings);
    }

    public function createPage()
    {
        $settings = GameSetting::all();
        return View::make('admin.subsetting.create')
            ->with('settings', $settings);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|unique:subsettings|max:255',
            'setting' => 'required',
            'sex' => 'required|numeric|min:0|max:2',
        ]);
        $subsetting = new Subsetting();
        $subsetting->title = $validated['title'];
        $subsetting->setting_id = $validated['setting'];
        $subsetting->sex = $validated['sex'];
        $subsetting->save();
        return redirect('/admin/subsetting');
    }

    public function edit($id)
    {
        $subsetting = Subsetting::find($id);
        $settings = GameSetting::all();
        // show the edit form and pass the shark
        return View::make('admin.subsetting.edit')
            ->with(['subsetting' => $subsetting, 'settings' => $settings]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'setting' => 'required',
            'sex' => 'required|numeric|min:0|max:2',
        ]);
        $subsetting = Subsetting::find($id);
        $subsetting->title = $validated['title'];
        $subsetting->setting_id = $validated['setting'];
        $subsetting->sex = $validated['sex'];
        $subsetting->save();
        return redirect('/admin/subsetting');
    }

    public function delete($id)
    {
        $subsetting = Subsetting::where('id', $id)->delete();

        return redirect('/admin/subsetting');
    }
}
