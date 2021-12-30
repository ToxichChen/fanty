<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckAdmin
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
        if (isset($_SESSION['admin_user']) && $_SESSION['admin_user']['admin'] === 1) {
            return $next($request);
        }

        return redirect()->route('admin.login'); // If user is not an admin.
    }
}
