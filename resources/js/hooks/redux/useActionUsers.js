import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import {
    loginForm,
    logoutUser,
    registerForm,
    checkUser,
} from "./../../redux/formFeatures/formFeaturesOperation";
import {
    fantyCounterCanceledTask,
    fantyLevel,
    fantyNumberTask,
    fantySuccess,
} from "../../redux/activeFantyFeatures/activeFantyFeaturesActions";
import {
    settingsGameData,
    settingsError,
    settingsSuccess,
    usersSetting,
    durationGameData,
} from "../../redux/settingsFeatures/SettingsAction";

function useActionUsers() {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.authForm.user.response);
    const vip = useSelector((state) => state.authForm.user.vip);
    const loadingProfile = useSelector(
        (state) => state.authForm.isAuthenticated
    );
    const getErrorUser = useSelector((state) => state.authForm.user[0]);

    const loginUser = useCallback(
        (data) => {
            dispatch(loginForm(data));
        },
        [dispatch]
    );

    const registerUser = useCallback(
        (data) => {
            dispatch(registerForm(data));
        },
        [dispatch]
    );

    const clearDataSettingAndFant = useCallback(() => {
        dispatch(settingsSuccess([]));
        dispatch(settingsGameData([]));
        dispatch(settingsError(null));
        dispatch(fantyNumberTask(0));
        dispatch(fantyLevel(""));
        dispatch(fantyCounterCanceledTask(0));
        dispatch(durationGameData({ is_green: "", is_yellow: "", is_red: "" }));
        dispatch(fantySuccess({ media: "" }));
        dispatch(usersSetting({ is_man: "", is_female: "" }));
    }, [dispatch]);

    const userLogout = useCallback(() => {
        dispatch(logoutUser());
        clearDataSettingAndFant();
    }, [dispatch, clearDataSettingAndFant]);

    const userHave = useCallback(() => {
        dispatch(checkUser());
    }, [dispatch]);

    return {
        profile,
        vip,
        loadingProfile,
        getErrorUser,
        loginUser,
        userLogout,
        registerUser,
        clearDataSettingAndFant,
        userHave,
    };
}

export default useActionUsers;