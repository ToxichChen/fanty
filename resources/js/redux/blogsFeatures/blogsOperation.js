import axios from "axios";
import {
    blogsRequest,
    blogsSuccess,
    blogsError,
    blogsTrendRequest,
    blogsTrendSuccess,
    blogsTrendError,
    blogsCategoriesRequest,
    blogsCategoriesSuccess,
    blogsCategoriesError,
    blogsCurrentBlogRequest,
    blogsCurrentBlogSuccess,
    blogsCurrentBlogError,
} from "./blogsAction";
import {alert} from './../alertFeatures/AlertActions'

axios.defaults.baseURL = `${document.location.protocol}//${document.location.host}/api`;

const token = {
    set(tok) {
        axios.defaults.headers.common.Authorization = `${tok}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const getAllBlogs = (credentials) => async (dispatch) => {
    dispatch(blogsRequest());

    try {
        const { data } = await axios.post("", credentials);
        token.set(data.access_token);

        dispatch(blogsSuccess(data));
    } catch (error) {
        dispatch(blogsError(error.message));
        dispatch(
            alert({
                show: true,
                err: false,
                message: "Что-то пошло не так",
            })
        );
    }
};

const getTrendsBlogs = (credentials) => async (dispatch) => {
    dispatch(blogsTrendRequest());

    try {
        const { data } = await axios.post("", credentials);
        token.set(data.access_token);

        dispatch(blogsTrendSuccess(data));
    } catch (error) {
        dispatch(blogsTrendError(error.message));
        dispatch(
            alert({
                show: true,
                err: false,
                message: "Что-то пошло не так",
            })
        );
    }
};

const getCategoriesBlogs = (credentials) => async (dispatch) => {
    dispatch(blogsCategoriesRequest());

    try {
        const { data } = await axios.post("", credentials);
        token.set(data.access_token);

        dispatch(blogsCategoriesSuccess(data));
    } catch (error) {
        dispatch(blogsCategoriesError(error.message));
        dispatch(
            alert({
                show: true,
                err: false,
                message: "Что-то пошло не так",
            })
        );
    }
};

const getCurrentBlog = (credentials) => async (dispatch) => {
    dispatch(blogsCurrentBlogRequest());

    try {
        const { data } = await axios.post(`${credentials}`, credentials);
        token.set(data.access_token);

        dispatch(blogsCurrentBlogSuccess(data));
    } catch (error) {
        dispatch(blogsCurrentBlogError(error.message));
        dispatch(
            alert({
                show: true,
                err: false,
                message: "Что-то пошло не так",
            })
        );
    }
};

export { getAllBlogs, getTrendsBlogs, getCategoriesBlogs, getCurrentBlog };
