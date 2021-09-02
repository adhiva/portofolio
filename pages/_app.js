// 1. import `ChakraProvider` component
import { ChakraProvider, ColorModeProvider, useColorMode } from "@chakra-ui/react"
import customTheme from "../styles/theme"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode:"light",
          useSystemColorMode:true,
        }}>
      </ColorModeProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
