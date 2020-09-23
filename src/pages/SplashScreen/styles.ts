import styled from 'styled-components';

export const Container = styled.div`
  background-color: #e70101;
  height: 100%;
`;


export const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 220px;

  @media(min-width: 575.98px) {
    max-width: 320px;
  }
`;
