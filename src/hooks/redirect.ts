import { useEffect } from 'react';

export const redirect = (timeMsToRedirect: number, path: string) => {
  const url = document.location.href.split('/').slice(0, 3).join('/');

  useEffect(() => {
    setTimeout(() => {
      window.location.href = `${url}/${path}`;
    }, timeMsToRedirect * 1000)
  });
}
