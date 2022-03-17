import styled from "styled-components";

const StylPlayerMiniMusic = styled.div`
    position: fixed;
    pointer-events: ${(props) => props.isShowPlayer === false && "none"};
    visibility: ${(props) => (props.isShowPlayer ? "visible" : "hidden")};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 300px;
    bottom: 20px;
    right: ${(props) => (props.isShow ? "0px" : "-256px")};
    transition: all ${(props) => (props.isShow ? "0.5s" : "0.2s")} ease;
    z-index: 100;

    @media (min-width: 768px) {
        width: 430px;
        right: ${(props) => (props.isShow ? "0px" : "-386px")};
    }
`;

const StylArrow = styled.button`
    position: relative;
    right: -2px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    z-index: 99;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.palette.backgroundColor.second};
    padding: 15px;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: -1px 0 2px 0px rgb(226 30 228 / 24%);
    border-right: transparent;

    & > i {
        color: ${(props) => props.theme.palette.icon.light};
        transition: all 0.2s ease;
        transform: rotate(${(props) => (props.isShow ? "180deg" : "0")});

        &:first-child {
            opacity: 0.5;
        }
    }

    @media (min-width: 1024px) {
        &:hover {
            & > i {
                color: ${(props) => props.theme.palette.icon.main};
            }
        }

        &:active {
            & > i {
                transform: translateX(-5px);
            }
        }
    }
`;

const StylBoxPlayer = styled.div`
    max-height: 100px;
    display: flex;
    flex-direction: row;
    padding: 0 10px;
    background-color: ${(props) => props.theme.palette.backgroundColor.second};

    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
    width: 100%;
`;

const StylImgPlayer = styled.img`
    position: relative;
    margin-left: 10px;
    margin-right: 10px;
    width: 115px;
    height: 115px;
    border-radius: 50%;
    box-shadow: inset 0 0 0 2px #fff;
    border: 5px solid ${(props) => props.theme.palette.border.primary};
    top: -50px;
    animation: 5s rotate-circle linear infinite;

    @keyframes rotate-circle {
        100% {
            transform: rotate(360deg);
        }
    }
`;

const StylWrapperOther = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StylNameMusic = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.main};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    max-width: 150px;
    margin: 10px 0 20px;
    letter-spacing: 1.2px;
    text-transform: capitalize;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
`;

const StylBoxControl = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const StylBtnControl = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 10px;
    margin-right: 5px;
    transition: all 0.2s ease;

    & > i {
        color: ${(props) => props.theme.palette.icon.light};
        transition: all 0.2s ease;
    }

    &:last-child {
        margin-right: 0;
    }

    @media (min-width: 768px) {
        & > i {
            font-size: 20px;
        }
    }

    @media (min-width: 1024px) {
        padding: 10px 15px;

        & > i {
            font-size: 25px;
        }

        &:hover {
            & > i {
                color: ${(props) => props.theme.palette.icon.main};
            }

            &:active {
                transform: scale(1.1);
            }
        }
    }
`;

export {
    StylPlayerMiniMusic,
    StylArrow,
    StylBoxPlayer,
    StylImgPlayer,
    StylWrapperOther,
    StylNameMusic,
    StylBoxControl,
    StylBtnControl,
};
