<?php

namespace App\Http\Controllers;

class BudgetsController extends Controller
{
    public function index()
    {
        return inertia('Budgets/Index', [
            'budgets' => auth()->user()->budgets,
        ]);
    }
}
