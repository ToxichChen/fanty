import styled from 'styled-components';

const StylTrendBox = styled.article`
  display: flex;
  flex-direction: row;
  margin-bottom: 38px;

  max-width: 600px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 260px;
  }
`;

const StylImgTrend = styled.img`
  max-width: 80px;
  max-height: 80px;
  border-radius: 8px;
  margin-right: 20px;
`;

const StylDataTrend = styled.p`
  font-size: ${(props) => props.theme.typography.textSmall.main};
  font-weight: ${(props) => props.theme.typography.textWeigth.main};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.main};
  margin-bottom: 7px;
`;

const StylTitleTrend = styled.h4`
  font-size: 18px;
  font-weight: ${(props) => props.theme.typography.textWeigth.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  color: ${(props) => props.theme.palette.text.light};
  line-height: 1.5;
`;

const StylBoxInfo = styled.div``;

export {
  StylTrendBox,
  StylImgTrend,
  StylDataTrend,
  StylBoxInfo,
  StylTitleTrend,
};
