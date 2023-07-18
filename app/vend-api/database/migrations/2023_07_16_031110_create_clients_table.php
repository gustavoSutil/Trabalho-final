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
        Schema::create('clients', function (Blueprint $table){
            $table->id();
            $table->string('cnpj')->unique();
            $table->string('name')->unique();
            $table->string('ie')->nullable();
            $table->string('razao_social');
            $table->string('phone_number');
            $table->string('email');
            $table->string('cep');
            $table->string('street');
            $table->string('number');
            $table->string('city');
            $table->string('UF');
            $table->text('observation')->nullable();
            $table->boolean('status')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
