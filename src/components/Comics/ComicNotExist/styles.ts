import styled from 'styled-components';

export const LI = styled.li`
  font-size: 1em;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: #9a2b2b;
`;

export const Image = styled.img`
  width: 96px;
  height: 128px;

  @media(min-width: 575.98px) {
    width: 120px;
    height: 164px;
  }
`
