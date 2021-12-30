<?php

namespace App\Http\Controllers;

use App\Models\Fant;
use App\Models\FantGroup;
use App\Models\GameSetting;
use App\Models\Subsetting;
use Illuminate\Http\Request;
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
        $request->validate([
            'title' => 'required|unique:fants|max:255',
            'content' => 'required',
            'setting' => 'required',
            'subsetting' => 'required',
            'fantGroup' => 'required',
            'media' => 'max:8194'
        ]);
        $path = $request->file('media')->store('storage');
        dd($path);
        $fant = new Fant();

        if($request->file()) {
            $fileName = time().'_'.$request->file->getClientOriginalName();
            $filePath = $request->file('file')->storeAs('uploads', $fileName, 'public');

            $fant->title = $request->title;
            $fant->media = '/storage/' . $filePath;
            dd($fant);
            $fant->save();

            return back()
                ->with('success','File has been uploaded.')
                ->with('file', $fileName);
        }


        $subsetting = new Subsetting();
        $subsetting->title = $validated['title'];
        $subsetting->setting_id = $validated['setting'];
        $subsetting->save();
        return redirect('/admin/fant');
    }

    public function edit($id)
    {
        $subsetting = Subsetting::find($id);
        $settings = GameSetting::all();
        // show the edit form and pass the shark
        return View::make('admin.fant.edit')
            ->with(['fant' => $subsetting, 'settings' => $settings]);
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
        $subsetting = Subsetting::where('id', $id)->delete();

        return redirect('/admin/fant');
    }
}
