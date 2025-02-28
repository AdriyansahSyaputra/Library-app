<?php

namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Book::create([
            'judul' => 'Standing Out While Blending In',
            'slug' => 'standing-out-while-blending-in',
            'penulis' => 'Alex Abramian, Phd',
            'tahun_terbit' => '2023-01-01',
            'status' => 'tersedia',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            'gambar' => 'standing-out-while-blending-in.jpg',
        ]);

        Book::create([
            'judul' => 'The Ambition Advantage',
            'slug' => 'the-ambition-advantage',
            'penulis' => 'Morgan Debaun',
            'tahun_terbit' => '2023-05-02',
            'status' => 'tersedia',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            'gambar' => 'the-ambition-advantage.jpg',
        ]);

        Book::create([
            'judul' => 'Editing Survival Guide For Writers',
            'slug' => 'editing-survival-guide-for-writers',
            'penulis' => 'Tina Morlock',
            'tahun_terbit' => '2023-05-02',
            'status' => 'tersedia',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            'gambar' => 'editing-survival-guide-for-writers.jpg',
        ]);

        Book::create([
            'judul' => 'Starting A Business',
            'slug' => 'starting-a-business',
            'penulis' => 'Walter Grant',
            'tahun_terbit' => '2023-02-07',
            'status' => 'tersedia',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            'gambar' => 'starting-a-business.jpg',
        ]);

        Book::create([
            'judul' => 'Elastic Habits',
            'slug' => 'elastic-habits',
            'penulis' => 'Stephen Guise',
            'tahun_terbit' => '2023-07-07',
            'status' => 'tersedia',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            'gambar' => 'elastic-habits.jpg',
        ]);

        Book::create([
            'judul' => 'The Big Deal',
            'slug' => 'the-big-deal',
            'penulis' => 'Hisham Al Gurg',
            'tahun_terbit' => '2023-10-07',
            'status' => 'tersedia',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            'gambar' => 'the-big-deal.jpg',
        ]);

        Book::create([
            'judul' => 'Leadership',
            'slug' => 'leadership',
            'penulis' => 'Joshua Spodek',
            'tahun_terbit' => '2023-02-07',
            'status' => 'dipinjam',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            'gambar' => 'leadership.jpg',
        ]);

        Book::create([
            'judul' => 'Manage Your Career',
            'slug' => 'manage-your-career',
            'penulis' => 'John Arthur',
            'tahun_terbit' => '2023-02-07',
            'status' => 'dipinjam',
            'deskripsi' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.',
            'gambar' => 'manage-your-career.jpg',
        ]);
    }
}
