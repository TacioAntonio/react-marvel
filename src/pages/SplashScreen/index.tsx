import React from 'react';
import marvelLogo from '../../assets/MarvelLogo.png';
import { Container, Logo } from './styles';
import { redirect } from '../../hooks/redirect';

export function SplashScreen() {
  redirect(3, 'home');

  return (
    <Container>
      <Logo src={marvelLogo} alt="Logo da marvel" />
    </Container>
  );
}
