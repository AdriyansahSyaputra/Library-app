<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Delay;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class DelayController extends Controller
{
    public function index()
    {
        $delays = Delay::with('borrow')->get();

        return Inertia::render('Admin/Delay', [
            'delays' => $delays ? $delays : []
        ]);
    }
}
