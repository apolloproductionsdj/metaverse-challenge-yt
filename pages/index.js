import Head from 'next/head'
import Login from '../components/Login'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Metaverse Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the 5 Day Metaverse Challenge</h1>
      <Login />
    </div>
  )
}
