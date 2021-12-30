import React, { useEffect } from 'react';
import { NotFound } from '../components';

const NotFoundPage = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return <NotFound />;
};

export default NotFoundPage;
