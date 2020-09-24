import React, { useState } from 'react';
import api from '../../services/api';
import { Form } from '../../components/Form/index';
import { HeroItem } from '../../components/HeroItem/index';
import { HeroNotExist } from '../../components/HeroItem/HeroNotExist/index';
import { TS, HASH, API_KEY } from '../../config/permissionApi';

interface Hero {
  name: string,
  description: string,
  thumbnail: string,
  exist: boolean
}

export function Home() {
  const [hero, setHero] = useState<Hero>();
  const [valueHero, setValueHero] = useState<string>('');

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let name: string = '';
    let description : string = '';
    let thumbnail: string = '';
    let exist: boolean = false;

    const request = await api.get('/v1/public/characters', {
      params: {
          name: valueHero,
          ts: TS,
          hash: HASH,
          apikey: API_KEY
      }
    });

    if(request.data.data.results.length) {
      name = request.data.data.results[0].name;
      description = request.data.data.results[0].description;
      thumbnail = `${request.data.data.results[0].thumbnail.path}.${request.data.data.results[0].thumbnail.extension}`;
      exist = true;

      setHero({
        name,
        description,
        thumbnail,
        exist
      });

      return;
    }

    setHero({
      name,
      description,
      thumbnail,
      exist
    });
  }

  const changeNameHero = (e: React.FormEvent<HTMLInputElement>) => {
    setValueHero(e.currentTarget.value);
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        valueHero={valueHero}
        changeNameHero={changeNameHero}
      />
      {
        hero ?
        hero.exist ?
        <HeroItem
          name={hero.name}
          description={hero.description}
          thumbnail={hero.thumbnail}
        /> :
        <HeroNotExist/> :
        null
      }
    </>
  );
}


