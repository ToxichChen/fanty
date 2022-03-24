import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
    StylBoxCardIntroPageHome,
    StylTextIntroCard,
    StylTitleIntroCard,
    StylIconIntorCard,
} from "./CardIntroPageHome.styled";

const CardIntroPageHome = ({ item }) => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <StylBoxCardIntroPageHome data-aos="fade-right">
            <StylIconIntorCard className={item.svg} />
            <StylTitleIntroCard>{item.title}</StylTitleIntroCard>
            <StylTextIntroCard>{item.text}</StylTextIntroCard>
        </StylBoxCardIntroPageHome>
    );
};

export default CardIntroPageHome;
