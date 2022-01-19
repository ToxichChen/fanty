import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StylFormLogin,
  StylTitleForm,
  StylCenterBoxGradientForm,
  FormInput,
  BtnSubmitForm,
  ArrowBack,
} from './../index';

import emailImgSvg from './../../assets/icons/icon-email.svg';
import checkImgSvg from './../../assets/icons/icon-check.svg';
import userImgSvg from './../../assets/icons/icon-user.svg';
import passwordlImgSvg from './../../assets/icons/icon-lock.svg';
import { routes } from '../../Router';
import useActionsWithRedux from '../../hooks/useActionsWithRedux';

const FormRegistration = () => {
  const{ registerUser} = useActionsWithRedux()
  const [isCheckPassowrd, setCheckPassword] = useState(false);

  const handleSubmitForm = (initialValues) => {
    registerUser(initialValues);
  };

  const SignUpSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, 'Слишком короткий пароль')
      .max(50, 'Слишком длинный пароль')
      .required('Обязательноe поле'),
    name: Yup.string()
      .min(2, 'Слишком короткое имя')
      .max(50, 'Слишком длинный имя')
      .required('Обязательноe поле'),
    email: Yup.string()
      .email('Неправильная почта. Вот пример: user1@gmail.com')
      .max(50, 'Слишком длинный email')
      .required('Обязательноe поле'),
  });

  return (
    <StylCenterBoxGradientForm>
      <Formik
        validationSchema={SignUpSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          name: '',
          email: '',
          password: '',
          checkPassword: '',
        }}
        validate={(values) => {
          values.password !== values.checkPassword
            ? setCheckPassword(true)
            : setCheckPassword(false);
        }}
        onSubmit={handleSubmitForm}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <StylFormLogin onSubmit={handleSubmit}>
            <StylTitleForm>
              <ArrowBack exact to={routes.home} />
              Регистрация
            </StylTitleForm>
            <FormInput
              type='text'
              name='name'
              autocomplete='name'
              valueInput={values.name}
              placeholder='Имя'
              err={errors.name}
              errText={errors.name}
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
              err={errors.email}
              errText={errors.email}
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
              err={errors.password}
              errText={errors.password}
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
