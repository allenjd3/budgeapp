<?php

namespace App\Http\Controllers;

use App\Http\Requests\ItemRequest;
use App\Models\Budget;

class ItemsController extends Controller
{
    public function store(ItemRequest $request, Budget $budget)
    {
        $item = $budget->items()->create($request->validated());

        return redirect()->route('dashboard.budgets.show', $budget)
            ->with([
                'message' => 'Item created successfully',
                'type' => 'success',
                'uuid' => $item->uuid,
            ]);
    }
}
