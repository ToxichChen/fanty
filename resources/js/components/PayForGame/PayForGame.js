import { useState } from "react";
import {
    SectionPay,
    CenterPay,
    TitlePay,
    BoxSelectPay,
    Select,
    BoxBonus,
} from "./PayForGame.styled";
import { StylBtnReadMore } from "./../PageHome/HeaderPageHome/SliderCard/SliderCard.styled";

import { StylImgDoubleArrow } from "./../common/ImgLogo/ImgLogo.styled";
import HeaderMenuPageHome from "../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import FooterPageHome from "../PageHome/FooterPageHome/FooterPageHome";
import doubleArrow from "./../../assets/icons/icon-double-arrow.png";
import { routes } from "../../Router";

const PayForGame = () => {
    const [isSelect, setSelect] = useState("");

    return (
        <>
            <SectionPay>
                <HeaderMenuPageHome />
                <CenterPay>
                    <TitlePay>
                        <i className="fas fa-gem" />
                        Полная версия игры
                    </TitlePay>
                    <BoxSelectPay>
                        <Select
                            onClick={(e) => setSelect(e.target.value)}
                            isMargin={isSelect === "30" && true}
                        >
                            <option value="" hidden>
                                Выберите количество дней
                            </option>
                            <option value="1">1 день - 1.5 долларов</option>
                            <option value="7">7 дней - 3 долларов</option>
                            <option value="30">30 дней - 8 долларов</option>
                        </Select>
                        {isSelect === "30" && (
                            <BoxBonus>
                                Игра на 30 дней + 10 дней в подарок
                            </BoxBonus>
                        )}
                    </BoxSelectPay>
                    <StylBtnReadMore
                        to={routes.home}
                        style={{ maxWidth: "250px" }}
                    >
                        Оплатить игру
                        <StylImgDoubleArrow
                            src={doubleArrow}
                            alt="double arrow"
                        />
                    </StylBtnReadMore>
                </CenterPay>
            </SectionPay>
            <FooterPageHome />
        </>
    );
};

export default PayForGame;
