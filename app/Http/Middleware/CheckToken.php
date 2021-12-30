<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckToken
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if ($request->route()->parameter('id')) {
            return $next($request);
        }

        return redirect()->route('admin.login'); // If user is not an admin.
        //        return $next($request);
    }
}
