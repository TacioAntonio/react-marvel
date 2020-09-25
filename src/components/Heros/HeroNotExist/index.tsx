import React from 'react';
import Hero from '../../../assets/Hero.png';
import { Container, Image } from './styles';

export const HeroNotExist = () => {
  return(
    <Container>
      <Image src={Hero} alt={'Hero not exist'}  />
      <h3>Hero not exist</h3>
    </Container>
  )
}
