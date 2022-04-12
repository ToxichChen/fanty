<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Support;
use Illuminate\Support\Facades\Validator;

class EmailController extends Controller
{
    public function sendSupportEmail(Request $request)
    {
        $response = array('response' => '', 'errors' => '', 'success' => false);
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|max:255',
            'title' => 'required|max:255',
            'text' => 'required|max:60000'
        ]);
        if ($validator->fails()) {
            $response['errors'] = $validator->messages()->all();
            return $response;
        }
        $data = [
            'name' => $request->name,
            'email' => $request->email,
            'title' => $request->title,
            'text' => $request->text
        ];
        try {
            Mail::to(env('MAIL_USERNAME'))->send(new Support($data));
        } catch (\Exception $exception) {
            $response['response'] = $exception->getMessage();
            return $response;
        }
        $response['success'] = true;
        return $response;
    }
}
