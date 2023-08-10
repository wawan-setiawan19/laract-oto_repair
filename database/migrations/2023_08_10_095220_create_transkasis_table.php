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
        Schema::create('transkasis', function (Blueprint $table) {
            $table->id();
            $table->string('id_user');
            $table->string('id_bengkel');
            $table->date('tanggal_transaksi');
            $table->string('kategori');
            $table->string('nama_layanan');
            $table->string('metode_pembayaran');
            $table->string('status_pembayaran');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transkasis');
    }
};
