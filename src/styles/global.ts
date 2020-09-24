import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    height: 100%;
    background: #1e1e1e;
    font-size: 100%;
    overflow-y:hidden;
    overflow-x:hidden;
  }

  #root {
    height: 100%;
  }

  #modal-comics {
    height: 100%;
  }

  #modal-comics > div {
    position: absolute;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    height: 100%;
  }

  #comics::-webkit-scrollbar {
    height: 12px;
  }

  #comics::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  #comics::-webkit-scrollbar-thumb {
    background-color: #0f0f0f;
    outline: 1px solid slategrey;
  }
`;
