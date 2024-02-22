<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Accommodation;
use App\Http\Requests\AccommodationRequest;

class AccommodationController extends Controller
{

    public function index()
    {
        $accommodations = Accommodation::all();
        return response()->json($accommodations, 200);
    }

    public function store(AccommodationRequest $request)
    {
        Accommodation::create($request->all());
        return response()->json([
            'success' => true
        ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        //
    }
}
