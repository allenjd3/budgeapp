<?php

namespace Database\Seeders;

use App\Models\Budget;
use App\Models\Item;
use App\Models\User;
use Illuminate\Database\Seeder;

class BudgetSeeder extends Seeder
{
    public function run(): void
    {
        User::get()
            ->each(function (User $user) {
                Budget::factory(3)
                    ->state([
                        'user_id' => $user->id,
                    ])
                    ->has(Item::factory(20))
                    ->create();
            });
    }
}
