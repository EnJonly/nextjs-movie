// import theme from '../../chakra'
// 1. Import the extendTheme function
import {
  ChakraProvider,
  CSSReset,
  extendTheme,
  withDefaultSize,
  withDefaultColorScheme 
} from '@chakra-ui/react'
// 2. Extend the theme to include custom colors, fonts, etc
const styles = {
  global: props => ({
    body: {
      fontSize: '12px'
    }
  })
}
const theme = extendTheme(
  {
    styles
  },
  withDefaultSize({
    size: 'xs',
    components: ['Button'],
  }),
  withDefaultColorScheme({
    colorScheme: 'transparent',
    components: ['Button'],
  })
)

// console.log(theme)

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
    <CSSReset />
    <Component {...pageProps} />
  </ChakraProvider>
}
