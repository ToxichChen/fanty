import axios from 'axios';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import { musicRequest, musicSuccess, musicError } from './musicAction';

axios.defaults.baseURL = 'http://localhost/api';

const token = {
  set(tok) {
    axios.defaults.headers.common.Authorization = `${tok}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const getMusic = (credentials) => async (dispatch) => {
  const { NotifyError } = useActionsWithRedux();

  dispatch(musicRequest());

  try {
    const { data } = await axios.post('/auth/login', credentials);

    token.set(data.access_token);
    dispatch(musicSuccess(data));
  } catch (error) {
    dispatch(musicError(error.message));
    NotifyError(error.message);
  }
};

export { getMusic };
