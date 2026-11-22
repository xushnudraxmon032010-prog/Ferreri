import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Company from './pages/Company'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'
import Social2 from './components/Social2'
import MiniIcon from './components/MiniIcon'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
          <>
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