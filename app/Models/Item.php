<?php

namespace App\Models;

use App\Enums\BudgetCategory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $hidden = [
        'id',
        'budget_id',
    ];

    protected $casts = [
        'category' => BudgetCategory::class,
    ];

    protected static function booted()
    {
        parent::booted();

        self::creating(function ($item) {
            $item->uuid = str()->orderedUuid()->toString();
        });
    }

    public function budget()
    {
        return $this->belongsTo(Budget::class);
    }
}
