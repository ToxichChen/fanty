import { useState } from "react";
import HeaderMenuPageHome from "./HeaderMenu/HeaderMenuPageHome";
import HeaderFollowUs from "./HeaderFollowUs/HeaderFollowUs";
import SliderCard from "./SliderCard/SliderCard";
import { StylContainerCounter } from "./../../common/Boxes/Boxes.styled";
import { StylBoxFlexColumnFlexStart } from "./../../common/BasicBoxes/BasicBoxes.styled";
import {
    StylArrowNextPageHome,
    StylCounterHeaderPageHome,
    StylHeaderPageHome,
} from "./HeaderPageHome.styled";

import arrowNext from "./../../../assets/icons/icon-arrow-next.png";
import { sliderDataArr } from "../../../constants";

const HeaderPageHome = () => {
    const [isSelectedSlide, setSelectedSlide] = useState(
        sliderDataArr[0].counter
    );
    const [isSelectedSlideImg, setSelectedSlideImg] = useState(
        sliderDataArr[0].img
    );

    const handleSlide = (e) => {
        const valueTarget = e.currentTarget.innerHTML;

        setSelectedSlide(valueTarget);
        setSelectedSlideImg(sliderDataArr[valueTarget.slice(1, 2) - 1].img);
    };

    const handleNextSlide = () => {
        sliderDataArr[isSelectedSlide.slice(1, 2)]
            ? setSelectedSlide(
                sliderDataArr[isSelectedSlide.slice(1, 2)].counter
            )
            : setSelectedSlide(sliderDataArr[0].counter);

        sliderDataArr[isSelectedSlide.slice(1, 2)]
            ? setSelectedSlideImg(
                sliderDataArr[isSelectedSlide.slice(1, 2)].img
            )
            : setSelectedSlideImg(sliderDataArr[0].img);
    };

    return (
        <StylHeaderPageHome>
            <StylBoxFlexColumnFlexStart>
                <HeaderFollowUs isFollow={true} isOnlyNetworks={true} />
                <HeaderMenuPageHome />
            </StylBoxFlexColumnFlexStart>

            {!!sliderDataArr.length && sliderDataArr.map((item, index) => (
                <SliderCard
                    imgUrl={isSelectedSlideImg}
                    imgUrl2={item.img2}
                    text={item.text}
                    title={item.title}
                    id={item.counter}
                    isSelect={item.counter === isSelectedSlide}
                    pageUrl={item.pageUrl}
                    key={index}
                />
            ))}

            <StylContainerCounter>
                {!!sliderDataArr.length && sliderDataArr.map((item, index) => (
                    <StylCounterHeaderPageHome
                        type="button"
                        key={index}
                        isSelect={item.counter === isSelectedSlide}
                        onClick={handleSlide}
                    >
                        {item.counter}
                    </StylCounterHeaderPageHome>
                ))}
            </StylContainerCounter>

            <StylArrowNextPageHome
                src={arrowNext}
                alt="arrow next"
                onClick={handleNextSlide}
            />
        </StylHeaderPageHome>
    );
};

export default HeaderPageHome;
