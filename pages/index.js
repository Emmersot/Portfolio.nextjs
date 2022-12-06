import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/ContactUs'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tyler Emmerson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact/> 
    </div>
  )
}
