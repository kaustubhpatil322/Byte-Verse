import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import EmotionalSpectrum from './components/EmotionalSpectrum/EmotionalSpectrum'
import HeroSection from './components/Hero/HeroSection'

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
    </div>
  )
}

export default App
