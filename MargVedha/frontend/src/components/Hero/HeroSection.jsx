import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MoodMuse</h1>
          <p className="hero-subtitle">
            Your personal guide to emotional clarity and content therapy. Track your feelings, reflect deeply, and get content that heals.
          </p>
          <a href="#start" className="hero-button">Start Your Journey</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
