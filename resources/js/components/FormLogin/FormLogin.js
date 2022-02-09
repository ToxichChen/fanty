import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput/FormInput";
import BtnSubmitForm from "./BtnSubmitForm";

import {
    StylFormLogin,
    StylTitleForm,
    StylCenterBoxGradientForm,
    ArrowBack,
} from "./FormLogin.styled";

import emailImgSvg from "./../../assets/icons/icon-email.svg";
import passwordlImgSvg from "./../../assets/icons/icon-lock.svg";
import { routes } from "../../Router";
import useActionsWithRedux from "../../hooks/useActionsWithRedux";

const FormLogin = () => {
    const { loginUser } = useActionsWithRedux();
    const handleSubmitForm = (initialValues) => {
        loginUser(initialValues);
    };

    const SignInSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, "Слишком короткий пароль")
            .max(50, "Слишком длинный пароль")
            .required("Обязательноe поле"),
        email: Yup.string()
            .email("Неправильная почта. Вот пример: user1@gmail.com")
            .max(50, "Слишком длинный email")
            .required("Обязательноe поле"),
    });
    return (
        <StylCenterBoxGradientForm>
            <Formik
                validateOnChange={false}
                validateOnBlur={false}
                validationSchema={SignInSchema}
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={handleSubmitForm}
                autocomplete="off"
            >
                {({ values, errors, handleChange, handleSubmit }) => (
                    <StylFormLogin onSubmit={handleSubmit}>
                        <StylTitleForm>
                            <ArrowBack to={routes.home} />
                            Вход
                        </StylTitleForm>
                        <FormInput
                            type="email"
                            name="email"
                            autocomplete="userName"
                            placeholder="Почта"
                            valueInput={values.email}
                            imgStart={emailImgSvg}
                            err={errors.email}
                            errText={errors.email}
                            changer={handleChange}
                        />
                        <FormInput
                            type="password"
                            name="password"
                            autocomplete="current-password"
                            valueInput={values.password}
                            placeholder="Пароль"
                            imgStart={passwordlImgSvg}
                            password={true}
                            err={errors.password}
                            errText={errors.password}
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
