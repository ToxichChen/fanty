import styled from "styled-components";

const StylBoxContainerMaxWidth = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    z-index: 2;
`;

const StylBoxFlexColumnSpaceBetween = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
`;

const StylBoxFlexRowSpaceBetween = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
`;

const StylBoxFlexColumnCenter = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

const StylBoxFlexColumnFlexStart = styled.div`
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    z-index: 10;
`;

const StylBoxFlexRowFlexStart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
`;

const StylBoxFlexRowFlexEnd = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: flex-end;
`;

export {
    StylBoxContainerMaxWidth,
    StylBoxFlexColumnSpaceBetween,
    StylBoxFlexRowSpaceBetween,
    StylBoxFlexColumnCenter,
    StylBoxFlexColumnFlexStart,
    StylBoxFlexRowFlexEnd,
    StylBoxFlexRowFlexStart,
};
