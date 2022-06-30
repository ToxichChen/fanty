import { useEffect, useState } from "react";
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
import useActionUsers from "../../hooks/redux/useActionUsers";
import MiniLoader from "../Loader/MiniLoader";

const PayForGame = () => {
    const [isSelect, setSelect] = useState("");
    const [listSelect, setListSelect] = useState([]);
    const [isBonus, setBonus] = useState('');
    const [isId, setId] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isPrice, setPrice] = useState(0);
    const { getSelectForm, checkoutUser } = useActionUsers();

    const handleSubmit = (e) => {
        e.preventDefault();
        checkoutUser(isSelect, setId, setLoading);
        setTimeout(() => {
            setLoading(false)
            e.target.submit()
        }, 5000)

    }

    useEffect(() =>
        getSelectForm(setListSelect), [])

    useEffect(() => {
        const data = listSelect.find(item => item.id == isSelect);
        setPrice(data?.price);
        setBonus(data?.description);
    }, [isSelect])
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
                            onClick={(e) => {
                                setSelect(e.target.value);

                            }}
                            isMargin={isSelect === "30" && true}
                        >
                            <option value="" hidden>
                                Выберите количество дней
                            </option>
                            {listSelect.map((item, index) =>
                                <option value={item.id} key={index}>{item.title} - {item.price}</option>)}
                        </Select>
                        <BoxBonus>
                            {isBonus}
                        </BoxBonus>
                    </BoxSelectPay>
                    <FormInter
                        onSubmit={handleSubmit}
                        name="payment"
                        method="post"
                        action="https://sci.interkassa.com/"
                        accept-charset="UTF-8">
                        <input
                            type="hidden"
                            name="ik_co_id"
                            value='62619b17972ad26cd11d0423' />
                        <input
                            type="hidden"
                            name="ik_pm_no"
                            value={isId} />
                        <input
                            type="hidden"
                            name="ik_am"
                            value={isPrice} />
                        <input
                            type="hidden"
                            name="ik_cur"
                            value="uah" />
                        <input
                            type="hidden"
                            name="ik_desc"
                            value="Payment Description" />
                        {isLoading ? <MiniLoader /> : (
                            <BtnReadMore
                                type="submit"
                                style={{ maxWidth: "250px" }}>
                                Оплатить игру
                                <StylImgDoubleArrow
                                    src={doubleArrow}
                                    alt="double arrow"
                                />
                            </BtnReadMore>)}
                    </FormInter>
                </CenterPay>
            </SectionPay>
            <FooterPageHome />
        </>
    );
};

export default PayForGame;
