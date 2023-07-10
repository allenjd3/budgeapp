<?php

namespace App\Models;

use App\Enums\AccountStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $guarded = [];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
        'account' => AccountStatus::class,
    ];

    protected static function booted()
    {
        self::creating(function ($user) {
            $user->uuid = str()->orderedUuid()->toString();
        });
    }

    public function budgets()
    {
        return $this->hasMany(Budget::class);
    }

    public function canImpersonate()
    {
        return $this->account->isAdmin();
    }

    public function canBeImpersonated()
    {
        return ! $this->account->isAdmin();
    }
}
