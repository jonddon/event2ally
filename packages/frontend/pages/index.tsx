import type { NextPage } from 'next'
import Head from 'next/head'
import HomePage from '@views/home'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Event2Ally </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <HomePage />
    </div>
  )
}

export default Home
