import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import NextProgressBar from 'nextjs-progressbar'

const theme = extendTheme({
  styles: {
    global: {
      'html': {
        scrollBehavior: 'smooth',
      }
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextProgressBar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
