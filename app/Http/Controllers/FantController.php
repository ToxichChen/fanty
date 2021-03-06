<?php

namespace App\Http\Controllers;

use App\Models\Dislike;
use App\Models\Fant;
use App\Models\FantGroup;
use App\Models\GameSetting;
use App\Models\Like;
use App\Models\Subsetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\View;

class FantController extends Controller
{
    public function index()
    {
        $fants = DB::table('fants')
            ->join('game_settings', 'fants.game_setting_id', '=', 'game_settings.id')
            ->join('fant_groups', 'fants.fant_group_id', '=', 'fant_groups.id')
            ->leftJoin('subsettings', 'fants.subsetting_id', '=', 'subsettings.id')
            ->select(
                'fants.*',
                DB::raw('(SELECT COUNT(*) FROM likes WHERE likes.fant_id = fants.id) as likes'),
                DB::raw('(SELECT COUNT(*) FROM dislikes WHERE dislikes.fant_id = fants.id) as dislikes'),
                'game_settings.title as setting_name',
                'fant_groups.title as fant_group_name',
                'subsettings.title as subsetting_name'
            )
            ->get();
        return View::make('admin.fants.index')
            ->with('fants', $fants);
    }

    public function createPage()
    {
        $settings = GameSetting::all();
        $subsettings = Subsetting::all();
        $fantGroups = FantGroup::all();
        return View::make('admin.fants.create')
            ->with(['subsettings' => $subsettings, 'settings' => $settings, 'fantGroups' => $fantGroups]);
    }

