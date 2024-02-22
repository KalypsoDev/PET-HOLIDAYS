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

    public function show($id)
    {
        $accommodation = Accommodation::find($id);
        return response()->json($accommodation, 200);
    }

    public function update(AccommodationRequest $request, $id)
    {
        $accommodation = Accommodation::find($id);
        $accommodation->title = $request->title;
        $accommodation->price = $request->price;
        $accommodation->city = $request->city;
        $accommodation->image = $request->image;
        $accommodation->description = $request->description;
        $accommodation->save();

        return response()->json([
            'success' => true
        ], 200);
    }

    public function destroy($id)
    {
        Accommodation::find($id)->delete();
        return response()->json([
            'success' => true
        ], 200);
    }
}
