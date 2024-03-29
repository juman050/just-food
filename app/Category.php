<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{   
	/*
    |---------------------------------------------
    | Category model
    |---------------------------------------------
    |
    | 
    | Author : Juman
    | Version : 1.0.0
    |
    */

    public function getItems(){
        return $this->hasMany(\App\Item::class,'item_cat_id');
    }
}
