import React from 'react';
import { PageNotExist } from '../../components/PageNotExist/index';
import { redirect } from '../../hooks/redirect';

export const Error404 = () => {
  redirect(3, 'home');

  return(
    <>
      <PageNotExist />
    </>
  )
}
