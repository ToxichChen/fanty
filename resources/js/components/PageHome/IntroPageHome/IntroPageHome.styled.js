import styled, { css } from "styled-components";
import { StylBoxFlexColumnFlexStart } from "./../../common/BasicBoxes/BasicBoxes.styled";
import imageBGJPG from "./../../../assets/bg/bg-image.jpg";
import imageMobileBGJPG from "./../../../assets/bg/bg-image-mobile.jpg";

const StylBoxIntroPageHome = styled(StylBoxFlexColumnFlexStart)`
    background-blend-mode: multiply;
    background-image: url(${imageMobileBGJPG});
    background-color: rgba(111, 43, 149, 0.8);
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 20px 50px 20px;

    @media (min-width: 1024px) {
        padding: 0 20px 115px 20px;
        background-image: url(${imageBGJPG});
    }

    ${(props) =>
        props.top &&
        css`
            padding: 50px 20px;

            @media (min-width: 1024px) {
                padding: 115px 20px;
            }
        `}
`;

export { StylBoxIntroPageHome };