    public function create(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required',
            'setting' => 'required',
            'subsetting' => 'required',
            'fantGroup' => 'required',
            'sex_type' => 'required|numeric|min:0|max:2',
            'sex' => 'required|numeric|min:0|max:2',
            'is_timer_active' => '',
            'timer' => 'numeric',
            'media' => 'mimes:jpeg,jpg,png,gif|max:40000'
        ]);
        $path = '';

        if ($request->file('media') !== null && $request->file()) {
            $path = $request->file('media')->store('public');
        }

        $fant = new Fant();
        $fant->content = $validated['content'];
        $fant->game_setting_id = $validated['setting'];
        $fant->fant_group_id = $validated['fantGroup'];
        $fant->subsetting_id = $validated['subsetting'];
        $fant->sex_type = $validated['sex_type'];
        $fant->sex = $validated['sex'];
        if (isset($validated['is_timer_active']) && $validated['is_timer_active'] === 'on'
            && isset($validated['timer']) && $validated['timer'] !== 0) {
            $fant->is_timer_active = 1;
            $fant->timer = $validated['timer'];
        }
        $fant->media = $path;
        $fant->save();
        return redirect('/admin/fant');
    }

    public function edit($id)
    {
        $fant = Fant::find($id);
        $subsetting = Subsetting::all();
        $settings = GameSetting::all();
        $fantGroups = FantGroup::all();
        // show the edit form and pass the shark
        return View::make('admin.fants.edit')
            ->with(['fant' => $fant, 'subsettings' => $subsetting, 'settings' => $settings, 'fantGroups' => $fantGroups]);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'content' => 'required',
            'setting' => 'required',
            'subsetting' => 'required',
            'fantGroup' => 'required',
            'sex_type' => 'required|numeric|min:0|max:2',
            'sex' => 'required|numeric|min:0|max:2',
            'is_timer_active' => '',
            'timer' => 'numeric',
            'media' => 'mimes:jpeg,jpg,png,gif|max:40000'
        ]);
        $path = '';

        $fant = Fant::find($id);
        if ($request->file('media') !== null && $request->file()) {
            $path = Storage::disk('local')->path($fant->media);
            if ($fant->media !== trim('') && file_exists($path)) {
                unlink($path);
            }
            $path = $request->file('media')->store('public');
        }

        $fant->content = $validated['content'];
        $fant->game_setting_id = $validated['setting'];
        $fant->fant_group_id = $validated['fantGroup'];
        $fant->subsetting_id = $validated['subsetting'];
        $fant->sex_type = $validated['sex_type'];
        $fant->sex = $validated['sex'];
        if (isset($validated['is_timer_active']) && $validated['is_timer_active'] === 'on'
            && isset($validated['timer']) && $validated['timer'] !== 0) {
            $fant->is_timer_active = 1;
            $fant->timer = $validated['timer'];
        } else {
            $fant->is_timer_active = 0;
        }
        if ($request->file('media') !== null && $request->file()) {
            $fant->media = $path;
        }
        $fant->save();
        return redirect('/admin/fant');
    }

    public function delete($id)
    {
        $fant = Fant::find($id);
        $path = Storage::disk('local')->path($fant->media);
        if ($fant->media !== trim('') && file_exists($path)) {
            unlink($path);
        }
        $fant = Fant::where('id', $id)->delete();

        return redirect('/admin/fant');
    }

    public function generateFant(Request $request)
    {
        if ($request->all() !== null) {
            if (in_array($request->current_level, Config::get('constants.levels_types'))) {
                if (!isset($_SESSION['settings'])) {
                    $_SESSION['settings'] = [];
                }
                if (!isset($_SESSION['game_duration']) || $_SESSION['game_duration'][$request->current_level] === "") {
                    return null;
                }
                if ($request->current_level !== 'red') {
                    $levelPlan = Config::get('constants.' . $_SESSION['game_duration'][$request->current_level]);
                    $planSetting = $levelPlan[$request->fant_number];
                    $fant = FantController::getFant($planSetting, $request);
                    return $fant;
                } else {
                    if (!isset($_SESSION['fants_game']['red_plan'])) {
                        $levelPlan = Config::get('constants.' . $_SESSION['game_duration'][$request->current_level]);
                        $planSetting = $levelPlan[$request->fant_number];
                    } else {
                        $levelPlan = $_SESSION['fants_game']['red_plan'];
                        $planSetting = $levelPlan[$request->fant_number];
                    }
                    if ($planSetting === -1) {
                        $newPlan = '';
                        if ($_SESSION['game_duration']['red'] === 'six_red' || $_SESSION['game_duration']['red'] === 'eight_red') {
                            $newPlan = Config::get('constants.six_and_eight_hard_or_soft_preset');
                        } elseif ($_SESSION['game_duration']['red'] === 'ten_red') {
                            $newPlan = Config::get('constants.ten_soft_or_hard_preset');
                        }
                        for ($i = 0; $i < count($newPlan); $i++) {
                            if ($newPlan[$i] === -1) {
                                if (in_array(10, $_SESSION['settings'])) {
                                    $newPlan[$i] = 10;
                                } else {
                                    $newPlan[$i] = 11;
                                }
                            }
                        }
                        array_pop($levelPlan);
                        $_SESSION['fants_game']['red_plan'] = array_merge($levelPlan, $newPlan);
                        $levelPlan = $_SESSION['fants_game']['red_plan'];
                        $planSetting = $levelPlan[$request->fant_number];
                        $fant = FantController::getFant($planSetting, $request);
                        return $fant;
                    } else if ($planSetting === -2) {
                        $newPlan = '';
                        switch ($_SESSION['settings']) {
                            case in_array(23, $_SESSION['settings']):
                                $newPlan = FantController::formAnalArray(23);
                                break;
                            case in_array(24, $_SESSION['settings']):
                                $newPlan = FantController::formAnalArray(24);
                                break;
                            case in_array(25, $_SESSION['settings']):
                                $newPlan = FantController::formAnalArray(25);
                                break;
                        }
                        if ($newPlan === '') {
                            if ($_SESSION['game_duration']['red'] === 'eight_red' || $_SESSION['game_duration']['red'] === 'ten_red') {
                                $newPlan = Config::get('constants.anal_off_ten_or_eight');
                            } else {
                                $newPlan = Config::get('constants.anal_off_six');
                            }
                            for ($i = 0; $i < count($newPlan); $i++) {
                                if ($newPlan[$i] === -1) {
                                    if (in_array(10, $_SESSION['settings'])) {
                                        $newPlan[$i] = 10;
                                    } else {
                                        $newPlan[$i] = 11;
                                    }
                                }
                            }
                        }
                        array_pop($levelPlan);
                        $_SESSION['fants_game']['red_plan'] = array_merge($levelPlan, $newPlan);
                        $levelPlan = $_SESSION['fants_game']['red_plan'];
                        $planSetting = $levelPlan[$request->fant_number];
                        $fant = FantController::getFant($planSetting, $request);
                        return $fant;
                    } else {
                        $fant = FantController::getFant($planSetting, $request);
                        return $fant;
                    }
                }
            }
        } else {
            return false;
        }
    }

    public static function formAnalArray($setting)
    {
        if ($_SESSION['game_duration']['red'] === 'six_red') {
            $plan = Config::get('constants.anal');
        } else {
            $plan = Config::get('constants.anal');
        }
        for ($i = 0; $i < count($plan); $i++) {
            $plan[$i] = $setting;
        }
        return $plan;
    }

    public function checkLikedOrDisliked()
    {
        if (!isset($_SESSION['user'])) {
            return false;
        }
        if (isset($_SESSION['fants_game']['current_fant']) && !empty($_SESSION['fants_game']['current_fant'])) {
            $like = Like::where(['user_id' => $_SESSION['user']['id'], 'fant_id' => $_SESSION['fants_game']['current_fant']->id])->first();
            if ($like !== null) {
                return 1;
            } else {
                $dislike = Dislike::where(['user_id' => $_SESSION['user']['id'], 'fant_id' => $_SESSION['fants_game']['current_fant']->id])->first();
                if ($dislike !== null) {
                    return -1;
                } else {
                    return 0;
                }
            }
        } else {
            return false;
        }
    }

    public static function getFant($planSetting, $request)
    {
        $levels = Config::get('constants.levels_ids');

        if (in_array($planSetting, $_SESSION['settings'])) {
            $fant = Fant::where(['subsetting_id' => $planSetting, 'sex' => $request->sex, 'fant_group_id' => $levels[$request->current_level]])->inRandomOrder()->first();
        } else {
            $fant = Fant::where(['subsetting_id' => 0, 'fant_group_id' => $levels[$request->current_level], 'sex' => $request->sex])->inRandomOrder()->first();
        }

        if ($fant === null) {
            return null;
        }

        $_SESSION['fants_game']['current_fant'] = $fant;
        $fant = $fant->toArray();
        if (trim($fant["media"]) !== '') {
            $fant["media"] = str_replace("public/", "storage/", $fant["media"]);
            $fant["media"] = asset($fant["media"]);
        }
        return $fant;
    }

    public function getPunishment(Request $request)
    {
        if ($request->all() !== null && $request->current_level != null && $request->sex != null) {
            if (in_array(1, $_SESSION['settings'])) {
                return FantController::getFant(1, $request);
            } else {
                return false;
            }
        } else {
            return null;
        }
    }

    public function getFinalPunishment()
    {
        $fant = Fant::where(['id' => Config::get('constants.final_punishment_id')])->get();
        $fant = $fant->toArray();
        if (trim($fant[0]["media"]) !== '') {
            $fant[0]["media"] = str_replace("public/", "storage/", $fant[0]["media"]);
            $fant[0]["media"] = asset($fant[0]["media"]);
        }
        if ($fant === null) {
            return false;
        }
        return $fant;
    }

    public function getFinishFant()
    {
        if (!isset($_SESSION['settings'])) {
            $_SESSION['settings'] = [];
        }
        $finishSetting = '';
        $finishArray = Config::get('constants.finish_ids');
        foreach ($finishArray as $key) {
            if (in_array($key, $_SESSION['settings'])) {
                $finishSetting = $key;
            }
        }
        if ($finishSetting === '') {
            $finishSetting = 29;
        }
        $fant = Fant::where(['subsetting_id' => $finishSetting])->inRandomOrder()->first();
        $fant = $fant->toArray();
        if (trim($fant["media"]) !== '') {
            $fant["media"] = str_replace("public/", "storage/", $fant["media"]);
            $fant["media"] = asset($fant["media"]);
        }
        if ($fant === null) {
            return null;
        } else {
            return $fant;
        }
    }

    public function likeFant(): ?bool
    {
        if (!isset($_SESSION['user'])) {
            return null;
        }
        if (isset($_SESSION['fants_game']['current_fant']) && !empty($_SESSION['fants_game']['current_fant'])) {
            $like = new Like();
            $like->user_id = $_SESSION['user']['id'];
            $like->fant_id = $_SESSION['fants_game']['current_fant']->id;
            $like->save();
            return true;
        } else {
            return null;
        }
    }

    public function dislikeFant(): ?bool
    {
        if (!isset($_SESSION['user'])) {
            return null;
        }
        if (isset($_SESSION['fants_game']['current_fant']) && !empty($_SESSION['fants_game']['current_fant'])) {
            $dislike = new Dislike();
            $dislike->user_id = $_SESSION['user']['id'];
            $dislike->fant_id = $_SESSION['fants_game']['current_fant']->id;
            $dislike->save();
            return true;
        } else {
            return null;
        }
    }
}
