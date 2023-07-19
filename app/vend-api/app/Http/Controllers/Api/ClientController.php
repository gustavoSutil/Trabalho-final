<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\User;
use Composer\InstalledVersions;
use DateTime;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ClientController extends Controller
{

    protected $client;

    public function __construct(Client $client)
    {
        $this->client = $client;
    }
    /**
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->client = Client::query()
                                    ->where('status','!=','f')
                                    ->get();
        return $this->client;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $this->client = new Client;
        $this->client->cnpj = $request->input('cnpj');
        $this->client->name = $request->input('name');
        $this->client->ie = $request->input('ie');
        $this->client->razao_social = $request->input('razao_social');
        $this->client->phone_number = $request->input('phone_number');
        $this->client->email = $request->input('email');
        $this->client->cep = $request->input('cep');
        $this->client->street = $request->input('street');
        $this->client->number = $request->input('number');
        $this->client->city = $request->input('city');  
        $this->client->UF = $request->input('UF');
        $this->client->observation = $request->input('observation');
        $this->client->status = $request->input('status');
        $this->client->save();
        return $this->client;
    }    

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $this->client = Client::query()->where('id','=',$id)->get();
        return $this->client;
    }

    /**
     * Update the specified resource in storage.
     * @param Client $client
     */
    public function update(Request $request, Client $client)
    {
        $client->update($request->all());
        return $client;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $this->client = Client::select()->where('id','=',$id)->delete();
        return $this->client;
    }
}
