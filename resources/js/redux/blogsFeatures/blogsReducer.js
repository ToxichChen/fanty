import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  blogsRequest,
  blogsSuccess,
  blogsCurrentBlogRequest,
  blogsCurrentBlogSuccess,
} from "./blogsAction";


const isLoadingBlogs = createReducer(false, {
  [blogsRequest]: () => true,
  [blogsSuccess]: () => false,
});

const isLoadingBlog = createReducer(false, {
  [blogsCurrentBlogRequest]: () => true,
  [blogsCurrentBlogSuccess]: () => false,
});

export default combineReducers({
  isLoadingBlogs,
  isLoadingBlog,
});
