import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import {
  loginForm,
  registerForm,
} from './../redux/formFeatures/formFeaturesOperation';
import { alert } from '../redux/alertFeatures/AlertActions';
import { getSettings } from '../redux/settingsFeatures/SettingsOperation';

function useActionsWithRedux() {
  const dispatch = useDispatch();
  const getAllSettings = useSelector((state) => state.settings);
  const profile = useSelector((state) => state.authForm.user);
  const alertMessage = useSelector((state) => state.alertMessage);
  const vip = useSelector((state) => state.authForm.user.vip);
  const likesFanty = useSelector((state) => state.activeFanty.fanty.likes);
  const disLikesFanty = useSelector(
    (state) => state.activeFanty.fanty.disLikes
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


  const registerUser = useCallback(
    (data) => {
      dispatch(registerForm(data));
    },
    [dispatch]
  );

  const settings = useCallback(()=> {dispatch(getSettings())}, [dispatch])
  return {
    loginUser,settings,
    registerUser,
    alertMessage,getAllSettings,
    profile,
    vip,
    likesFanty,
    disLikesFanty,
    showMiniPlayer,
    alertHidden,
    NotifySuccess,
    NotifyError,
  };
}

export default useActionsWithRedux;
