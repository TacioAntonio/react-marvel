import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  padding: 12px;
  background-color: #1e1e1e;
  width: 100%;
  min-height: 128px;
`;

export const ComicsContainer = styled.div`
  overflow-x: scroll;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  color: white;
  border-radius: 50px;
  padding: 12px;
  background: #1c1923de;
  border-color: #1c1923de;
  margin: 6px;
  cursor: pointer;
`;

export const UL = styled.ul`
  display: flex;
  list-style-type: none;
`;

export const Image = styled.img`
  margin-right: 12px;
  width: 128px;
  height: 196px;
`;
