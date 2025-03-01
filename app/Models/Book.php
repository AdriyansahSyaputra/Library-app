<?php

namespace App\Models;

use App\Helpers\SlugHelper;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Book extends Model
{
    protected $table = 'books';
    protected $primaryKey = 'id';

    protected $fillable = [
        'judul',
        'slug',
        'penulis',
        'tahun_terbit',
        'status',
        'deskripsi',
        'gambar',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($book) {
            $slug = SlugHelper::generateSlug($book->judul);
            $count = Book::where('slug', $slug)->count();

            // Jika slug sudah ada, tambahkan angka di belakang
            if ($count > 0) {
                $slug = $slug . '-' . ($count + 1);
            }

            $book->slug = $slug;
        });

        static::updating(function ($book) {
            if ($book->isDirty('judul')) {
                $slug = SlugHelper::generateSlug($book->judul);
                $count = Book::where('slug', $slug)->where('id', '!=', $book->id)->count();

                // Jika slug sudah ada, tambahkan angka di belakang
                if ($count > 0) {
                    $slug = $slug . '-' . ($count + 1);
                }

                $book->slug = $slug;
            }
        });
    }


    public function borrows(): HasMany
    {
        return $this->hasMany(Borrow::class);
    }
}
