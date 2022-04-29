<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use App\Models\Checkout;

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
    public function success(Request $request)
    {
        dd($request);
    }
}
