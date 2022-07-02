<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::all();

        return View::make('admin.post.index')
            ->with('posts', $posts);
    }

    public function createPage()
    {
        return View::make('admin.post.create');
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'text' => 'required',
            'media' => 'mimes:jpeg,jpg,png,gif|max:20000'
        ]);
        $path = '';

        if ($request->file('media') !== null && $request->file()) {
            $path = $request->file('media')->store('public/posts');
        }

        $post = new Post();
        $post->title = $validated['title'];
        $post->text = $validated['text'];
        $post->media = $path;
        $post->save();
        return redirect('/admin/post');
    }

    public function edit($id)
    {
        $post = Post::find($id);
        // show the edit form and pass the shark
        return View::make('admin.post.edit')
            ->with(['post' => $post]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'text' => 'required',
            'media' => 'mimes:jpeg,jpg,png,gif|max:20000'
        ]);
        $path = '';

        $post = Post::find($id);
        if ($request->file('media') !== null && $request->file()) {
            $path = Storage::disk('local')->path($post->media);
            if (file_exists($path) && $post->media != '' && !is_dir($path)) {
                unlink($path);
            }
            $path = $request->file('media')->store('public/posts');
        }

        $post->title = $validated['title'];
        $post->text = $validated['text'];
        if ($request->file('media') !== null && $request->file()) {
            $post->media = $path;
        }
        $post->save();
        return redirect('/admin/post');
    }

    public function delete($id)
    {
        $post = Post::find($id);
        $path = Storage::disk('local')->path($post->media);
        if (file_exists($path) && $post->media != '' && !is_dir($path)) {
            unlink($path);
        }
        $post = Post::where('id', $id)->delete();

        return redirect('/admin/post');
    }

    public function getAllPosts()
    {
        $posts = Post::all();
        $posts = $posts->toArray();
        for ($i = 0; $i < count($posts); $i++) {
            if (trim($posts[$i]["media"]) !== '') {
                $posts[$i]["media"] = str_replace("public/", "storage/", $posts[$i]["media"]);
                $posts[$i]["media"] = asset($posts[$i]["media"]);
            }
        }
        return $posts;
    }

    public function getPostById($id)
    {
        $post = Post::find($id);
        $post = $post->toArray();
        if (trim($post["media"]) !== '') {
            $post["media"] = str_replace("public/", "storage/", $post["media"]);
            $post["media"] = asset($post["media"]);
        }
        return $post;
    }
}
