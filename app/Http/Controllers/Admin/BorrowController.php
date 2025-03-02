<?php

namespace App\Http\Controllers\Admin;

use Inertia\Inertia;
use App\Models\Borrow;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BorrowController extends Controller
{
    public function index()
    {
        $borrows = Borrow::with('user', 'book')->get();
        return Inertia::render('Admin/Borrowing', [
            'borrows' => $borrows
        ]);
    }

    public function searchAndFilter(Request $request)
    {
        return response()->json([
            'borrows' => $this->getFilteredBorrows($request)
        ]);
    }

    private function getFilteredBorrows(Request $request)
    {
        $searchQuery = $request->input('search');
        $filterStatus = $request->input('status');

        return Borrow::with('user', 'book')
            ->when($searchQuery, function ($query) use ($searchQuery) {
                $query->whereHas('book', function ($q) use ($searchQuery) {
                    $q->where('name', 'like', "%$searchQuery%");
                });
            })
            ->when($filterStatus, function ($query) use ($filterStatus) {
                $query->where('status', $filterStatus);
            })
            ->get();
    }
}
