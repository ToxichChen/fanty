import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import {
    loginForm,
    logoutUser,
    registerForm,
    checkUser,
    supportForm,
    selectForm,
    checkout,
    send,
    time
} from "./../../redux/formFeatures/formFeaturesOperation";
import {
    fantyCounterCanceledTask,
    fantyLevel,
    fantyNumberTask,
    fantyPunishment,
    fantySuccess,
    sex,
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
    const loadingSupport = useSelector(
        (state) => state.authForm.isSupportLoad
    );
    const getErrorUser = useSelector((state) => state.authForm.user[0]);

    const loginUser = useCallback(
        (data, func) => {
            dispatch(loginForm(data, func));
        },
        [dispatch]
    );

    const getSelectForm = useCallback(
        (state) => {
            dispatch(selectForm(state));
        },
        [dispatch]
    );

    const checkoutUser = useCallback(
        (id, state, load, prevent) => {
            dispatch(checkout(id, state, load, prevent));
        },
        [dispatch]
    );

    const getTime = useCallback(
        (state) => {
            dispatch(time(state));
        },
        [dispatch]
    );



    const registerUser = useCallback(
        (data, func) => {
            dispatch(registerForm(data, func));
        },
        [dispatch]
    );

    const setUserDataForm = useCallback(
        (data) => {
            dispatch(supportForm(data));
        },
        [dispatch]
    );


    const clearDataSettingAndFant = useCallback(() => {
        dispatch(settingsGameData([]));
        dispatch(settingsError(null));
        dispatch(fantyNumberTask(0));
        dispatch(fantyLevel(""));
        dispatch(fantyCounterCanceledTask(0));
        dispatch(durationGameData({ is_green: "0", is_yellow: "0", is_red: "0" }));
        dispatch(fantySuccess({ media: "" }));
        dispatch(usersSetting({ is_man: "", is_female: "" }));
        dispatch(sex(2));
        dispatch(fantyPunishment({ media: "" }))
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
        checkoutUser,
        registerUser,
        clearDataSettingAndFant,
        userHave,
        loadingSupport,
        setUserDataForm,
        getSelectForm,
        getTime
    };
}

export default useActionUsers;
