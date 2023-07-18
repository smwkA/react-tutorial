import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset-advanced";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const App = (
  <>
    <GlobalStyle />
    <Header />
    <Main />
    <Footer />
  </>
);

ReactDOM.render(App, document.getElementById('app'))
