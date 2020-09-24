import React from 'react';
import { UL, Image } from '../styles';
import { ComicNotExist } from '../ComicNotExist/index';

interface IComics {
  title: string,
  thumbnail: string,
  url: string,
}

interface IProp {
  comicsHero: IComics[]
}

export const Comic = ({ comicsHero }: IProp) => {
  return (
    <UL>
        {
          comicsHero.length > 0 ? comicsHero.map(({ title, thumbnail, url }: IComics, i: number) => {
            return (
              <li key={i} >
                <a href={url} target="_blank">
                  <Image src={thumbnail} alt={title} />
                </a>
              </li>
            )
          }) : <ComicNotExist/>
        }
    </UL>
  )
}

