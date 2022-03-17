import styled from "styled-components";

const BtnTop = styled.button`
    position: fixed;
    display: ${(props) => (props.isShow ? "flex" : "none")};
    bottom: ${(props) => (props.isPlayer ? "140px" : "20px")};
    opacity: ${(props) => (props.isShow ? "1" : "none")};
    right: 20px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    border: none;
    outline: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(to right, #3e0f3d 0%, #1c0f3b 100%);
    box-shadow: 0 0 9px 3px rgb(226 30 228 / 24%);
    transition: all 0.2s ease;
    animation: ${(props) =>
        props.isShow ? "smoothSpawn 1s linear" : "disappearance 1s linear"};

    @media (min-width: 1024px) {
        &:hover {
            transform: scale(1.1);
        }
    }

    & > i {
        color: #fff;
    }

    @keyframes smoothSpawn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes disappearance {
        from {
            opacity: 1;
        }
        to {
            opacity: 1;
        }
    }
`;

export { BtnTop };
