import { StylBoxIntroPageHome } from "./IntroPageHome.styled";
import CardIntroPageHome from "./CardIntro/CardIntroPageHome";
import { StylBoxCenterIntroPageHome } from "./CardIntro/CardIntroPageHome.styled";
import { dataPostArr } from "../../../constants";

const IntroPageHome = () => {
    return (
        <StylBoxIntroPageHome top={true}>
            <StylBoxCenterIntroPageHome>
                {dataPostArr.map((item) => (
                    <CardIntroPageHome
                        key={item.id}
                        item={item}
                    />
                ))}
            </StylBoxCenterIntroPageHome>
        </StylBoxIntroPageHome>
    );
};

export default IntroPageHome;
