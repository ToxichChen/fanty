<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTimerToFants extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('fants', function (Blueprint $table) {
            $table->integer('is_timer_active')->default(0);
            $table->integer('timer')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('fants', function (Blueprint $table) {
            $table->dropColumn('is_timer_active');
            $table->dropColumn('timer');
        });
    }
}
