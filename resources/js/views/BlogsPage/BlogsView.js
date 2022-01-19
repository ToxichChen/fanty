import React, { useEffect } from 'react';
import { Blogs } from '../../components';

const BlogsView = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <Blogs />
    </>
  );
};

export default BlogsView;
