<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'unitary_value',
        'aliquot_icms',
        'aliquot_ipi',
        'aliquot_icms_st',
        'ncm_sh',
        'cst',
        'cfop',
        'weight_kg'
    ];
    public $timestamps = false;

}
