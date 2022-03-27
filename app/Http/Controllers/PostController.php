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
            'media' => 'mimes:jpeg,jpg,png,gif|max:8194'
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
            'media' => 'mimes:jpeg,jpg,png,gif|max:8194'
        ]);
        $path = '';

        $post = Post::find($id);
        if ($request->file('media') !== null && $request->file()) {
            $path = Storage::disk('local')->path($post->media);
            if (file_exists($path)) {
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
        if (file_exists($path)) {
            unlink($path);
        }
        $post = Post::where('id', $id)->delete();

        return redirect('/admin/post');
    }

    public function getAllPosts()
    {
        return Post::all();
    }

    public function getPostById($id)
    {
        return Post::find($id);
    }
}
