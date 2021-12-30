import styled from 'styled-components';

const StylComplexityList = styled.ul`
  max-width: 1140px;
  width: 100%;
  list-style: none;
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StylComplexityItem = styled.li`
  cursor: pointer;
  position: relative;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 5px rgb(0 0 0 / 50%);
  transition: all 0.2s ease;

  margin-bottom: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0);
    & > h2 {
      background-color: rgba(0, 0, 0, 0.6);
    }
  }

  &:nth-child(2n) {
    @media (min-width: 768px) {
      top: -50px;
    }
  }

  @media (min-width: 768px) {
    max-width: 200px;
  }

  @media (min-width: 1024px) {
    max-width: 260px;
  }

  @media (min-width: 1200px) {
    max-width: 320px;
  }
`;

const StylTitleComplexity = styled.h2`
  padding: 30px 20px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  font-size: ${(props) => props.theme.typography.textLarge.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) =>
    props.isComplexity === 'green'
      ? '#449D44'
      : props.isComplexity === 'red'
      ? props.theme.palette.error.text
      : '#ffb732'};
  text-align: center;
  text-transform: uppercase;
  transition: all 0.2s ease;
`;

const StylTextTypeComplexity = styled.p`
  width: 100%;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.main};
  text-align: center;
  padding: 20px 0;
`;

export {
  StylComplexityList,
  StylComplexityItem,
  StylTitleComplexity,
  StylTextTypeComplexity,
};
