<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;

    protected $fillable = [
    'unitary_price',
    'quantity',
    'id_order'
    ];
    
    public function products() {
        return $this->hasOne(Product::class);
    }
    public function budget(){
        return $this->belongsTo(Budget::class);
    }
}
