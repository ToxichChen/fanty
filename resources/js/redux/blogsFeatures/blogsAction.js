import { createAction } from '@reduxjs/toolkit';

const blogsRequest = createAction('blogs/blogsRequest');
const blogsSuccess = createAction('blogs/blogsSuccess');
const blogsError = createAction('blogs/blogsError');

const blogsCurrentBlogRequest = createAction('blogs/currentBlogRequest');
const blogsCurrentBlogSuccess = createAction('blogs/currentBlogSuccess');
const blogsCurrentBlogError = createAction('blogs/currentBlogError');

const blogsTrendRequest = createAction('blogs/trendRequest');
const blogsTrendSuccess = createAction('blogs/trendSuccess');
const blogsTrendError = createAction('blogs/trendError');

const blogsCategoriesRequest = createAction('blogs/categoriesRequest');
const blogsCategoriesSuccess = createAction('blogs/categoriesSuccess');
const blogsCategoriesError = createAction('blogs/categoriesError');

export {
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
};
