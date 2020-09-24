import styled from 'styled-components';

export const FormStyled = styled.form`
  color: red;
  background: #db3833;
  padding: 12px;
  position: relative;
  z-index: 1;

  @media(min-width: 575.98px) {
    display: flex;
    justify-content: center;
    margin: 0 32px;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

export const Input = styled.input`
  background: #ba312b;
  width: 100%;
  border: none;
  padding: 6px;
  border-radius: 3px;
  color: #781f1b;

  ::placeholder {
    color: #a12924;
    opacity: 1;
  }

  @media(min-width: 575.98px) {
    max-width: 320px;
    padding: 12px;
  }
`;
