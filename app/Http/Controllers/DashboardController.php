<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        if (auth()->user()->account->isAdmin()) {
            return Inertia::render('Admin/Dashboard', [
                'users' => User::paginate(10),
            ]);
        }

        return Inertia::render('Dashboard');
    }
}
