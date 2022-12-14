import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-touch-callout:none;
    -webkit-user-select:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    font-size: 0.9rem;
  }
  @font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'GmarketSansLight';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  body {
    width: 100%;
    height: 100vh;
    margin : 10;
    overflow-y: scroll;
    display: flex;
    //align-items: center;
    justify-content: center;
    background-color: #FFF;
    font-weight: 500;
    font-family: 'GmarketSansMedium';
  }

  @media only screen and (max-width: 359px) and (min-width:200px) { //375px 너무 작아서 수정했음
    .App {
      width: 375px;
      height: 100vh;
      font-family: 'GmarketSansMedium';
      color: #FFF;
    }
  }
  @media only screen and (min-width: 360px) {
    .App {
      width: 375px;
      height: 100vh;
      font-family: 'GmarketSansMedium';
      color: #FFF;
      & > {
        float: left;
      }
    }
  }

`;
