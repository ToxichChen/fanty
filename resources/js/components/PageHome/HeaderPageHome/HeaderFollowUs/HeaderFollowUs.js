import { StylBoxContainerMaxWidth } from "./../../../common/BasicBoxes/BasicBoxes.styled";
import {
    StylBoxFollowUs,
    StylFollowUsPageHome,
    StylIconPageHome,
} from "./HeaderFollowUs.styled";

import { linkFollowsArr } from "./../../../../constants";

const HeaderFollowUs = ({ isFollow }) => {
    return (
        <StylBoxContainerMaxWidth>
            <StylBoxFollowUs isFollow={isFollow}>
                {isFollow && (
                    <StylFollowUsPageHome>
                        Подписывайтесь на нас:
                    </StylFollowUsPageHome>
                )}
                {linkFollowsArr.map((item, index) => (
                    <StylIconPageHome className={item} key={index} />
                ))}
            </StylBoxFollowUs>
        </StylBoxContainerMaxWidth>
    );
};

export default HeaderFollowUs;
