import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from "styled-components"
import reset from "styled-reset-advanced"

const GlobalStyle = createGlobalStyle`
  ${reset}
`

const App = (
  <>
    <GlobalStyle />
    <h1>Hello World</h1>
  </>
)

ReactDOM.render(App, document.getElementById('app'))
