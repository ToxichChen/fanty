import styled from 'styled-components';

const StylFormLogin = styled.form`
  position: relative;
  width: 100%;
  padding: 30px;
  top: 20px;
  min-height: calc(100vh - 20px);

  background-image: linear-gradient(
    ${(props) => props.theme.palette.backgroundGradien.main}
  );

  @media (min-width: 768px) {
    max-width: 450px;
    position: absolute;
    min-height: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-right: -50%;
  }

  border-radius: 8px;
`;

export default StylFormLogin;
