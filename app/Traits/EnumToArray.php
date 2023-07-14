<?php

namespace App\Traits;

trait EnumToArray
{
    public static function toArray(): array
    {
        $array = [];

        foreach (self::cases() as $case) {
            $array[$case->value] = $case->label();
        }

        return $array;
    }

    abstract public function label(): string;
}
