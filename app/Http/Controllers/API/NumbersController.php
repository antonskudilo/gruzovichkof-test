<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Number;

class NumbersController extends Controller
{
    public function generate()
    {
        $number = Number::createRandomNumber();
        return response()->json([
            "number" => $number
        ], 201);
    }

    public function retrieve($id)
    {
        if (!ctype_digit ($id)) {
            return response()->json([
                "error" => "incorrect id format",
            ], 200);
        }
        $number = Number::find($id);
        if ($number) {
            return response()->json([
                "number" => $number,
            ], 200);
        } else {
            return response()->json([
                "error" => "not found",
            ], 200);
        }
    }

    public function index()
    {
        $numbers = Number::all();
        return response()->json([
            "numbers" => $numbers
        ], 200);
    }
}
