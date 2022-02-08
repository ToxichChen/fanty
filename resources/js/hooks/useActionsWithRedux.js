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
import { fantyCounterCanceledTask } from "../redux/activeFantyFeatures/activeFantyFeaturesActions";
import {
    settingsGameData,
    settingsError,
} from "../redux/settingsFeatures/SettingsAction";
import { fantyError } from "../redux/activeFantyFeatures/activeFantyFeaturesActions";

function useActionsWithRedux() {
    const dispatch = useDispatch();
    const getAllSettings = useSelector((state) => state.settings.settings);
    const settingsGame = useSelector((state) => state.settings.settingsGame);
    const loadingSettings = useSelector(
        (state) => state.settings.isLoadingSettings
    );
    const loadingProfile = useSelector(
        (state) => state.authForm.isAuthenticated
    );
    const profile = useSelector((state) => state.authForm.user.response);
    const alertMessage = useSelector((state) => state.alertMessage);
    const vip = useSelector((state) => state.authForm.user.vip);
    const isLoadingFanty = useSelector(
        (state) => state.activeFanty.isLoadingFanty
    );
    const showMiniPlayer = useSelector((state) => state.musicData.miniPlayer);
    const getFanty = useSelector((state) => state.activeFanty.fanty);
    const getCountTask = useSelector(
        (state) => state.activeFanty.activeFantyError
    );
    const getCountCanceledTask = useSelector(
        (state) => state.activeFanty.countCanceledTask.payload
    );

    const countTask = useCallback(
        (data) => {
            dispatch(fantyError(data));
        },
        [dispatch]
    );

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
        (data, clear = false, radio) => {
            const newArr = [...settingsGame];

            if (Object.prototype.toString.call(data) === "[object Array]") {
                if (clear) {
                    data.map((item) => {
                        newArr.map((elem, index) => {
                            if (elem === item.id) {
                                newArr.splice(index, 1);
                            }
                            return true;
                        });

                        return true;
                    });
                } else {
                    data.map(
                        (item) =>
                            !settingsGame.includes(item.id) &&
                            newArr.push(item.id)
                    );
                }
            } else {
                if (clear === "radio") {
                    radio.map((item) => {
                        newArr.map((elem, index) => {
                            if (elem === item.id) {
                                newArr.splice(index, 1);
                            }
                            return true;
                        });

                        return true;
                    });

                    newArr.push(data.id);
                } else if (settingsGame.includes(data.id)) {
                    settingsGame.find(
                        (item, index) =>
                            item === data.id && newArr.splice(index, 1)
                    );
                } else {
                    newArr.push(data.id);
                }
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
        (obj) => {
            dispatch(getActiveFanty(obj));
        },
        [dispatch]
    );

    const clearDataSettingAndFant = useCallback(() => {
        dispatch(settingsGameData([]));
        dispatch(settingsError(null));
        dispatch(fantyError({}));
        dispatch(getActiveFanty({}));
    }, [dispatch]);

    const canceledTask = useCallback(() => {
        let counter = getCountCanceledTask + 1;
        console.log(counter);
        dispatch(fantyCounterCanceledTask(getCountCanceledTask + 1));
    }, [dispatch, getCountCanceledTask]);

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
        countTask,
        clearDataSettingAndFant,
        canceledTask,
        alertMessage,
        getAllSettings,
        profile,
        vip,
        showMiniPlayer,
        loadingSettings,
        settingsGame,
        isLoadingFanty,
        loadingProfile,
        getFanty,
        getCountTask,
        getCountCanceledTask,
    };
}

export default useActionsWithRedux;
