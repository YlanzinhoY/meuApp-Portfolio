import { View } from "react-native";
import { Groups } from "./src/screens/Groups/index";

import { ThemeProvider } from "styled-components";

import theme from "./src/theme/index";



export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  )
}

