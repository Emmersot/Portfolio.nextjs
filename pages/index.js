import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import  Main  from '../components/Main'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tyler | Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Navbar/>
    <Main />
    <About/>
      
    </div>
  )
}
