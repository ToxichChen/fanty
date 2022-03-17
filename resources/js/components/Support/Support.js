import {
    SectionSupport,
    CenterSupport,
    FormSupport,
    FormInput,
    FormTextArea,
    BoxContent,
    TitleContent,
    TextContent,
    BtnSendForm,
} from "./Support.styled";

import { Formik } from "formik";
import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import FooterPageHome from "../PageHome/FooterPageHome/FooterPageHome";
import { StylImgDoubleArrow } from "../common/ImgLogo/ImgLogo.styled";
import doubleArrow from "./../../assets/icons/icon-double-arrow.png";

const Support = () => {
    const handleSubmitForm = (initialValues) => {
        console.log(initialValues);
    };
    return (
        <>
            <SectionSupport>
                <HeaderMenuPageHome />
                <CenterSupport>
                    <Formik
                        validateOnChange={false}
                        validateOnBlur={false}
                        initialValues={{
                            name: "",
                            email: "",
                            subject: "",
                            comment: "",
                        }}
                        onSubmit={handleSubmitForm}
                    >
                        {({ values, handleSubmit }) => (
                            <FormSupport method="POST" autocomplete="off">
                                <FormInput
                                    placeholder="Ваше имя"
                                    name="name"
                                    type="text"
                                    valueInput={values.name}
                                />
                                <FormInput
                                    placeholder="Ваша почта"
                                    name="email"
                                    type="email"
                                    valueInput={values.email}
                                />
                                <FormInput
                                    placeholder="Тема"
                                    name="subject"
                                    type="text"
                                    valueInput={values.subject}
                                />
                                <FormTextArea
                                    placeholder="Комментарий"
                                    name="comment"
                                    valueInput={values.comment}
                                />
                                <BtnSendForm>
                                    Отправить сообщение!
                                    <StylImgDoubleArrow
                                        src={doubleArrow}
                                        alt="double arrow"
                                    />
                                </BtnSendForm>
                            </FormSupport>
                        )}
                    </Formik>
                    <BoxContent>
                        <TitleContent>Привет, поздоровайся</TitleContent>
                        <TextContent>
                            Вы заполняете нашу электронную форму, чтобы
                            запросить интересующие вас профили разработчиков.
                            Другой вариант — просмотреть наш пул профессионалов,
                            которые доступны для заключения контракта.
                            Подписываем NDA. 2 Интервью с разработчиками Мы
                            проводим первичную встречу и уточняем ваши
                            требования. В результате мы рассылаем анонимные
                            резюме подходящих людей, которые у нас есть.
                            Основываясь на нашем опыте, мы можем предоставить
                            запрашиваемые ресурсы в 90% случаев, доступные в
                            течение 1-4 недель.3 Разгрузите свою работу! Мы
                            подписываем контракт с указанием выделенных свойств
                            команды. Вы начинаете разгружать свой бэклог
                            команде. Наш менеджер проекта посещает еженедельные
                            встречи и контролирует разработчиков с нашей
                            стороны.
                        </TextContent>
                    </BoxContent>
                </CenterSupport>
            </SectionSupport>
            <FooterPageHome />
        </>
    );
};

export default Support;
