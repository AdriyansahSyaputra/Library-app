<?php

namespace App\Helpers;

class SlugHelper
{
    public static function generateSlug($string)
    {
        // Ubah string menjadi lowercase
        $string = strtolower($string);

        // Ganti spasi dengan tanda strip
        $string = str_replace(' ', '-', $string);

        // Hapus karakter khusus
        $string = preg_replace('/[^a-z0-9\-]/', '', $string);

        // Hapus tanda strip berulang
        $string = preg_replace('/-+/', '-', $string);

        // Hapus tanda strip di awal dan akhir
        $string = trim($string, '-');

        return $string;
    }
}
