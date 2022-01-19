import styled from 'styled-components';

const StylBoxCategories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 55px 38px 25px;
  background-color: ${(props) => props.theme.palette.backgroundColor.primary};
  border-radius: 8px;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const StylTitleCategories = styled.h4`
  font-size: ${(props) => props.theme.typography.textMedium.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.second};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  text-transform: uppercase;
  margin-bottom: 48px;
`;

const StylListCategories = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StylItemCategories = styled.li`
  cursor: pointer;
  position: relative;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.second};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  transition: all 0.2s ease;

  & > img {
    top: 1px;
    margin-left: 5px;
    position: relative;
    visibility: hidden;
  }

  @media (min-width: 1024px) {
    &:hover {
      color: ${(props) => props.theme.palette.text.light};

      & > img {
        visibility: visible;
        animation: 0.5s ease-in doubleArrow;
      }
    }
  }

  @keyframes doubleArrow {
    0% {
      opacity: 0.2;
      left: 30px;
    }
    100% {
      opacity: 1;
      left: 0;
    }
  }
`;

export {
  StylBoxCategories,
  StylTitleCategories,
  StylListCategories,
  StylItemCategories,
};
