import styled from 'styled-components';

const StylInputForm = styled.input`
  position: relative;
  border: none;
  outline: none;
  max-height: 58px;
  width: 100%;
  padding: 20px 26px 20px 64px;
  background-color: transparent;
  border-bottom: 2px solid
    ${(props) =>
      props.err
        ? `${props.theme.palette.error.border} !important`
        : props.theme.palette.border.main};
  transition: all 0.2s ease;
  font-size: ${(props) => props.theme.typography.textSmall.primary};
  font-family: ${(props) => props.theme.typography.textFamily.main};
  font-weight: 400;
  color: ${(props) => props.theme.palette.main};

  ::placeholder {
    font-size: ${(props) => props.theme.typography.textSmall.primary};
    font-family: ${(props) => props.theme.typography.textFamily.main};
    color: ${(props) => props.theme.palette.main};
  }

  &:focus {
    border-color: ${(props) => props.theme.palette.backgroundBtn.main};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.typography.textMedium.main};

    ::placeholder {
      font-size: ${(props) => props.theme.typography.textMedium.main};
    }

    &:hover {
      border-color: ${(props) => props.theme.palette.backgroundBtn.main};
    }
  }
`;

export default StylInputForm;
