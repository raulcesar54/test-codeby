import { CartProvider } from 'context/cart'
import { AnimateSharedLayout } from 'framer-motion'
import type { AppProps } from 'next/app'
import { GlobalStyle } from 'styles/globalStyle'
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CartProvider>
        <AnimateSharedLayout type='crossfade'>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </CartProvider>
    </>
  )
}
export default MyApp
