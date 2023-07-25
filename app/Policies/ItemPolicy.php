<?php

namespace App\Policies;

use App\Models\Item;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class ItemPolicy
{
    use HandlesAuthorization;

    public function viewAny(User $user): bool
    {
        return auth()->check();
    }

    public function view(User $user, Item $item): bool
    {
        return $user->is($item->budget->user);
    }

    public function create(User $user): bool
    {
        return auth()->check();
    }

    public function update(User $user, Item $item): bool
    {
        return $user->is($item->budget->user);
    }

    public function delete(User $user, Item $item): bool
    {
        return $user->is($item->budget->user);
    }
}
