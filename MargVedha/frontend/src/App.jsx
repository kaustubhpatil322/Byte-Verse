import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import EmotionalSpectrum from './components/EmotionalSpectrum/EmotionalSpectrum';
import HeroSection from './components/Hero/HeroSection';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import ExpressMode from './components/ExpressMode/ExpressMode';
import MoodSelector from './components/MoodSelector/MoodSelector'; 
import Journal from './components/Journal/Journal';
import Profile from './components/Profile/Profile'; // ✅ NEW: Import Profile

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <br />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<><HeroSection /> <br /> <EmotionalSpectrum /></>} />

          {/* Login & Signup */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Mood Selector Page */}
          <Route path="/mood" element={<MoodSelector />} />

          {/* Express Mode Page */}
          <Route path="/express-mode" element={<ExpressMode />} />

          {/* Journal Page */}
          <Route path="/journal" element={<Journal />} />

          {/* ✅ Profile Page Route */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <br />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
