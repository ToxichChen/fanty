<?php

namespace App\Http\Controllers;

use App\Models\Music;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Config;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Storage;

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
            'media' => 'required|mimes:mp3|max:20000'
        ]);

        if (Music::where('media', '=', $request->file('media')->getClientOriginalName())->first()) {
            throw ValidationException::withMessages(['media' => 'Трек с таким названием файла уже существует']);
        }
        if (!file_exists(Config::get('constants.music_path'))) {
            mkdir(Config::get('constants.music_path'));
        }
        if ($request->file('media') !== null && $request->file()) {
            Storage::disk('music_uploads')->putFileAs('.', $request->file('media'), $request->file('media')->getClientOriginalName());

            //file_put_contents(Config::get('constants.music_path') . $request->file('media')->getClientOriginalName() , $request->file('media'));
        }
        $music = new Music();
        $music->title = $validated['title'];
        $music->media = $request->file('media')->getClientOriginalName();
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
        $path = Config::get('constants.music_path') . $music->media;
        if (file_exists($path)) {
            unlink($path);
        }
        $music->delete();
        return redirect('/admin/music');
    }

    public function getMusicList()
    {
        $musicArray = Music::all()->toArray();

        return $musicArray;
    }
}
