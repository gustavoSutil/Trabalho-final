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
        Schema::create('products', function (Blueprint $table){
            $table->id();
            $table->string('name')->unique();
            $table->double('unitary_value',null,null,true);
            $table->double('aliquot_icms',null,2,true);
            $table->double('aliquot_ipi',null,2,true);
            $table->double('aliquot_icms_st',null,2,true);
            $table->string('ncm_sh',false,true);
            $table->integer('cst',false,true);
            $table->integer('cfop',false,true);
            $table->double('weight_kg');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
