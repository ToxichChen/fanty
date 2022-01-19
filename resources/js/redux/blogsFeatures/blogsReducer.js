import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import {
  blogsSuccess,
  blogsTrendSuccess,
  blogsCategoriesSuccess,
  blogsCurrentBlogSuccess,
} from './blogsAction';

const blogs = createReducer([], {
  [blogsSuccess]: (_, { payload }) => ({
    ...payload,
  }),
});

const trends = createReducer([], {
  [blogsTrendSuccess]: (_, { payload }) => payload,
});

const categories = createReducer([], {
  [blogsCategoriesSuccess]: (_, { payload }) => payload,
});

const currentBlog = createReducer(
  {},
  {
    [blogsCurrentBlogSuccess]: (_, { payload }) => payload,
  }
);

export default combineReducers({
  blogs,
  trends,
  categories,
  currentBlog,
});
