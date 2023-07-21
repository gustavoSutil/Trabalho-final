<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    protected $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $this->product = Product::query()->get();
        return $this->product;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->product = new Product;
        $this->product->name = $request->input('name');
        $this->product->unitary_value = $request->input('unitary_value');
        $this->product->aliquot_icms = $request->input('aliquot_icms');
        $this->product->aliquot_ipi = $request->input('aliquot_ipi');
        $this->product->aliquot_icms_st = $request->input('aliquot_icms_st');
        $this->product->ncm_sh = $request->input('ncm_sh');
        $this->product->cst = $request->input('cst');
        $this->product->cfop = $request->input('cfop');
        $this->product->weight_kg = $request->input('weight_kg');
        $this->product->save();
        return $this->product;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $this->product = Product::query()->where('id','=',$id)->get();
        return $this->product;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->product = Product::select()->where('id','=',$id)->delete();
        return $this->product;
    }
}
