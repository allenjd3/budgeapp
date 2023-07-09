<?php

namespace Database\Factories;

use App\Enums\AccountStatus;
use App\Models\Budget;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class BudgetFactory extends Factory
{
    protected $model = Budget::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->word,
            'for_month' => now()->startOfMonth()
                ->subMonth(rand(1, 12)),
            'user_id' => User::factory(),
        ];
    }
}
