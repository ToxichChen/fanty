import styled, { css } from "styled-components";
import { StylBoxFlexColumnFlexStart } from "./../../common/BasicBoxes/BasicBoxes.styled";
import imageMobileBGJPG from "./../../../assets/bg/fanty.png";
import imageJPG from "./../../../assets/bg/fanty-pk.png";

const StylBoxIntroPageHome = styled(StylBoxFlexColumnFlexStart)`
background-blend-mode: multiply;
background-color: ${props => props.theme.palette.backgroundRGB.main};
    background-image: url(${imageMobileBGJPG});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 0 20px 50px 20px;

    @media(min-width: 768px){
        background-image: url(${imageJPG});
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
