<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

            
    protected $fillable = [
        'cnpj',
        'name',
        'ie',
        'razao_social',
        'phone_number',
        'email',
        'cep',
        'street',
        'number',
        'city',
        'UF',
        'observation',
        'status',
    ];
    public $timestamps = false;
}
