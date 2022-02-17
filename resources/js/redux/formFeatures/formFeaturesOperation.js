import axios from "axios";
import { alert } from "../alertFeatures/AlertActions";
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
    dispatch(loginRequest());
    dispatch(getUserProfileRequest());

    try {
        const { data } = await axios.post("/user/login", credentials);

        token.set(data.access_token);
        dispatch(loginSuccess(data));

        dispatch(getUserProfileSuccess({ response: {}, ...data }));
        dispatch(
            alert({
                show: true,
                err: false,
                message: "Авторизация прошло успешно",
            })
        );
    } catch (error) {
        dispatch(loginError(error.message));
    }
};

const registerForm = (credentials) => async (dispatch) => {
    dispatch(registerRequest());
    dispatch(getUserProfileRequest());

    try {
        const { data } = await axios.post("user/register", credentials);
        token.set(data.access_token);
        dispatch(registerSuccess(data));

        dispatch(getUserProfileSuccess({ response: {}, ...data }));
        dispatch(
            alert({
                show: true,
                err: false,
                message: "Регистрация прошло успешно",
            })
        );
    } catch (error) {
        dispatch(registerError(error.message));
    }
};

const logoutUser = () => async (dispatch) => {
    dispatch(registerRequest());
    dispatch(getUserProfileRequest());

    try {
        await axios.get("/user/logout");
        dispatch(registerSuccess({ response: {} }));
        dispatch(getUserProfileSuccess({ response: {} }));
        dispatch(
            alert({
                show: true,
                err: false,
                message: "Выход из аккаунта прошло успешно",
            })
        );
    } catch (error) {
        dispatch(registerError(error.message));
    }
};

export { loginForm, registerForm, logoutUser };
