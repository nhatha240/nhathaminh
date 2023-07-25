<?php

namespace App\Observers;

use App\Models\NameModel;

class NameObserver
{
    /**
     * Handle the NameModel "created" event.
     */
    public function created(NameModel $nameModel): void
    {
        //
    }

    /**
     * Handle the NameModel "updated" event.
     */
    public function updated(NameModel $nameModel): void
    {
        //
    }

    /**
     * Handle the NameModel "deleted" event.
     */
    public function deleted(NameModel $nameModel): void
    {
        //
    }

    /**
     * Handle the NameModel "restored" event.
     */
    public function restored(NameModel $nameModel): void
    {
        //
    }

    /**
     * Handle the NameModel "force deleted" event.
     */
    public function forceDeleted(NameModel $nameModel): void
    {
        //
    }
}
