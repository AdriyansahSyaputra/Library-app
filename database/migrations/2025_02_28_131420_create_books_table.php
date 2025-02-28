<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('judul', 200)->nullable(false);
            $table->string('slug', 200)->nullable(false);
            $table->string('penulis', 100)->nullable(false);
            $table->date('tahun_terbit')->nullable(false);
            $table->enum('status', ['tersedia', 'dipinjam'])->nullable(false);
            $table->text('deskripsi', 500)->nullable(false);
            $table->string('gambar', 100)->nullable(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
