import React from 'react';
import marvelLogo from '../../assets/MarvelLogo.png';
import { Logo } from './styles';

export function SplashScreen() {

  return (
    <>
      <Logo
        src={marvelLogo}
        alt="Logo da marvel"
      />
    </>
  );
}
