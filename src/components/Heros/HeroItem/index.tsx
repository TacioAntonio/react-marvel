import React, { useState } from 'react';
import { Container, ContainerImageName, Image, NameHero, ComicsButton } from './styles';
import { Modal } from '../../Modal/index';
import { Comics } from '../../Comics/index';
import api from '../../../services/api';
import { TS, HASH, API_KEY } from '../../../config/permissionApi';

interface IProp {
  name: string,
  description: string,
  thumbnail: string,
}

interface IComics {
  title: string,
  thumbnail: string,
  url: string,
}

interface IThumbnail {
  path: string,
  extension: string
}

interface IUrlComics {
  url: string;
}

interface IEventComics {
  title: string,
  thumbnail: IThumbnail,
  urls: IUrlComics[]
}

export const HeroItem = ({ name, description, thumbnail }: IProp) => {
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [comicsHero, setComicsHero] = useState<IComics[]>([]);

  const getComics = async () => {
    let request = await api.get('/v1/public/comics', {
      params: {
          title: name,
          ts: TS,
          hash: HASH,
          apikey: API_KEY,
          limit: 20
      }
    });

    const comics = request.data.data.results.map((e: IEventComics) => {
      return ({
        title: `${e.title}`,
        thumbnail: `${e.thumbnail.path}.${e.thumbnail.extension}`,
        url: `${e.urls[0].url}`
      });
    })

    setComicsHero(comics);
    handleToggleModal();
  }

  function handleToggleModal() {
    setToggleModal(!toggleModal)
  }

  return(
    <Container>
      <ContainerImageName>
        <Image data-testid="heroThumbnail" src={thumbnail} alt={name} />
        <NameHero data-testid="heroName">{name}</NameHero>
      </ContainerImageName>
      <p data-testid="heroDescription">{description}</p>

      <ComicsButton
        data-testid="comicsButton"
        onClick={getComics}
      >
        Comics
      </ComicsButton>

      {
        toggleModal ?
        <Modal>
          <Comics
            comicsHero={comicsHero}
            onClick={handleToggleModal}
          />
        </Modal> :
        null
      }
    </Container>
  )
}
