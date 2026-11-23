import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Company from './pages/Company'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'
import Social2 from './components/Social2'
import MiniIcon from './components/MiniIcon'
import Navbar from './components/Navbar'
import Hero from './components/Abdulaziz/Hero'
import Banner from './components/Abdulaziz/Banner'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
          <>
            <Navbar/>
            <Banner />
            <Hero />
            <Company />
            <Footer />
            <SocialMedia />
            <Social2 />
            <MiniIcon />
          </>
        }
      />
    </Routes>
  )
}

export default App