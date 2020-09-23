import React from 'react';
import spiderMan from '../../assets/spiderMan.png';
import { Container, Image } from './styles';

export const PageNotExist = () => {
  return(
    <Container>
      <Image src={spiderMan} alt='Page not exist' />
      <h3>Page not exist</h3>
    </Container>
  )
}
