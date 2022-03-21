import styled from "styled-components";

const StylBoxCenterSpiner = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background: radial-gradient(${props => props.theme.palette.backgroundGradien.second});
    overflow: hidden;
    z-index: 1000;

    animation: hueRotate 6s ease-in-out 3s infinite;
    @keyframes hueRotate {
        0% {
            filter: hue-rotate(0deg);
        }
        50% {
            filter: hue-rotate(-120deg);
        }
        100% {
            filter: hue-rotate(0deg);
        }
    }
`;

const StylSpiner = styled.svg`
    animation: Rotate 2.4s both infinite linear;
    transform: scale(1, -1);

    & > path {
        animation: DrawLine 1.6s both infinite alternate linear;
        fill: none;
        stroke: ${(props) => props.theme.palette.backgroundBtn.light};
        stroke-width: 50;
    }

    @keyframes Rotate {
        0% {
            transform: rotate(0deg) scale(1, -1);
        }
        100% {
            transform: rotate(360deg) scale(1, -1);
        }
    }
    @keyframes DrawLine {
        0% {
            stroke-dasharray: 0 126;
        }
        100% {
            stroke-dasharray: 126 126;
        }
    }
`;

const StylBoxCenterSpinerMini = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    height: 50%;
    width: 100%;
    background: transparent;
    overflow: hidden;
    z-index: 1000;
`;

export { StylBoxCenterSpiner, StylSpiner, StylBoxCenterSpinerMini };
