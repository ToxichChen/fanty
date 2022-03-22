import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StylWrapperVip = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: ${(props) => (props.isVip ? "none" : "flex")};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: #191c2b;
    padding: 15px;
    z-index: 1;

    @media (min-width: 1024px) {
        padding: 5px;
    }
`;

const StylVipText = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    letter-spacing: 1.5px;
    line-height: 1.5;
    margin-bottom: 14px;
    text-align: center;
    align-self: center;

    max-width: ${(props) => props.isLowWidth && "440px"};
    @media (min-width: 768px) {
        margin-right: 60px;
        margin-bottom: 0;
    }
`;

const StylBtnVip = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    font-weight: 700;
    font-size: 11px;
    color:${props => props.theme.palette.text.light};
    padding: 10px 24px;
    border-radius: 45px;
    background: 0 0;
    border: 2px solid ${props => props.theme.palette.shadowRange.primary};
    box-shadow: inset 0 0 20px 6px ${props => props.theme.palette.shadow.dark};
    transition: all 0.2s ease;

    & > i {
        postion: relative;
        margin-right: 10px;
    }

    @media (min-width: 1024px) {
        &:hover {
            box-shadow: inset 0 0 9px 6px ${props => props.theme.palette.shadow.dark};
        }
    }
`;

export { StylWrapperVip, StylVipText, StylBtnVip };
