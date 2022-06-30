<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Models\Subscription;

class SubscriptionController extends Controller
{
    public function index()
    {
        $subscriptions = Subscription::all();

        return View::make('admin.subscription.index')
            ->with('subscriptions', $subscriptions);
    }

    public function createPage()
    {
        return View::make('admin.subscription.create');
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'description' => 'max:255',
            'duration' => 'required|numeric',
            'price' => 'required|numeric'
        ]);

        $subscription = new Subscription();
        $subscription->title = $validated['title'];
        $subscription->description = $validated['description'];
        $subscription->duration = $validated['duration'];
        $subscription->price = $validated['price'];
        $subscription->save();

        return redirect('/admin/subscription');
    }

    public function edit($id)
    {
        $subscription = Subscription::find($id);

        return View::make('admin.subscription.edit')
            ->with(['subscription' => $subscription]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'description' => 'max:255',
            'duration' => 'numeric',
            'price' => 'required|numeric'
        ]);

        $subscription = Subscription::find($id);
        $subscription->title = $validated['title'];
        $subscription->description = $validated['description'] == null ? '' : $validated['description'];
        $subscription->duration = $validated['duration'];
        $subscription->price = $validated['price'];
        $subscription->save();

        return redirect('/admin/subscription');
    }

    public function delete($id)
    {
        $subscription = Subscription::find($id);

        return redirect('/admin/subscription');
    }

    public function getAllSubscriptions()
    {
        $subscriptions = Subscription::all();

        return $subscriptions->toArray();
    }
}
