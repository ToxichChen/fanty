import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import {
    settingsGameData,
    usersSetting,
    durationGameData,
} from "../../redux/settingsFeatures/SettingsAction";
import {
    getSettings,
    postSettingsCountTask,
    postSettingsGame,
} from "../../redux/settingsFeatures/SettingsOperation";

function useActionSettings() {
    const dispatch = useDispatch();
    const getAllSettings = useSelector((state) => state.settings.settings);
    const settingsGame = useSelector((state) => state.settings.settingsGame);
    const settingsUsers = useSelector((state) => state.settings.users);
    const loadingSettings = useSelector(
        (state) => state.settings.isLoadingSettings
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

    const countTask = useCallback(
        (data) => {
            dispatch(durationGameData(data));
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

    return {
        getAllSettings,
        settingsGame,
        settingsUsers,
        loadingSettings,
        settingsGameTask,
        sendSettingsGame,
        countTask,
        settings,
        settingsCountTask,
    };
}

export default useActionSettings;
