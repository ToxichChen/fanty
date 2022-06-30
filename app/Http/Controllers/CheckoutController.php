<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Models\Checkout;
use App\Models\Subscription;
use Carbon\Carbon;

class CheckoutController extends Controller
{
    public function index()
    {
        $checkouts = Checkout::all();

        return View::make('admin.checkouts.index')
            ->with('checkouts', $checkouts);
    }

    public function createPayment(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required|exists:subscriptions'
        ]);

        if (isset($_SESSION['user']) && !empty($_SESSION['user'])) {

            if (isset($_SESSION['user']['payment']['checkout_id'])) {
                $checkout = Checkout::find($_SESSION['user']['payment']['checkout_id']);
                $checkout->state = 'not_payed';

                $checkout->save();

                unset($_SESSION['user']['payment']);
            }

            $subscription = Subscription::find($validated['id']);

            $_SESSION['user']['payment']['price'] = $subscription->price;
            $_SESSION['user']['payment']['state'] = 'paying';
            $_SESSION['user']['payment']['subscription_id'] = $validated['id'];

            $checkout = new Checkout();
            $checkout->price = $subscription->price;
            $checkout->state = 'paying';
            $checkout->user_id = $_SESSION['user']['id'];
            $checkout->email = $_SESSION['user']['email'];
            $checkout->checkout_id = '';
            $checkout->subscription_id = $_SESSION['user']['payment']['subscription_id'];

            $checkout->save();

            $_SESSION['user']['payment']['checkout_id'] = $checkout->id;

            return $checkout->id;
        } else {
            return false;
        }
    }

    public function result(Request $request)
    {
        $validated = $request->validate([
            'ik_inv_st' => 'required',
            'ik_inv_id' => "required",
            'ik_co_id' => 'required',
            'ik_pm_no' => 'required'
        ]);

        if ($validated['ik_inv_st'] === 'success') {
            $checkout = Checkout::find($validated['ik_pm_no']);
            $subscription = Subscription::find($checkout->subscription_id);

            $checkout->state = 'success';

            $checkout->save();

            $user = User::find($_SESSION['user']['id']);

            $date = Carbon::now();
            $newDate = $date->addDays($subscription->duration);

            $user->is_premium = 1;
            $user->premium_expires_at = $newDate;
            $user->save();

            $_SESSION['user']['is_premium'] = 1;
            $_SESSION['user']['premium_expires_at'] = $newDate;

            $_SESSION['user']['payment']['state'] = 'success';

            return redirect('/');
        } else {

            $checkout = Checkout::find($validated['ik_pm_no']);
            $checkout->state = 'failed';
            $checkout->save();

            $_SESSION['user']['payment']['state'] = 'failed';

            return redirect('/');
        }
    }
}
