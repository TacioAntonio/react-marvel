import React from 'react';
import { Container, ComicsContainer, CloseButton } from './styles';
import { Comic } from './Comic/index';

interface IComics {
  title: string,
  thumbnail: string,
  url: string,
}

interface IProp {
  comicsHero: IComics[]
  onClick: () => void,
}

export const Comics = ({ comicsHero, onClick }: IProp) => {
  return(
    <Container>
      <ComicsContainer id="comics">
        <Comic comicsHero={comicsHero}/>
      </ComicsContainer>
      <CloseButton onClick={onClick}>X</CloseButton>
    </Container>
  )
}
