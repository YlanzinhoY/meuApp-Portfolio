import * as React from 'react'

import { Competencias} from "./src/screens/Competencias/index";
import { Main } from './src/screens/Main/index'

import { ThemeProvider } from "styled-components";
import theme from "./src/theme/index";


export default function App() {

  return (
    <ThemeProvider theme={theme}>
        <Competencias textMain="Minha stack"/>
    </ThemeProvider> 
  )
}

