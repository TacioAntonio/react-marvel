import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { Home } from '../pages/Homepage/index';

describe('Tests for HeroItem component', () => {
  it('Should find the hero and get thumbnail, name and description', async () => {
    const { getByTestId } = render(<Home/>);
    const heroInput = await waitFor(() => getByTestId('heroInput'))
    const thumbnail = 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg';
    const name = 'Thor';
    const description = "As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.";

    fireEvent.change(heroInput, {
      target: {
        value: name
      }
    });

    expect(heroInput.value).toEqual(name);

    fireEvent.submit(heroInput);

    const heroThumbnail = await waitFor(() => getByTestId('heroThumbnail'))
    expect(heroThumbnail.src).toEqual(thumbnail);

    const heroName = await waitFor(() => getByTestId('heroName'))
    expect(heroName.textContent).toEqual(name);

    const heroDescription = await waitFor(() => getByTestId('heroDescription'))
    expect(heroDescription.textContent).toEqual(description);
  });

  it('Should find the hero and get thumbnail and name', async () => {
    const { getByTestId } = render(<Home/>);
    const heroInput = await waitFor(() => getByTestId('heroInput'))
    const thumbnail = 'http://i.annihil.us/u/prod/marvel/i/mg/3/00/539a06a64b262.jpg';
    const name = 'Odin';
    const description = '';

    fireEvent.change(heroInput, {
      target: {
        value: name
      }
    });

    expect(heroInput.value).toEqual(name);

    fireEvent.submit(heroInput);

    const heroThumbnail = await waitFor(() => getByTestId('heroThumbnail'))
    expect(heroThumbnail.src).toEqual(thumbnail);

    const heroName = await waitFor(() => getByTestId('heroName'))
    expect(heroName.textContent).toEqual(name);

    const heroDescription = await waitFor(() => getByTestId('heroDescription'))
    expect(heroDescription.textContent).toEqual(description);
  });

  it('Should find the hero and get hero not exist', async () => {
    const { getByTestId } = render(<Home/>);
    const heroInput = await waitFor(() => getByTestId('heroInput'))
    const thumbnail = 'http://localhost/Hero.png';
    const name = 'Batman';
    const description = 'Hero not exist';

    fireEvent.change(heroInput, {
      target: {
        value: name
      }
    });

    expect(heroInput.value).toEqual(name);

    fireEvent.submit(heroInput);

    const heroNotExistThumbnail = await waitFor(() => getByTestId('heroNotExistThumbnail'))
    expect(heroNotExistThumbnail.src).toEqual(thumbnail);

    const heroNotExistDescription = await waitFor(() => getByTestId('heroNotExistDescription'))
    expect(heroNotExistDescription.textContent).toEqual(description);
  });
});
