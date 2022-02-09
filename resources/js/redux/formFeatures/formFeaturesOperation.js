import axios from "axios";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";
import {
    registerRequest,
    registerSuccess,
    registerError,
    loginRequest,
    loginSuccess,
    loginError,
    getUserProfileRequest,
    getUserProfileSuccess,
} from "./formFeaturesActions";

axios.defaults.baseURL = "http://localhost/api";

const token = {
    set(tok) {
        axios.defaults.headers.common.Authorization = `${tok}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const loginForm = (credentials) => async (dispatch) => {
    const { getErrorUser } = useActionsWithRedux();
    dispatch(loginRequest());
    dispatch(getUserProfileRequest());

    try {
        const { data } = await axios.post("/user/login", credentials);

        token.set(data.access_token);
        dispatch(loginSuccess(data));

        dispatch(getUserProfileSuccess({ response: {}, ...data }));
    } catch (error) {
        dispatch(loginError(error.message));
        console.log(getErrorUser);
        /* dispatch(
            alert({
                show: true,
                err: true,
                message: message,
            })
        ); */
    }
};

const registerForm = (credentials) => async (dispatch) => {
    const { getErrorUser } = useActionsWithRedux();
    dispatch(registerRequest());
    dispatch(getUserProfileRequest());

    try {
        const { data } = await axios.post("user/register", credentials);
        token.set(data.access_token);
        dispatch(registerSuccess(data));

        dispatch(getUserProfileSuccess({ response: {}, ...data }));
    } catch (error) {
        dispatch(registerError(error.message));
        console.log(getErrorUser);
        /*  dispatch(
            alert({
                show: true,
                err: true,
                message: message,
            })
        ); */
    }
};

const logoutUser = () => async (dispatch) => {
    dispatch(registerRequest());
    dispatch(getUserProfileRequest());

    try {
        await axios.get("/user/logout");
        dispatch(registerSuccess({ response: {} }));
        dispatch(getUserProfileSuccess({ response: {} }));
    } catch (error) {
        dispatch(registerError(error.message));
    }
};

export { loginForm, registerForm, logoutUser };
