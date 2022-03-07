import styled from "styled-components";

const SectionPolitics = styled.section`
    background-color: rgba(52, 22, 75, 0.8);
    min-height: 100vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 768px) {
        padding: 20px;
    }
`;

const CenterPolitics = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

const ShortText = styled.p`
    margin-top: 20px;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    margin-bottom: 20px;
`;

const ListRules = styled.ol`
    list-style: none;
    counter-reset: li;
    margin-bottom: 10px;
`;

const ItemRule = styled.li`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    margin-bottom: 10px;
    padding-left: 10px;

    &:before {
        counter-increment: li;
        content: counters(li, ".") ". ";
        font-size: ${(props) => props.theme.typography.textMedium.main};
        color: ${(props) => props.theme.palette.text.light};
        opacity: 0.5;
    }
`;

const LinkEdit = styled.a`
    cursor: pointer;
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.primary};
    margin-left: 5px;
    transition: all 0.2s ease;

    @media (min-width: 1024px) {
        &:hover {
            color: ${(props) => props.theme.palette.text.light};
        }
    }
`;

const DataPublic = styled.p`
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-weight: ${(props) => props.theme.typography.textWeigth.main};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.text.light};
    text-align: center;
`;

export {
    SectionPolitics,
    ShortText,
    ListRules,
    ItemRule,
    LinkEdit,
    DataPublic,
    CenterPolitics,
};
