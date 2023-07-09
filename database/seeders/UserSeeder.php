<?php

namespace Database\Seeders;

use App\Enums\AccountStatus;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'email' => 'admin@budgeapp.test',
            'account' => AccountStatus::ADMIN,
        ]);

        User::factory(20)->create();
    }
}
