import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import AboutMe from './components/about'
import Project from './components/project'
import WorkWithMe from './components/work'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-bgImage bg-cover bg-center h-screen  overflow-x-hidden '>
        <div className='z-50'>
        <Navbar/>
        <Hero/>
        <AboutMe/>
        <Project/>
        <WorkWithMe/>
        <Contact/>
        
        </div>
      </div>
    </>
  )
}

export default App
