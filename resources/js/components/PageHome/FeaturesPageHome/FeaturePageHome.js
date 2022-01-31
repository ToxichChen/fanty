import React from "react";
import FeatureCard from "./FetureCard/FeatureCard";
import { StylBoxCenterFeaturePageHome } from "./FetureCard/FeatureCard.styled";
import { StylBoxIntroPageHome } from "./../IntroPageHome/IntroPageHome.styled";

import { dataPostFeatureArr } from "../../../constants";

const FeaturePageHome = ({ svg, title, text }) => {
    return (
        <StylBoxIntroPageHome>
            <StylBoxCenterFeaturePageHome>
                {dataPostFeatureArr.map((item) => (
                    <FeatureCard
                        key={item.id}
                        title={item.title}
                        text={item.text}
                    />
                ))}
            </StylBoxCenterFeaturePageHome>
        </StylBoxIntroPageHome>
    );
};

export default FeaturePageHome;
