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
    supportRequest,
    supportSuccess
} from "./formFeaturesActions";
import {
    fantyCounterCanceledTask,
    fantyLevel,
    fantyNumberTask,
    fantyPunishment,
    fantySuccess,
} from "../../redux/activeFantyFeatures/activeFantyFeaturesActions";
import {
    settingsGameData,
    settingsError,
    settingsSuccess,
    usersSetting,
    durationGameData,
} from "../../redux/settingsFeatures/SettingsAction";
import { dataPostArr } from "../../constants";

axios.defaults.baseURL = `${document.location.protocol}//${document.location.host}/api`;

const token = {
    set(tok) {
        axios.defaults.headers.common.Authorization = `${tok}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const loginForm = (credentials, func) => async (dispatch) => {
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
        if (data.length !== 1) {
            func()
        }
    } catch (error) {
        dispatch(loginError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const registerForm = (credentials, func) => async (dispatch) => {
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
        if (data.length !== 1) {
            func()
        }
    } catch (error) {
        dispatch(registerError(error.message)); dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
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
        dispatch(registerError(error.message)); dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const selectForm = (state) => async (dispatch) => {
    try {
        const { data } = await axios.get("/subscriptions/getAllSubscriptions");
        state(data);
    } catch (error) {
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
}

const checkout = (id, state, load) => async (dispatch) => {
    try {
        load(true)
        const { data } = await axios.post("/checkout/createPayment", { id: id });
        state(data);
        load(false)
    } catch (error) {
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
}

const supportForm = (credentials) => async (dispatch) => {
    try {
        dispatch(supportRequest());
        await axios.post("/email/support", credentials);
        dispatch(supportSuccess());
        dispatch(
            alert({
                show: true,
                err: false,
                message: "Отправка данных прошла успешно",
            })
        );
    } catch (error) {
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

const checkUser = () => async (dispatch) => {
    dispatch(registerRequest());
    dispatch(getUserProfileRequest());

    try {
        const { data } = await axios.get("/user/checkIfLoggedIn");

        if (data?.payment?.state == 'success') {
            dispatch(
                alert({
                    show: true,
                    err: false,
                    message: "Оплата прошла успешно",
                })
            );
        } else if (data?.payment?.state == 'failed') {
            dispatch(
                alert({
                    show: true,
                    err: true,
                    message: "Оплата не прошла",
                })
            );
        }

        if (data !== "") {
            dispatch(getUserProfileSuccess({ response: { ...data } }));
        } else {
            dispatch(getUserProfileSuccess({ response: {} }));
            dispatch(registerSuccess({ response: {} }));
            dispatch(settingsSuccess([]));
            dispatch(settingsGameData([]));
            dispatch(settingsError(null));
            dispatch(fantyNumberTask(0));
            dispatch(fantyLevel(""));
            dispatch(fantyCounterCanceledTask(0));
            dispatch(
                durationGameData({ is_green: "0", is_yellow: "0", is_red: "0" })
            );
            dispatch(fantySuccess({ media: "" }));
            dispatch(usersSetting({ is_man: "", is_female: "" }));
            dispatch(fantyPunishment({ media: "" }))
        }
    } catch (error) {
        dispatch(registerError(error.message));
        dispatch(
            alert({
                show: true,
                err: false,
                message: "Что-то пошло не так",
            })
        );
    }
};

export {
    loginForm,
    registerForm,
    logoutUser,
    checkUser,
    selectForm,
    checkout,
    supportForm,
};
