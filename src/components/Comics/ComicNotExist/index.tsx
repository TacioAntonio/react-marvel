import React from 'react';
import { LI, Image } from './styles';
import deadpool from '../../../assets/deadpool.png';

export const ComicNotExist = () => {
  return(
    <LI>
      <Image src={deadpool} alt='Deadpool'/>
      <h2>Comics not exist</h2>
    </LI>
  )
};
