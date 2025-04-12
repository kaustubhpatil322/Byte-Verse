import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import EmotionalSpectrum from './components/EmotionalSpectrum/EmotionalSpectrum'
import HeroSection from './components/Hero/HeroSection'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'

const App = () => {
  return (
    <div>
      <Navbar />
      <br />
      <HeroSection />
      <br />
      <EmotionalSpectrum />
      <br />
      <Footer />
      <br />
      <Login />
      <br />
      <Signup />
    </div>
  )
}

export default App
