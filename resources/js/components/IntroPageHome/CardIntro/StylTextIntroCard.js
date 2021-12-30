import styled from 'styled-components';
import { StylDateIntroCard } from '..';

const StylTextIntroCard = styled(StylDateIntroCard)`
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  color: ${(props) => props.theme.palette.text.main};
  line-height: 1.6;
  margin-bottom: 35px;
`;

export default StylTextIntroCard;
