import React, { useEffect } from 'react';

const NotFound = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return <></>;
};

export default NotFound;
