import React, { useEffect } from 'react';
import { FormLogin } from '../components';

const FormLoginView = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <FormLogin />
    </>
  );
};

export default FormLoginView;
