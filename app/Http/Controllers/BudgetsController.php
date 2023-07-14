<?php

namespace App\Http\Controllers;

use App\Enums\BudgetCategory;
use App\Models\Budget;

class BudgetsController extends Controller
{
    public function __construct()
    {
        $this->authorizeResource(Budget::class, 'budget');
    }

    public function index()
    {
        return inertia('Budgets/Index', [
            'budgets' => auth()->user()->budgets,
        ]);
    }

    public function show(Budget $budget)
    {
        return inertia('Budgets/Show', [
            'budget' => $budget->load('items'),
            'categories' => collect($budget->items)
                ->groupBy(fn ($item) => $item->category->label()),
            'availableCategories' => BudgetCategory::toArray(),
        ]);
    }
}
