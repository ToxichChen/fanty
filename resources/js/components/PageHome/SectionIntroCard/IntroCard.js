import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import doubleArrow from "./../../../assets/icons/icon-double-arrow.png";
import { dataCardGameArr } from "../../../constants";

import { StylImgDoubleArrow } from "./../../common/ImgLogo/ImgLogo.styled";

import {
    StylBoxIntroCard,
    StylBoxCenterIntroCard,
    StylBoxCardGame,
    StylDataCardGame,
    StylLinkCardGame,
    StylTitleCardGame,
    StylTextCardGame,
    StylBtnCardGame,
} from "./IntroCard.styled";
import { routes } from "../../../Router";

const IntroCard = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <StylBoxIntroCard>
            <StylBoxCenterIntroCard>
                {dataCardGameArr.map((item) => (
                    <StylBoxCardGame key={item.id} data-aos="fade-right">
                        <StylDataCardGame>
                            {item.data}
                            <StylLinkCardGame to={item.url}>
                                {item.link}
                            </StylLinkCardGame>
                        </StylDataCardGame>
                        <StylTitleCardGame>{item.title}</StylTitleCardGame>
                        <StylTextCardGame>{item.text}</StylTextCardGame>
                        <StylBtnCardGame to={item.url}>
                            {item.btnText}
                            <StylImgDoubleArrow
                                src={doubleArrow}
                                alt="double arrow"
                            />
                        </StylBtnCardGame>
                    </StylBoxCardGame>
                ))}
            </StylBoxCenterIntroCard>
        </StylBoxIntroCard>
    );
};

export default IntroCard;
