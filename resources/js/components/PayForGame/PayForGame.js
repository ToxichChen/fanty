import { useState } from "react";
import {
    SectionPay,
    CenterPay,
    TitlePay,
    BoxSelectPay,
    Select,
    BoxBonus,
    FormInter,
    BtnReadMore
} from "./PayForGame.styled";

import { StylBoxFlexColumnFlexStart, StylBoxContainerMaxWidth } from "./../common/BasicBoxes/BasicBoxes.styled";

import { StylImgDoubleArrow } from "./../common/ImgLogo/ImgLogo.styled";
import HeaderMenuPageHome from "../PageHome/HeaderPageHome/HeaderMenu/HeaderMenuPageHome";
import HeaderFollowUs from "../PageHome/HeaderPageHome/HeaderFollowUs/HeaderFollowUs";
import FooterPageHome from "../PageHome/FooterPageHome/FooterPageHome";
import doubleArrow from "./../../assets/icons/icon-double-arrow.png";
import { routes } from "../../Router";

const PayForGame = () => {
    const [isSelect, setSelect] = useState("");

    return (
        <>
            <SectionPay>
                <StylBoxContainerMaxWidth>
                    <StylBoxFlexColumnFlexStart>
                        <HeaderFollowUs isFollow={true} isOnlyNetworks={true} />
                        <HeaderMenuPageHome />
                    </StylBoxFlexColumnFlexStart>
                </StylBoxContainerMaxWidth>
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
                    <FormInter name="payment" method="post" action="https://sci.interkassa.com/" accept-charset="UTF-8">
                        <input type="hidden" name="ik_co_id" value="62619b17972ad26cd11d0423" />
                        <input type="hidden" name="ik_pm_no" value="ID_1234" />
                        <input type="hidden" name="ik_am" value={isSelect} />
                        <input type="hidden" name="ik_cur" value="uah" />
                        <input type="hidden" name="ik_desc" value="Payment Description" />
                        <BtnReadMore
                            type="submit"
                            style={{ maxWidth: "250px" }}>
                            Оплатить игру
                            <StylImgDoubleArrow
                                src={doubleArrow}
                                alt="double arrow"
                            />
                        </BtnReadMore>
                    </FormInter>
                </CenterPay>
            </SectionPay>
            <FooterPageHome />
        </>
    );
};

export default PayForGame;
