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
import checkImgSvg from './../../img/icons/icon-check.svg';
import userImgSvg from './../../img/icons/icon-user.svg';
import passwordlImgSvg from './../../img/icons/icon-lock.svg';
import { regulEmail, regulPassword } from '../../constants';
import { routes } from '../../Router';

const FormRegistration = () => {
  const [isEmail, setEmail] = useState(false),
    [isPassword, setPassword] = useState(false),
    [isCheckPassowrd, setCheckPassword] = useState(false);

  const handleSubmitForm = (values, validate) => {
    validate(values);
  };

  return (
    <StylCenterBoxGradientForm>
      <Formik
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          firstName: '',
          email: '',
          password: '',
          checkPassword: '',
        }}
        validate={(values) => {
          !regulEmail.test(values.email) ? setEmail(true) : setEmail(false);

          !regulPassword.test(values.password)
            ? setPassword(true)
            : setPassword(false);

          values.password !== values.checkPassword
            ? setCheckPassword(true)
            : setCheckPassword(false);
        }}
        onSubmit={handleSubmitForm}
      >
        {({ values, handleChange, handleSubmit }) => (
          <StylFormLogin onSubmit={handleSubmit}>
            <StylTitleForm>
              <ArrowBack exact to={routes.home} />
              Регистрация
            </StylTitleForm>
            <FormInput
              type='text'
              name='firstName'
              autocomplete='firstName'
              valueInput={values.firstName}
              placeholder='Имя'
              imgStart={userImgSvg}
              changer={handleChange}
            />

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
              autocomplete='new-password'
              type='password'
              name='password'
              valueInput={values.password}
              placeholder='Пароль'
              imgStart={passwordlImgSvg}
              password={true}
              err={isPassword}
              errText='Password contain unsupported characters'
              changer={handleChange}
            />

            <FormInput
              autocomplete='new-password'
              type='password'
              name='checkPassword'
              valueInput={values.checkPassword}
              placeholder='Повторите пароль'
              imgStart={checkImgSvg}
              password={true}
              err={isCheckPassowrd}
              errText='Пароль не совпадает'
              changer={handleChange}
            />
            <BtnSubmitForm />
          </StylFormLogin>
        )}
      </Formik>
    </StylCenterBoxGradientForm>
  );
};

export default FormRegistration;
