import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import {
    StylComplexityList,
    StylComplexityItem,
    StylTitleComplexity,
    StylTextTypeComplexity,
} from "./ComplexityHome.styled";
import { StylBoxIntroPageHome } from "./../IntroPageHome/IntroPageHome.styled";
import { StylBoxFlexColumnSpaceBetween } from "./../../common/BasicBoxes/BasicBoxes.styled";

const ComplexityHome = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <StylBoxIntroPageHome>
            <StylComplexityList>
                <StylComplexityItem data-aos="fade-right">
                    <StylTitleComplexity isComplexity="green">
                        ЗЕЛЕНЫЕ
                    </StylTitleComplexity>
                    <StylBoxFlexColumnSpaceBetween>
                        <StylTextTypeComplexity>
                            Запах
                        </StylTextTypeComplexity>
                        <StylTextTypeComplexity>
                            чувства
                        </StylTextTypeComplexity>
                        <StylTextTypeComplexity>
                            поцелуи
                        </StylTextTypeComplexity>
                    </StylBoxFlexColumnSpaceBetween>
                </StylComplexityItem>

                <StylComplexityItem data-aos="fade-right">
                    <StylTitleComplexity isComplexity="orange">
                        ОРАНЖЕВЫЕ
                    </StylTitleComplexity>
                    <StylBoxFlexColumnSpaceBetween>
                        <StylTextTypeComplexity>
                            Ласки
                        </StylTextTypeComplexity>
                        <StylTextTypeComplexity>
                            страсть
                        </StylTextTypeComplexity>
                        <StylTextTypeComplexity>
                            желанное тело
                        </StylTextTypeComplexity>
                    </StylBoxFlexColumnSpaceBetween>
                </StylComplexityItem>

                <StylComplexityItem data-aos="fade-right">
                    <StylTitleComplexity isComplexity="red">
                        КРАСНЫЕ
                    </StylTitleComplexity>
                    <StylBoxFlexColumnSpaceBetween>
                        <StylTextTypeComplexity>
                            Контакт
                        </StylTextTypeComplexity>
                        <StylTextTypeComplexity>
                            безумие
                        </StylTextTypeComplexity>
                        <StylTextTypeComplexity>
                            потеря контроля
                        </StylTextTypeComplexity>
                    </StylBoxFlexColumnSpaceBetween>
                </StylComplexityItem>
            </StylComplexityList>
        </StylBoxIntroPageHome>
    );
};

export default ComplexityHome;
