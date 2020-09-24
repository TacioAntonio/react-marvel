import styled from 'styled-components';

export const Container = styled.div`
  font-size: 1em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100%;
  color: white;
  padding: 0 12px;

  p {
    padding-bottom: 12px;
  }

  @media(min-width: 575.98px) {
    p {
      width: 66ch;
      font-size: 1.2em;
    }
  }
`

export const ContainerImageName = styled.span`
  position: relative;
`;

export const Image = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 24px;
  padding-bottom: 12px;
`

export const NameHero = styled.h2`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -50%);
    text-shadow: 2px 2px black;
    text-overflow: ellipsis;
    width: 3em;
    overflow: hidden;
    font-size: 2em;
`;

export const ComicsButton = styled.button`
  background-color: #f44336;
  border: #f44336;
  border-radius: 12px;
  padding: 6px 12px;
  color: white;

  @media(min-width: 575.98px) {
      font-size: 1.2em;
      padding: 6px 12px;
      cursor: pointer;
  }
`;
