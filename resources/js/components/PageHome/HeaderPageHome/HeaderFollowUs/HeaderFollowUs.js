import { StylBoxContainerMaxWidth } from "./../../../common/BasicBoxes/BasicBoxes.styled";
import {
    StylBoxFollowUs,
    StylFollowUsPageHome,
    StylIconPageHome,
} from "./HeaderFollowUs.styled";

import { linkFollowsArr } from "./../../../../constants";

const HeaderFollowUs = ({ isFollow, isOnlyNetworks }) => {
    return (
        <StylBoxContainerMaxWidth>
            <StylBoxFollowUs isFollow={isFollow}>
                {isFollow && (
                    <StylFollowUsPageHome>
                        Подписывайтесь на нас:
                    </StylFollowUsPageHome>
                )}
                {linkFollowsArr.map((item, index) => (
                    <StylIconPageHome
                        key={index}
                        href={item.link}
                        target="_blank"
                        isDeactive={item.deactive}
                        isHidden={
                            (isOnlyNetworks &&
                                item.class === "fab fa-cc-visa") ||
                            (isOnlyNetworks &&
                                item.class === "fab fa-cc-mastercard")
                        }
                    >
                        <i className={item.class} />
                    </StylIconPageHome>
                ))}
            </StylBoxFollowUs>
        </StylBoxContainerMaxWidth>
    );
};

export default HeaderFollowUs;
