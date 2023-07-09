<?php

namespace App\Enums;

enum AccountStatus: string
{
    case ADMIN = 'admin';
    case SUBSCRIBER = 'subscriber';
    case FREE_TRIAL = 'free_trial';

    public function isAdmin(): bool
    {
        return $this === self::ADMIN;
    }

    public function isSubscriber(): bool
    {
        return $this === self::SUBSCRIBER;
    }

    public function isFreeTrial(): bool
    {
        return $this === self::FREE_TRIAL;
    }

    public function default(): self
    {
        return self::FREE_TRIAL;
    }
}
