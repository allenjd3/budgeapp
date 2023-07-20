<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemRequest;
use App\Models\Budget;

class ItemsController extends Controller
{
    public function index()
    {

    }

    public function store(ItemRequest $request, Budget $budget)
    {
        $budget->items()->create($request->validated());

        return redirect()->route('dashboard.budgets.show', $budget)->with('success', 'Item added.');
    }
}
