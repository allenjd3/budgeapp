<?php

use App\Models\Budget;
use App\Models\User;
use Inertia\Testing\AssertableInertia as Assert;

test('it shows all a users budgets and not another users', function () {
    $budgets = Budget::factory(3)
        ->for(User::factory())
        ->create();

    Budget::factory()->create();

    $user = $budgets->first()->user;

    $this->actingAs($user)
        ->get(route('dashboard.budgets.index'))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Budgets/Index')
            ->has('budgets', 3)
        );
});

test('it can show an individual budget', function () {
    $budget = Budget::factory()->create();

    $this->actingAs($budget->user)
        ->get(route('dashboard.budgets.show', $budget))
        ->assertInertia(fn (Assert $page) => $page
            ->component('Budgets/Show')
            ->has('budget', fn (Assert $page) => $page
                ->where('uuid', $budget->uuid)
                ->where('name', $budget->name)
                ->where('for_month', $budget->for_month->format('Y-m-d'))
                ->etc()
            )
        );
});

test('users cannot see budgets that dont belong to them', function () {
    $budget = Budget::factory()->create();

    $this->actingAs(User::factory()->create())
        ->get(route('dashboard.budgets.show', $budget))
        ->assertStatus(403);
});
