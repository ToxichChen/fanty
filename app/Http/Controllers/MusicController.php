<?php

namespace App\Http\Controllers;

use App\Models\Music;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;

class MusicController extends Controller
{
    public function index()
    {
        $music = Music::all();
        return View::make('admin.music.index')
            ->with('music', $music);
    }

    public function createPage()
    {
        return View::make('admin.music.create');
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'media' => 'required|mimes:mp3|max:8194'
        ]);
        $path = '';

        if ($request->file('media') !== null && $request->file()) {
            $path = $request->file('media')->store('public/music');
        }
        $music = new Music();
        $music->title = $validated['title'];
        $music->path = $path;
        $music->save();
        return redirect('/admin/music');
    }

    public function edit($id)
    {
        $music = Music::find($id);
        // show the edit form and pass the shark
        return View::make('admin.music.edit')
            ->with('music', $music);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
        ]);
        $music = Music::find($id);
        $music->title = $validated['title'];
        $music->save();
        return redirect('/admin/music');
    }

    public function delete($id)
    {
        $music = Music::find($id);
        $path = Storage::disk('local')->path($music->path);
        if (file_exists($path)) {
            unlink($path);
        }
        $music->delete();
        return redirect('/admin/music');
    }

    public function getMusicList()
    {
        $musicArray = Music::all()->toArray();
        if (!$musicArray !== []) {
            for ($i = 0;  $i < count($musicArray); $i++) {
                if (trim($musicArray[0]["path"]) !== '') {
                    $musicArray[0]["path"] = str_replace("public/", "storage/", $musicArray[0]["path"]);
                    $musicArray[0]["path"] = asset($musicArray[0]["path"]);
                }
            }
        }

        return $musicArray;
    }
}
