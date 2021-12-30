import React, { useEffect } from 'react';
import { FormRegistration } from './../components/';
const FormRegister = ({ title }) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);

  return (
    <>
      <FormRegistration />
    </>
  );
};

export default FormRegister;
