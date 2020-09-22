import React, { useEffect } from 'react';
import marvelLogo from '../../assets/MarvelLogo.png';
import { Logo } from './styles';

export function SplashScreen() {
  const timeSplashScreen = 3;

  useEffect(() => {
    setTimeout(() => {
      window.location.href = `${document.location.href}home`;
    }, timeSplashScreen * 1000)
  });

  return <Logo src={marvelLogo} alt="Logo da marvel" />;
}
