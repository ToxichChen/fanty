import React, { useEffect } from 'react';
import { FormRegistration } from '../../components';

const FormRegisterView = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <FormRegistration />
    </>
  );
};

export default FormRegisterView;
