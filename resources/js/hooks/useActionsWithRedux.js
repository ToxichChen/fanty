import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import {
    loginForm,
    logoutUser,
    registerForm,
} from "./../redux/formFeatures/formFeaturesOperation";
import { alert } from "../redux/alertFeatures/AlertActions";
import {
    getSettings,
    postSettingsCountTask,
    postSettingsGame,
} from "../redux/settingsFeatures/SettingsOperation";
import { getActiveFanty } from "./../redux/activeFantyFeatures/activeFantyFeaturesOperation";
import { settingsGameData } from "../redux/settingsFeatures/SettingsAction";

function useActionsWithRedux() {
    const dispatch = useDispatch();
    const getAllSettings = useSelector((state) => state.settings.settings[0]);
    const settingsGame = useSelector((state) => state.settings.settingsGame);
    const loadingSettings = useSelector(
        (state) => state.settings.isLoadingSettings
    );
    const profile = useSelector((state) => state.authForm.user.response);
    const premium = useSelector(
        (state) => state.authForm.user.response.is_premium
    );
    const alertMessage = useSelector((state) => state.alertMessage);
    const vip = useSelector((state) => state.authForm.user.vip);
    const likesFanty = useSelector((state) => state.activeFanty.fanty.likes);
    const disLikesFanty = useSelector(
        (state) => state.activeFanty.fanty.disLikes
    );
    const isLoadingFanty = useSelector(
        (state) => state.activeFanty.isLoadingFanty
    );
    const showMiniPlayer = useSelector((state) => state.musicData.miniPlayer);

    const alertHidden = useCallback(() => {
        dispatch(
            alert({
                show: false,
                err: alertMessage.err,
                message: alertMessage.message,
            })
        );
    }, [dispatch, alertMessage]);

    const NotifySuccess = useCallback(
        (message) => {
            dispatch(
                alert({
                    show: true,
                    err: false,
                    message: message,
                })
            );
        },
        [dispatch]
    );

    const NotifyError = useCallback(
        (message) => {
            dispatch(
                alert({
                    show: true,
                    err: true,
                    message: message,
                })
            );
        },
        [dispatch]
    );

    const loginUser = useCallback(
        (data) => {
            dispatch(loginForm(data));
        },
        [dispatch]
    );

    const userLogout = useCallback(() => {
        dispatch(logoutUser());
    }, [dispatch]);

    const registerUser = useCallback(
        (data) => {
            dispatch(registerForm(data));
        },
        [dispatch]
    );

    const settings = useCallback(() => {
        dispatch(getSettings());
    }, [dispatch]);

    const settingsCountTask = useCallback(
        (data) => {
            dispatch(postSettingsCountTask(data));
        },
        [dispatch]
    );

    const settingsGameTask = useCallback(
        (data) => {
            const newArr = [...settingsGame];

            if (settingsGame.includes(data.id)) {
                settingsGame.find(
                    (item, index) =>
                        item.id === data.id && newArr.splice(index, 1)
                );
            } else {
                newArr.push(data.id);
            }

            dispatch(settingsGameData(newArr));
        },
        [dispatch, settingsGame]
    );

    const sendSettingsGame = useCallback(
        (man, female) => {
            dispatch(postSettingsGame(settingsGame, man, female));
        },
        [dispatch, settingsGame]
    );

    const getFant = useCallback(
        (obj, setFant) => {
            dispatch(getActiveFanty(obj, setFant));
        },
        [dispatch]
    );

    return {
        settingsGameTask,
        alertHidden,
        NotifySuccess,
        NotifyError,
        loginUser,
        settings,
        registerUser,
        userLogout,
        settingsCountTask,
        getFant,
        sendSettingsGame,
        alertMessage,
        getAllSettings,
        profile,
        vip,
        likesFanty,
        disLikesFanty,
        showMiniPlayer,
        loadingSettings,
        settingsGame,
        isLoadingFanty,
        premium,
    };
}

export default useActionsWithRedux;
