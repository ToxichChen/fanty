import axios from 'axios';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';
import {
  fantyRequest,
  fantySuccess,
  fantyError,
} from './activeFantyFeaturesActions';

axios.defaults.baseURL = 'http://localhost/api';

const token = {
  set(tok) {
    axios.defaults.headers.common.Authorization = `${tok}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const activeFanty = (credentials) => async (dispatch) => {
  const { NotifyError } = useActionsWithRedux();
  dispatch(fantyRequest());

  try {
    const { data } = await axios.post('', credentials);
    token.set(data.access_token);

    dispatch(fantySuccess(data));
  } catch (error) {
    dispatch(fantyError(error.message));
    NotifyError(error.message);
  }
};

const activeFantyLikeFanty = (credentials) => async (dispatch) => {
  const { NotifyError } = useActionsWithRedux();

  try {
    const { data } = await axios.post('', credentials);
    token.set(data.access_token);

    dispatch(fantySuccess(data));
  } catch (error) {
    dispatch(fantyError(error.message));
    NotifyError(error.message);
  }
};

const activeFantyDisLikeFanty = (credentials) => async (dispatch) => {
  const { NotifyError } = useActionsWithRedux();

  try {
    const { data } = await axios.post('', credentials);
    token.set(data.access_token);

    dispatch(fantySuccess(data));
  } catch (error) {
    dispatch(fantyError(error.message));
    NotifyError(error.message);
  }
};

export { activeFantyLikeFanty, activeFantyDisLikeFanty, activeFanty };
