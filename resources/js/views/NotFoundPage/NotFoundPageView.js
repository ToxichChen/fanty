import React, { useEffect } from 'react';
import { NotFound } from '../../components';

const NotFoundPageView = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return <NotFound />;
};

export default NotFoundPageView;
