import type { NextPage } from 'next'
import { ConnectButton, useAccount } from '@web3modal/react'

const Home: NextPage = () => {
  const { isConnected } = useAccount();
  console.log(isConnected)
  return (
<ConnectButton />
  )
}

export default Home
