import React from 'react';
import { Container, ContainerImageName, Image, NameHero } from './styles';

interface IProp {
  name: string,
  description: string,
  thumbnail: string,
}

export const HeroItem = ({ name, description, thumbnail }: IProp) => {
  return(
    <Container>
      <ContainerImageName>
        <Image src={thumbnail} alt={name} />
        <NameHero>{name}</NameHero>
      </ContainerImageName>
      <p>{description}</p>
    </Container>
  )
}
