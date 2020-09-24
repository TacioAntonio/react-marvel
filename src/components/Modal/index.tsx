import { useEffect } from 'react';
import ReactDOM from "react-dom";
const modalRoot: HTMLElement | any = document.getElementById('modal-comics');

interface IProps {
  children: any,
}

export const Modal = (props: IProps) => {
  const el: HTMLDivElement = document.createElement('div');

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    }
  })

  return ReactDOM.createPortal(
    props.children,
    el
  )
}
