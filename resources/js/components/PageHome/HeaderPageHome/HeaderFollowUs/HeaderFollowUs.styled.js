import styled from "styled-components";
import { StylBoxFlexRowFlexEnd } from "./../../../common/BasicBoxes/BasicBoxes.styled";

const StylBoxFollowUs = styled(StylBoxFlexRowFlexEnd)`
    justify-content: ${(props) => (props.isFollow ? "" : "center")};
    margin-bottom: ${(props) => (props.isFollow ? "" : "40px")};
`;

const StylFollowUsPageHome = styled.p`
    font-size: ${(props) => props.theme.typography.textMedium.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.main};
    letter-spacing: 1.1px;
    margin-right: 12px;
`;

const StylIconPageHome = styled.i`
    position: relative;
    cursor: pointer;
    top: -7px;
    padding: 10px;
    margin-right: 12px;
    color: ${(props) => props.theme.palette.icon.light};
    font-size: ${(props) => props.theme.typography.textSmall.main};
    border-radius: 50%;
    transition: all 0.2s ease;

    @media (min-width: 1024px) {
        &:hover {
            background-color: ${(props) => props.theme.palette.border.main};
        }

        &:active {
            transform: scale(1.1);
        }
    }
`;

export { StylBoxFollowUs, StylFollowUsPageHome, StylIconPageHome };
