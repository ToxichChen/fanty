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
    OtherForm,
    BoxBtnForm
} from "./FormLogin.styled";
import { routes } from "../../Router";
import useActionUsers from "../../hooks/redux/useActionUsers";
import { inputFormLogin } from "../../constants";

const FormLogin = () => {
    const { loginUser } = useActionUsers();
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
            >
                {({ values, errors, handleChange, handleSubmit }) => (
                    <StylFormLogin onSubmit={handleSubmit} autocomplete="off">
                        <StylTitleForm>
                            <ArrowBack to={routes.home} />
                            Вход
                        </StylTitleForm>
                        {inputFormLogin.map((item) =>

                            <FormInput
                                id={item.placeholder}
                                key={item.placeholder}
                                type={item.type}
                                name={item.name}
                                autocomplete={item.autocomplete}
                                placeholder={item.placeholder}
                                valueInput={'values.email' === item.valueInput ? values.email : values.password}
                                imgStart={item.imgStart}
                                err={'errors.email' === item.err ? errors.email : errors.password}
                                errText={'errors.email' === item.errText ? errors.email : errors.password}
                                changer={handleChange}
                            />
                        )}
                        <BoxBtnForm>
                            <BtnSubmitForm />
                            <OtherForm  to={routes.formRegister}>Регистрация</OtherForm>
                        </BoxBtnForm>
                    </StylFormLogin>
                )}
            </Formik>
        </StylCenterBoxGradientForm>
    );
};

export default FormLogin;
