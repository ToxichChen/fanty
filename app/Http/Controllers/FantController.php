<?php

namespace App\Http\Controllers;

use App\Models\Fant;
use App\Models\FantGroup;
use App\Models\GameSetting;
use App\Models\Subsetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\View;

class FantController extends Controller
{
    public function index()
    {
        $fants = DB::table('fants')
            ->join('game_settings', 'fants.game_setting_id', '=', 'game_settings.id')
            ->join('fant_groups', 'fants.fant_group_id', '=', 'fant_groups.id')
            ->join('subsettings', 'fants.subsetting_id', '=', 'subsettings.id')
            ->select('fants.*', 'game_settings.title as setting_name', 'fant_groups.title as fant_group_name', 'subsettings.title as subsetting_name')
            ->get();

        return View::make('admin.fants.index')
            ->with('fants', $fants);
    }

    public function createPage()
    {
        $settings = GameSetting::all();
        $subsettings = Subsetting::all();
        $fantGroups = FantGroup::all();
        return View::make('admin.fants.create')
            ->with(['subsettings' => $subsettings, 'settings' => $settings, 'fantGroups' => $fantGroups]);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|unique:fants|max:255',
            'content' => 'required',
            'setting' => 'required',
            'subsetting' => 'required',
            'fantGroup' => 'required',
            'sex_type' => 'required|numeric|min:0|max:2',
            'sex' => 'required|numeric|min:0|max:2',
            'media' => 'max:8194'
        ]);
        $path = '';

        if ( $request->file('media') !== null && $request->file()) {
            $path = $request->file('media')->store('storage');
        }

        $fant = new Fant();
        $fant->title = $validated['title'];
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

    public function delete($id)
    {
        $fant = Fant::where('id', $id)->delete();

        return redirect('/admin/fant');
    }

    public function formFantsArray() {
        $subsettings = [1,5,2,3,4,6];

        $start_time = microtime(true);

        $greenLevel = Config::get('constants.six_green');
        $fantsArray = ['green' => [], ];
        foreach ($greenLevel as $setting) {
            if ($setting !== 0 && in_array($setting, $subsettings)) {
                $fant = Fant::where('subsetting_id', $setting)->inRandomOrder()->limit(1)->get()->toArray();
                array_push($fantsArray['green'], $fant[0]);
            } else {
                $fant = Fant::where('subsetting_id', 0)->inRandomOrder()->limit(1)->get()->toArray();
                array_push($fantsArray['green'], $fant[0]);
            }
        }
        $end_time = microtime(true);
        $execution_time = ($end_time - $start_time);
        var_dump($start_time);
        var_dump($end_time);
        dd($execution_time);
        dd($fantsArray);
    }
}
