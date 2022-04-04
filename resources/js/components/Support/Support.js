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
    IconSupport
} from "./Support.styled";

import { Formik } from "formik";
import { StylBoxFlexColumnFlexStart } from "./../common/BasicBoxes/BasicBoxes.styled";
import HeaderMenuPageHome from "./../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import HeaderFollowUs from "./../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import FooterPageHome from "../PageHome/FooterPageHome/FooterPageHome";
import { StylImgDoubleArrow } from "../common/ImgLogo/ImgLogo.styled";
import doubleArrow from "./../../assets/icons/icon-double-arrow.png";
import useActionUsers from "../../hooks/redux/useActionUsers";

const Support = () => {
    const { setUserDataForm } = useActionUsers();

    const handleSubmitForm = (initialValues) => {
        setUserDataForm(initialValues)
    };

    return (
        <>
            <SectionSupport>
                <StylBoxFlexColumnFlexStart>
                    <HeaderFollowUs isFollow={true} isOnlyNetworks={true} />
                    <HeaderMenuPageHome />
                </StylBoxFlexColumnFlexStart>
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
                        {({ values }) => (
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
                        <TitleContent>Приветствуем Вас.</TitleContent>
                        <TextContent>
                            Это Администрация сайта dip.baby. Если у Вас возники вопросы или трудности с игрой, и/или появились идеи и предложения, просим Вас воспользоваться формой обратной связи. До встречи в игре.
                        </TextContent>
                        <IconSupport><i className="fa fa-envelope"></i>dip.baby.game@gmail.com</IconSupport>
                    </BoxContent>
                </CenterSupport>
            </SectionSupport>
            <FooterPageHome />
        </>
    );
};

export default Support;
