import React, { useState } from 'react';
import api from '../../services/api';
// import useAsyncEffect from 'use-async-effect';
import { Form } from '../../components/Form/index';
import { HeroItem } from '../../components/HeroItem/index';
import { HeroNotExist } from '../../components/HeroNotExist/index';

interface Hero {
  name: string,
  description: string,
  thumbnail: string,
  exist: boolean
}

export function Home() {
  const [hero, setHero] = useState<Hero>();
  const [valueHero, setValueHero] = useState('');

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let name: string = '';
    let description : string = '';
    let thumbnail: string = '';
    let exist: boolean = false;

    // ENV
    const request = await api.get('/v1/public/characters', {
      params: {
          name: valueHero,
          ts: '1600731265805',
          hash: '4609a9aad0fda6080fcc594861710bfc',
          apikey: 'd01bdc5ca7cbca17fc317db4bda37e2b'
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


