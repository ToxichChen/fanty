import styled from "styled-components";

const SectionPay = styled.section`
    background-color: ${(props) => props.theme.palette.backgroundColor.second};
    min-height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;

    @media (min-width: 768px) {
        padding: 20px;
    }
`;

const CenterPay = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    margin-top: 20px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
`;

const TitlePay = styled.h2`
    font-size: ${(props) => props.theme.typography.textMedium.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-transform: capitalaze;
    margin-bottom: 20px;

    & > i {
        color: ${(props) => props.theme.palette.icon.main};
        font-size: ${(props) => props.theme.typography.textMedium.primary};
        margin-right: 10px;
    }
`;

const BoxSelectPay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    background-color: rgba(12, 6, 46, 0.5);
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
`;

const Select = styled.select`
    position: relative;
    appearance: none;
    display: flex;
    max-width: 350px;
    width: 100%;
    min-height: 35px;
    background-color: ${(props) => props.theme.palette.backgroundColor.second};
    color: ${(props) => props.theme.palette.text.light};
    padding: 20px;
    border-radius: 20px;
    border: none;
    outline: none;
    margin-bottom: ${(props) => (props.isMargin ? "20px" : "")};

    option {
        color: ${(props) => props.theme.palette.text.light};
        background-color: ${(props) =>
            props.theme.palette.backgroundColor.second};
        border: none;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 0px 2px 1px;
    }
`;

const BoxBonus = styled.div`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
`;
export { SectionPay, CenterPay, TitlePay, BoxSelectPay, Select, BoxBonus };
