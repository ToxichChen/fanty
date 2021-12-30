import styled from 'styled-components';

const StylCenterBoxGradientForm = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(
    ${(props) => props.theme.palette.backgroundGradien.primary}
  );
`;

export default StylCenterBoxGradientForm;
