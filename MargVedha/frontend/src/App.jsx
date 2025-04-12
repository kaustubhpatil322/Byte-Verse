import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import EmotionalSpectrum from './components/EmotionalSpectrum/EmotionalSpectrum';
import HeroSection from './components/Hero/HeroSection';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ExpressMode from './components/ExpressMode/ExpressMode';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <Routes>
          {/* Home page with Hero Section and Emotional Spectrum */}
          <Route path="/" element={<><HeroSection /> <br /> <EmotionalSpectrum /></>} />

          {/* Express Mode Page */}
          <Route path="/express-mode" element={<ExpressMode />} />

          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <br />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
