import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: #9a2b2b;

  @media(min-width: 575.98px) {
    font-size: 2em;
  }
`

export const Image = styled.img`
  width: 96px;
  height: 96px;

  @media(min-width: 575.98px) {
    width: 120px;
    height: 120px;
  }
`
