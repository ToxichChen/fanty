import axios from 'axios';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  getUserProfileRequest,
  getUserProfileSuccess,
  getUserProfileError,
} from './formFeaturesActions';

axios.defaults.baseURL = 'http://localhost/api';

const token = {
  set(tok) {
    axios.defaults.headers.common.Authorization = `${tok}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const loginForm = (credentials) => async (dispatch) => {
  //const { NotifySuccess, NotifyError } = useActionsWithRedux();
  console.log(credentials)

  dispatch(loginRequest());
  dispatch(getUserProfileRequest());

  try {
    const { data } = await axios.post('/user/login', credentials);

    token.set(data.access_token);
    dispatch(loginSuccess(data));

    console.log(data)

    dispatch(getUserProfileSuccess(data));
   // NotifySuccess('Ok');
  } catch (error) {
    dispatch(loginError(error.message));
    dispatch(getUserProfileError(error.message));
   // NotifyError(error.message);
  }
};

const registerForm = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  dispatch(getUserProfileRequest());
  console.log(credentials)

  try {
    const { data } = await axios.post('user/register', credentials);
    token.set(data.access_token);
    dispatch(registerSuccess(data));

    dispatch(getUserProfileSuccess(data));
  } catch (error) {
    dispatch(registerError(error.message));
    dispatch(getUserProfileError(error.message));
  }
};

export { loginForm, registerForm };
