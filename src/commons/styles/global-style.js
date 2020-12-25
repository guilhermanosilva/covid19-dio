import { createGlobalStyle } from 'styled-components'
import covidImg from '../../assets/images/covid.png'

const GlobalStyle = createGlobalStyle`
  *{
    outline: none;
    box-sizing: border-box;
  }

  body{
    line-height: normal;
  }

  html, body{
    width: 100%;
    min-height: 100%;
    display: flex;
    padding: 0;
    margin: 0;
  }

  #root{
    height: 100%;
    width: 100%;
    background: whitesmoke;
    background: #dfdfdf;
  }

  .m-2{
    margin: 8px;
  }

  .mt-2{
    margin-top: 16px;
  }

  .cursor{
    cursor: pointer;
  }

  @media (max-width: 720px){
    #root{
    background: url(${covidImg});
    background-size: cover;
    background-position: center center;
    }
  }
`

export default GlobalStyle