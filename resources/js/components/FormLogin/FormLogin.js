import React, { useState } from 'react';
import { Formik } from 'formik';
import {
  StylFormLogin,
  StylTitleForm,
  StylCenterBoxGradientForm,
  FormInput,
  BtnSubmitForm,
  ArrowBack,
} from './../index';

import emailImgSvg from './../../img/icons/icon-email.svg';
import passwordlImgSvg from './../../img/icons/icon-lock.svg';
import { regulEmail, regulPassword } from '../../constants';
import { routes } from '../../Router';

const FormLogin = () => {
  const [isEmail, setEmail] = useState(false),
    [isPassword, setPassword] = useState(false);

  const handleSubmitForm = (values, validate) => {
    validate(values);
  };

  return (
    <StylCenterBoxGradientForm>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          email: '',
          password: '',
        }}
        validate={(values) => {
          !regulEmail.test(values.email) ? setEmail(true) : setEmail(false);

          !regulPassword.test(values.password)
            ? setPassword(true)
            : setPassword(false);
        }}
        onSubmit={handleSubmitForm}
      >
        {({ values, handleChange, handleSubmit }) => (
          <StylFormLogin onSubmit={handleSubmit}>
            <StylTitleForm>
              <ArrowBack exact to={routes.home} />
              Вход
            </StylTitleForm>
            <FormInput
              type='email'
              name='email'
              autocomplete='userName'
              placeholder='Почта'
              valueInput={values.email}
              imgStart={emailImgSvg}
              err={isEmail}
              errText='
              Email not correct. Please check the spelling
            '
              changer={handleChange}
            />
            <FormInput
              type='password'
              name='password'
              autocomplete='current-password'
              valueInput={values.password}
              placeholder='Пароль'
              imgStart={passwordlImgSvg}
              password={true}
              err={isPassword}
              errText='Password contain unsupported characters'
              changer={handleChange}
            />

            <BtnSubmitForm />
          </StylFormLogin>
        )}
      </Formik>
    </StylCenterBoxGradientForm>
  );
};

export default FormLogin;
