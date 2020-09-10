<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Number extends Model
{
    public static function createRandomNumber()
    {
        $number = new static;
        $number->value = rand(0, 999);
        $number->save();
        return $number;
    }
}
