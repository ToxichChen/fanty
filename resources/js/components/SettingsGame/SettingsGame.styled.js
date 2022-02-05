import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StylBoxFeaturesGame = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1140px;
    width: 100%;
    border-radius: 40px;
    padding: 25px;
    background: rgba(25, 28, 43, 0.95);
    margin-bottom: 20px;
`;

const StylBtnStartGame = styled(NavLink)`
    width: 100%;
    font-size: ${(props) => props.theme.typography.textMedium.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-align: center;
    text-decoration: none;
    padding: 15px 60px;
    border-radius: 100px;
    align-self: center;
    margin-bottom: 30px;
    border: 3px solid #982926;
    background: linear-gradient(180deg, #bd2726 0, #982926 90.87%);
    transition: all 0.2s ease;

    @media (min-width: 768px) {
        width: auto;
    }

    @media (min-width: 1024px) {
        &:hover {
            box-shadow: 0 0 10px 2px #982926;
        }

        &:active {
            transform: scale(1.1);
        }
    }
`;

const StylBoxSettingsGame = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    max-width: 100;
    width: 100%;
    padding: 20px;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
        padding: 30px 20px 20px 40px;
        width: 49%;
        margin-bottom: 20px;
    }
`;

const BtnMoreSettings = styled.button`
    position: relative;
    cursor: pointer;
    max-width: 190px;
    width: 100%;
    padding: 0 25px;

    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    border: 3px solid #555abf;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#32325d),
        color-stop(90.87%, #555abf)
    );
    background: -o-linear-gradient(top, #32325d 0, #555abf 90.87%);
    background: linear-gradient(180deg, #32325d 0, #555abf 90.87%);
    -webkit-box-shadow: 0 2px 10px #257cff;
    box-shadow: 0 2px 10px #257cff;
    border-radius: 69px;
    height: 50px;
    color: #fff;
    text-decoration: none;

    & > i {
        position: absolute;
        left: 25px;
        top: 16px;
        transition: all 0.2s ease;
    }

    @media (min-width: 768px) {
        margin-bottom: 30px;
    }

    @media (min-width: 1024px) {
        &:hover {
            & > i {
                transform: rotate(45deg);
            }
        }
    }
`;

const StylWrapperAllSettings = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;

    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media (min-width: 1024px) {
        flex-direction: ${(props) => (props.isColumn ? "column" : "row")};
        justify-content: space-between;
        align-items: flex-start;
    }
`;

const StylBtnFooterSettings = styled(NavLink)`
    cursor: pointer;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-align: center;
    text-decoration: none;
    background: linear-gradient(180deg, #f77 0, #f32d2d 90.87%);
    box-shadow: 0 2px 10px #f53131;
    padding: 15px 20px;
    border-radius: 100px;
    border: 3px solid #f32d2d;
    margin-bottom: 20px;
    transition: all 0.2s ease;

    & > i {
        color: ${(props) => props.theme.palette.main};
        margin-right: 10px;
        font-size: 20px;
        transition: all 0.2s ease;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
        width: auto;
        justify-content: flex-start;

        &:not(:last-child) {
            margin-right: 15px;
        }
    }

    @media (min-width: 1024px) {
        &:hover {
            background: linear-gradient(0deg, #f77 0, #f32d2d 90.87%);

            & > i {
                transform: rotate(45deg);
            }
        }

        &:active {
            transform: scale(1.1);
        }
    }
`;

const StylBtnFooterSettingsComplexity = styled.button`
    cursor: pointer;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-align: center;
    text-decoration: none;
    background: linear-gradient(180deg, #f77 0, #f32d2d 90.87%);
    box-shadow: 0 2px 10px #f53131;
    padding: 15px 20px;
    border-radius: 100px;
    border: 3px solid #f32d2d;
    margin-bottom: 20px;
    transition: all 0.2s ease;

    & > i {
        color: ${(props) => props.theme.palette.main};
        margin-right: 10px;
        font-size: 20px;
        transition: all 0.2s ease;
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
        width: auto;
        justify-content: flex-start;

        &:not(:last-child) {
            margin-right: 15px;
        }
    }

    @media (min-width: 1024px) {
        &:hover {
            background: linear-gradient(0deg, #f77 0, #f32d2d 90.87%);

            & > i {
                transform: rotate(45deg);
            }
        }

        &:active {
            transform: scale(1.1);
        }
    }
    border: 3px solid #005734;
    background: #00a44f;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(#00a44f),
        color-stop(90.87%, #005734)
    );
    background: -o-linear-gradient(top, #00a44f 0, #005734 90.87%);
    background: linear-gradient(180deg, #00a44f 0, #005734 90.87%);
    -webkit-box-shadow: 0 2px 10px #005734;
    box-shadow: 0 2px 10px #005734;

    @media (min-width: 1024px) {
        &:hover {
            background: linear-gradient(0deg, #005734 0, #00a44f 90.87%);

            & > i {
                transform: rotate(45deg);
            }
        }
    }
`;

const StylBoxFooterSettings = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    max-width: 1140px;
    width: 100%;
    border-radius: 40px;
    padding: 25px;
    background: rgba(25, 28, 43, 0.95);
`;

const StylSectionDiscount = styled.p`
    display: ${(props) => (props.isVip ? "none" : "block")};
    font-size: ${(props) => props.theme.typography.textLarge.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.primary};
    text-align: center;
    margin-bottom: ${(props) => props.isMargin && "40px"};

    & > span {
        color: #f32d2d;
        margin-left: 5px;
    }
`;

const StylWrapperCard = styled.div`
    position: relative;
    display: ${(props) => (props.isVisible ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    width: 100%;
    padding: 45px 45px 30px;
    margin-bottom: 10px;
    margin-right: 10px;
    background: no-repeat rgba(19, 43, 59, 0.7);
    border-radius: 32px;

    &:nth-child(1) {
        width: 100%;
        max-width: 100%;
    }

    &:nth-child(2n) {
        background: no-repeat rgba(22, 40, 68, 0.7);
    }

    @media (min-width: 600px) {
        max-width: 48%;
    }

    @media (min-width: 1200px) {
        max-width: 350px;

        &:nth-child(1) {
            width: 350px;
            max-width: 100%;
        }
    }
`;

const StylCardSettingsTitle = styled.h3`
    font-size: ${(props) => props.theme.typography.textMedium.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    margin-bottom: 10px;
    text-align: center;

    & > span {
        font-size: ${(props) => props.theme.typography.textLarge.main};
    }
`;

const StylCardSettingsText = styled.p`
    font-size: ${(props) =>
        props.isSmall
            ? props.theme.typography.textSmall.main
            : props.theme.typography.textMedium.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    line-height: 1.5;
    text-align: center;
    margin-bottom: 10px;
`;

const StylBtnCardSettings = styled.button`
    cursor: pointer;
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    top: 15px;
    right: 20px;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: #162844;
    color: #fff;
`;

const StylBoxWrapperCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    max-width: 1140px;
    width: 100%;
    flex-wrap: wrap;
    padding: 10px;
`;

const StylBoxCenterCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & > i {
        font-size: 20px;
        max-width: 65px;
        width: 100%;

        color: #fff;
        padding: 20px;
        border: 1px solid #fff;
        border-radius: 50%;

        &:first-child {
            margin-right: 10px;
        }
    }
`;

const StylImgCardSettings = styled.img`
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0;
    background-color: transparent;
    border: 2px solid #fff;
`;

const StylTitleUserSettings = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
    margin-bottom: 10px;
`;

const StylWrapperInput = styled.div`
    position: relative;
    padding: 0 25px 0 55px;
    margin-bottom: 15px;
    border-radius: 100px;
    height: 50px;
    max-width: 100%;
    width: 100%;
    background-color: transparent;
    border: 1px solid #fff;
    margin-bottom: 10px;
    transition: all 0.2s ease;

    & > i {
        position: absolute;
        top: 30%;
        left: 5%;
        font-size: 20px;
        color: #fff;
    }

    @media (min-width: 768px) {
        max-width: 245px;

        & > i {
            left: 10%;
        }
    }

    @media (min-width: 1024px) {
        &:hover {
            border-color: ${(props) => props.theme.palette.text.primary};
        }

        &:active,
        &:focus {
            border-color: ${(props) => props.theme.palette.text.dark};
        }
    }
`;

const StylInputUserSettings = styled.input`
    position: relative;
    font-size: 14px;
    color: #fff;
    font-weight: 600;
    height: 50px;
    max-width: 100%;
    width: 100%;
    background-color: transparent;
    outline: none;
    border: none;
`;

const StylVipStatusModal = styled.div`
    display: ${(props) => (props.isVip ? "none" : "flex")};
    flex-direction: row;
    flex-wrap: wrap;
    padding: 40px;
    border-radius: 20px;
    margin-top: 30px;
    margin-bottom: 10px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.1);
`;

const StylOptionsAddedWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${(props) => (props.isFullWidth ? "100%" : "49%")};
    padding: 25px;
    margin-bottom: 10px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 10;

    @media (min-width: 768px) {
        padding: ${(props) =>
            props.isPadding ? "65px 55px 50px 45px" : "15px"};
    }
`;

const StylBtnStartGameFooter = styled(StylBtnStartGame)`
    margin-bottom: 0;
`;

const StylBoxFlexStartColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;

    @media (min-width: 768px) {
        width: auto;
        flex-direction: row;
    }
`;

const StylWrapperCenterContent = styled(StylOptionsAddedWrapper)`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0;
    margin-top: 10px;
`;

export {
    StylWrapperCenterContent,
    StylBoxFlexStartColumn,
    StylOptionsAddedWrapper,
    StylVipStatusModal,
    StylWrapperInput,
    StylInputUserSettings,
    StylTitleUserSettings,
    StylBoxCenterCard,
    StylBtnCardSettings,
    StylCardSettingsText,
    StylCardSettingsTitle,
    StylWrapperCard,
    StylBoxFeaturesGame,
    StylBtnStartGame,
    StylBoxSettingsGame,
    BtnMoreSettings,
    StylWrapperAllSettings,
    StylBtnFooterSettings,
    StylBoxFooterSettings,
    StylSectionDiscount,
    StylBoxWrapperCards,
    StylImgCardSettings,
    StylBtnStartGameFooter,
    StylBtnFooterSettingsComplexity,
};
