import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: #9a2b2b;

  @media(min-width: 575.98px) {
    font-size: 2em;
  }
`

export const Image = styled.img`
  width: 164px;
  height: 164px;

  @media(min-width: 575.98px) {
    width: 220px;
    height: 220px;
  }
`
