import { useDispatch, useSelector } from "react-redux";
import { useCallback, useState } from "react";

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
import { changePunishment } from "../../redux/activeFantyFeatures/activeFantyFeaturesOperation";
import useActionFanty from "./useActionFanty";

function useActionSettings() {
  const dispatch = useDispatch();
  const { isPunishment } = useActionFanty();
  const getAllSettings = useSelector((state) => state.settings.settings);
  const settingsGame = useSelector((state) => state.settings.settingsGame);
  const settingsUsers = useSelector((state) => state.settings.users);
  const loadingSettings = useSelector(
    (state) => state.settings.isLoadingSettings
  );
  const settingsGameTask = useCallback(
    (data, clear = false, radio) => {
      const newArr = [...settingsGame];

      if (data.id === 1 && !isPunishment) {
        dispatch(changePunishment(true));
      } else if (data.id === 1 && isPunishment) {
        dispatch(changePunishment(false));
      } else if (Object.prototype.toString.call(data) === "[object Array]") {
        if (data[0].id === 1) {
          dispatch(changePunishment(false));
        }
      }

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

          if (!newArr.includes(11)) {
            newArr.push(11)
          }
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

        }
        else if (settingsGame.includes(data.id)) {
          settingsGame.find(
            (item, index) =>
              item === data.id && newArr.splice(index, 1)
          );
        }
        else if (settingsGame.includes(10) && newArr.includes(10) && data.id == 11) {
          settingsGame.filter(
            (item, index) =>
              item == 10 && newArr.splice(index, 1)
          );
          newArr.push(data.id);
        }
        else if (settingsGame.includes(11) && newArr.includes(11) && data.id == 10) {
          settingsGame.filter(
            (item, index) =>
              item == 11 && newArr.splice(index, 1)
          );
          newArr.push(data.id);
        }
        else {
          newArr.push(data.id);
        }


        if (settingsGame.includes(10) && newArr.includes(10) && data.id == 11) {
          settingsGame.filter(
            (item, index) =>
              item == 10 && newArr.splice(index, 1)
          );
          newArr.push(data.id);
        }

        if (settingsGame.includes(11) && newArr.includes(11) && data.id == 10) {
          settingsGame.filter(
            (item, index) =>
              item == 11 && newArr.splice(index, 1)
          );
          newArr.push(data.id);
        }
      }

      if (newArr.includes(10) == false
        && settingsGame.includes(10) == false && data.id == 11) {
        newArr.push(11)
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
