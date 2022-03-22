import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import FormInput from "./../FormLogin/FormInput/FormInput";
import BtnSubmitForm from "./../FormLogin/BtnSubmitForm";

import {
    StylFormLogin,
    StylTitleForm,
    StylCenterBoxGradientForm,
    ArrowBack,
} from "./../FormLogin/FormLogin.styled";

import { inputFormRegistration } from "../../constants";
import { routes } from "../../Router";
import useActionUsers from "../../hooks/redux/useActionUsers";

const FormRegistration = () => {
    const { registerUser } = useActionUsers();
    const [isCheckPassowrd, setCheckPassword] = useState(false);

    const handleSubmitForm = (initialValues) => {
        registerUser(initialValues);
    };

    const SignUpSchema = Yup.object().shape({
        password: Yup.string()
            .min(6, "Слишком короткий пароль")
            .max(50, "Слишком длинный пароль")
            .required("Обязательноe поле"),
        name: Yup.string()
            .min(2, "Слишком короткое имя")
            .max(50, "Слишком длинный имя")
            .required("Обязательноe поле"),
        email: Yup.string()
            .email("Неправильная почта. Вот пример: user1@gmail.com")
            .max(50, "Слишком длинный email")
            .required("Обязательноe поле"),
    });

    return (
        <StylCenterBoxGradientForm>
            <Formik
                validationSchema={SignUpSchema}
                validateOnChange={false}
                validateOnBlur={false}
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    checkPassword: "",
                }}
                validate={(values) => {
                    values.password !== values.checkPassword
                        ? setCheckPassword(true)
                        : setCheckPassword(false);
                }}
                onSubmit={handleSubmitForm}
            >
                {({ values, errors, handleChange, handleSubmit }) => (
                    <StylFormLogin onSubmit={handleSubmit} autocomplete="off">
                        <StylTitleForm>
                            <ArrowBack to={routes.home} />
                            Регистрация
                        </StylTitleForm>
                        {inputFormRegistration.map((item, index) =>
                            <FormInput
                                type={item.type}
                                name={item.name}
                                autocomplete={item.autocomplete}
                                valueInput={'values.name' === item.valueInput ? values.name : 'values.email' === item.valueInput ? values.email : 'values.password' === item.valueInput ? values.password : values.checkPassword}
                                placeholder={item.placeholder}
                                err={'errors.name' === item.err ?
                                    errors.name : 'errors.email' === item.err ?
                                        errors.email : 'errors.password' === item.err ?
                                            errors.password : isCheckPassowrd}
                                errText={'errors.name' === item.errText ?
                                    errors.name : 'errors.email' === item.errText ?
                                        errors.email : 'errors.password' === item.errText ?
                                            errors.password : item.errText}
                                imgStart={item.imgStart}
                                changer={handleChange}
                            />
                        )}
                        <BtnSubmitForm />
                    </StylFormLogin>
                )}
            </Formik>
        </StylCenterBoxGradientForm>
    );
};

export default FormRegistration;
