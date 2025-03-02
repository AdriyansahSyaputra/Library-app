<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Delay extends Model
{
    protected $table = 'delays';
    protected $primaryKey = 'id';

    protected $fillable = [
        'borrow_id',
        'jumlah_hari',
        'denda',
    ];

    public function borrow(): BelongsTo
    {
        return $this->belongsTo(Borrow::class, 'borrow_id');
    }
}
