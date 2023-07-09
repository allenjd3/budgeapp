<?php

namespace App\Http\Controllers;

use App\Models\Budget;

class BudgetsController extends Controller
{
    public function index()
    {
        return inertia('Budgets/Index', [
            'budgets' => auth()->user()->budgets,
        ]);
    }

    public function show(Budget $budget)
    {
        return inertia('Budgets/Show', [
            'budget' => $budget,
        ]);
    }
}