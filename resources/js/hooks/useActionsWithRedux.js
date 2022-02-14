import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
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
import {
    getActiveFanty,
    getFantyLike,
    likeFanty,
    disLikeFanty,
    getPunishment,
    getFinalPunishment,
} from "./../redux/activeFantyFeatures/activeFantyFeaturesOperation";
import {
    fantyCounterCanceledTask,
    fantyLevel,
    fantyNumberTask,
    fantySuccess,
    fantyPunishment,
} from "../redux/activeFantyFeatures/activeFantyFeaturesActions";
import {
    settingsGameData,
    settingsError,
    settingsSuccess,
    usersSetting,
    durationGameData,
} from "../redux/settingsFeatures/SettingsAction";

function useActionsWithRedux() {
    const dispatch = useDispatch();
    const getAllSettings = useSelector((state) => state.settings.settings);
    const settingsGame = useSelector((state) => state.settings.settingsGame);
    const settingsUsers = useSelector((state) => state.settings.users);
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
    const getCountTask = useSelector((state) => state.settings.durationGame);
    const getCountCanceledTask = useSelector(
        (state) => state.activeFanty.countCanceledTask.payload
    );
    const getNumberFanty = useSelector(
        (state) => state.activeFanty.numberFanty.payload
    );
    const getLevelFanty = useSelector((state) => state.activeFanty.levelFanty);
    const getLikeFanty = useSelector((state) => state.activeFanty.like);
    const getErrorUser = useSelector((state) => state.authForm.user[0]);
    const getFantyPunishment = useSelector(
        (state) => state.activeFanty.fantyPunishmentUser
    );

    const countTask = useCallback(
        (data) => {
            dispatch(durationGameData(data));
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
            dispatch(usersSetting({ is_man: man, is_female: female }));
        },
        [dispatch, settingsGame]
    );

    const getFant = useCallback(
        (obj) => {
            dispatch(getActiveFanty({ media: "", ...obj }));
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

    const canceledTask = useCallback(() => {
        dispatch(fantyCounterCanceledTask(getCountCanceledTask + 1));
    }, [dispatch, getCountCanceledTask]);

    const sendNumberFanty = useCallback(
        (data) => {
            dispatch(fantyNumberTask(data));
        },
        [dispatch]
    );

    const sendLevelFanty = useCallback(
        (data) => {
            dispatch(fantyLevel(data));
        },
        [dispatch]
    );

    const getFantLike = useCallback(() => {
        dispatch(getFantyLike());
    }, [dispatch]);

    const likeFantNow = useCallback(
        (data) => {
            dispatch(likeFanty(data));
        },
        [dispatch]
    );

    const disLikeFantNow = useCallback(
        (data) => {
            dispatch(disLikeFanty(data));
        },
        [dispatch]
    );

    const punishmentFant = useCallback(
        (data) => dispatch(getPunishment(data)),
        [dispatch]
    );

    const punishmentFinalFant = useCallback(
        () => dispatch(getFinalPunishment()),
        [dispatch]
    );

    const clearPunishmentFant = useCallback(
        () => dispatch(fantyPunishment({ media: "" })),
        [dispatch]
    );

    useEffect(
        () => getErrorUser !== undefined && NotifyError(getErrorUser),
        [getErrorUser, NotifyError]
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
        countTask,
        clearDataSettingAndFant,
        canceledTask,
        sendNumberFanty,
        sendLevelFanty,
        getFantLike,
        disLikeFantNow,
        likeFantNow,
        punishmentFant,
        punishmentFinalFant,
        clearPunishmentFant,
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
        getErrorUser,
        settingsUsers,
        getNumberFanty,
        getLevelFanty,
        getLikeFanty,
        getFantyPunishment,
    };
}

export default useActionsWithRedux;
