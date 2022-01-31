import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
    StylCardFeatureBox,
    StylTitleFeature,
    StylTextFeature,
} from "./FeatureCard.styled";

const FeatureCard = ({ title, text }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <StylCardFeatureBox data-aos="fade-right">
            <StylTitleFeature>{title}</StylTitleFeature>
            <StylTextFeature>{text}</StylTextFeature>
        </StylCardFeatureBox>
    );
};

export default FeatureCard;
