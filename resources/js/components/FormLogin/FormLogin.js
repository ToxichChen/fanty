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
import { useNavigate } from "react-router";

const FormLogin = () => {
    const { loginUser } = useActionUsers();
    const navigate = useNavigate();
    const handleSubmitForm = (initialValues) => {

        loginUser(initialValues, () => navigate(-2));
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
                        {inputFormLogin.map((item, index) =>
                            <div
                                key={index}>
                                <FormInput
                                    id={item.placeholder}
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
                            </div>
                        )}
                        <BoxBtnForm>
                            <BtnSubmitForm />
                            <OtherForm to={routes.formRegister}>Регистрация</OtherForm>
                        </BoxBtnForm>
                    </StylFormLogin>
                )}
            </Formik>
        </StylCenterBoxGradientForm>
    );
};

export default FormLogin;
