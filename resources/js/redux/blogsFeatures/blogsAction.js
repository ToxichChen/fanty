import { createAction } from '@reduxjs/toolkit';

const blogsRequest = createAction('blogs/blogsRequest');
const blogsSuccess = createAction('blogs/blogsSuccess');
const blogsError = createAction('blogs/blogsError');

const blogsCurrentBlogRequest = createAction('blogs/currentBlogRequest');
const blogsCurrentBlogSuccess = createAction('blogs/currentBlogSuccess');
const blogsCurrentBlogError = createAction('blogs/currentBlogError');

export {
  blogsRequest,
  blogsSuccess,
  blogsError,
  blogsCurrentBlogRequest,
  blogsCurrentBlogSuccess,
  blogsCurrentBlogError,
};
