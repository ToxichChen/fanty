<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Models\Checkout;
use App\Models\Subscription;

class CheckoutController extends Controller
{
    public function index()
    {
        $checkouts = Checkout::all();

        return View::make('admin.checkouts.index')
            ->with('checkouts', $checkouts);
    }

    public function create()
    {
//        $configuration = new \Interkassa\Helper\Config();
//        $SDKClient = new \Interkassa\Interkassa($configuration);
//        $invoiceRequest = new \Interkassa\Request\GetInvoiceRequest();
//        $invoiceRequest
//            ->setCheckoutId('62619b17972ad26cd11d0423')
//            ->setPaymentNumber('ID_1234')
//            ->setAmount('100')
//            ->setCurrency('UAH')
//            ->setDescription('Payment Description');
//
//        $url = $SDKClient->makeInvoiceSciLink($invoiceRequest);
//        dd($url);
        return View::make('admin.checkouts.create');
    }

    public function createPayment(Request $request)
    {
        $validated = $request->validate([
            'id' => 'required|exists:subscriptions'
        ]);

        if (isset($_SESSION['user']) && !empty($_SESSION['user'])) {

            if (isset($_SESSION['user']['payment']['checkout_id'])) {
                $checkout = Checkout::find($_SESSION['user']['payment']['checkout_id']);
                $checkout->status = 'not_payed';

                $checkout->save();

                unset($_SESSION['user']['payment']);
            }

            $subscription = Subscription::find($validated['id']);

            $_SESSION['user']['payment']['amount'] = $subscription->price;
            $_SESSION['user']['payment']['state'] = 'paying';
            $_SESSION['user']['payment']['subscription_id'] = $validated['id'];

            $checkout = new Checkout();
            $checkout->amount = $subscription->price;
            $checkout->state = 'paying';
            $checkout->user_id = $_SESSION['user']['id'];
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
            'ik_co_id' => 'required',
            'ik_pm_no' => 'required'
        ]);

        if ($validated['ik_inv_st'] === 'success') {
            $checkout = Checkout::find($validated['ik_pm_no']);
            $checkout->status = 'success';

            $checkout->save();

            $user = User::find($_SESSION['user']['id']);

            $user->is_premium = 1;
            $user->premium_expires_at = '';
        }
    }
}
