import React from 'react';
import { FormStyled, Input } from './styles';

interface IProp {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void,
  valueHero: string,
  changeNameHero: (event: React.FormEvent<HTMLInputElement>) => void,
}

export const Form = ({ onSubmit, valueHero, changeNameHero }: IProp) => {
  return (
    <FormStyled onSubmit={onSubmit}>
      <Input
        type="text"
        placeholder="Hero"
        value={valueHero}
        onChange={changeNameHero}
      />
    </FormStyled>
  )
}
