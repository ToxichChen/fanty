<?php

namespace App\Http\Controllers;

use App\Models\FantGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;

class FantGroupController extends Controller
{
    public function index()
    {
        $fantGroups = FantGroup::all();

        return View::make('admin.fantGroup.index')
            ->with('fantGroups', $fantGroups);
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

        $fantGroup = new FantGroup();
        $fantGroup->title = $validated['title'];
        $fantGroup->save();
        return redirect('/admin/fantGroup');
    }

    public function edit($id)
    {
        $fantGroup = FantGroup::find($id);
        // show the edit form and pass the shark
        return View::make('admin.fantGroup.edit')
            ->with('fantGroup', $fantGroup);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|unique:game_settings|max:255',
        ]);
        $fantGroup = FantGroup::find($id);
        $fantGroup->title = $validated['title'];
        $fantGroup->save();
        return redirect('/admin/fantGroup');
    }

    public function delete($id)
    {
        $fantGroup = FantGroup::where('id',$id)->delete();

        return redirect('/admin/fantGroup');
    }
}
