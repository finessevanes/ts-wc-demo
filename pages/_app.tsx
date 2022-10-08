import '../styles/globals.css'
import type { AppProps } from 'next/app'
import type { ConfigOptions } from '@web3modal/react'
import { Web3Modal } from '@web3modal/react'



const config: ConfigOptions = {
  projectId: '9338b83ff89083cd0ee7da8cea475c23',
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'web3Modal'
  }
}


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
  <Component {...pageProps} />
  <Web3Modal config={config} />
  </>)
}

export default MyApp
