import axios from "axios";
import {
    blogsRequest,
    blogsSuccess,
    blogsError,
    blogsCurrentBlogRequest,
    blogsCurrentBlogSuccess,
    blogsCurrentBlogError,
} from "./blogsAction";
import { alert } from './../alertFeatures/AlertActions'

axios.defaults.baseURL = `${document.location.protocol}//${document.location.host}/api`;

const token = {
    set(tok) {
        axios.defaults.headers.common.Authorization = `${tok}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const getAllBlogs = (setState) => async (dispatch) => {
    dispatch(blogsRequest());

    try {
        const { data } = await axios.get("/post/getAllPosts");
        token.set(data.access_token);

        dispatch(blogsSuccess());
        setState(data)
    } catch (error) {
        dispatch(blogsError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};


const getCurrentBlog = (id, setState) => async (dispatch) => {
    dispatch(blogsCurrentBlogRequest());

    try {
        const { data } = await axios.get(`/post/getPostById/${id}`);
        token.set(data.access_token);

        dispatch(blogsCurrentBlogSuccess(data));
        setState(data)
    } catch (error) {
        dispatch(blogsCurrentBlogError(error.message));
        dispatch(
            alert({
                show: true,
                err: true,
                message: "Что-то пошло не так",
            })
        );
    }
};

export { getAllBlogs, getCurrentBlog };
