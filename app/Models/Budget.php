<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Budget extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $hidden = [
        'id',
        'user_id',
    ];

    protected static function booted()
    {
        parent::booted();

        self::creating(function ($budget) {
            $budget->uuid = str()->orderedUuid();
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
