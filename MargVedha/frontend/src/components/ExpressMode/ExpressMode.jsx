import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ExpressMode.css';

const ExpressMode = () => {
  const [quote, setQuote] = useState('');
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingState, setBreathingState] = useState(false); // To control breathing animation state

  // Sample motivational quotes
  const quotes = [
    "Believe in yourself and all that you are.",
    "You are stronger than you think.",
    "Take it one step at a time.",
    "You are capable of amazing things.",
    "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change."
  ];

  useEffect(() => {
    // Select a random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }, []);

  const handleBreathingCycle = () => {
    if (isBreathing) {
      setIsBreathing(false); // Stop breathing exercise
      setBreathingState(false); // Reset animation
    } else {
      setIsBreathing(true); // Start breathing exercise
      setBreathingState(true); // Start breathing animation
      setTimeout(() => {
        setIsBreathing(false);
        setBreathingState(false); // Stop animation after the cycle
      }, 18000); // 18 seconds cycle
    }
  };

  return (
    <div className="express-mode-container">
      <div className="express-mode-content">
        <h2>Express Mode: Relax and Breathe</h2>

        <div className="breathing-container">
          <motion.div
            className={`breathing-circle ${breathingState ? 'breathing' : ''}`}
            animate={{ scale: breathingState ? [1, 1.5, 1] : 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
          />
          <div className="breathing-steps">
            <p>{isBreathing ? "Breathe In..." : "Click to Start Breathing"}</p>
            <button onClick={handleBreathingCycle}>
              {isBreathing ? "Stop Breathing Exercise" : "Start Breathing Exercise"}
            </button>
          </div>
        </div>

        <div className="motivational-quote">
          <p>"{quote}"</p>
        </div>

        <div className="additional-resources">
          <h3>Guided Breathing and Relaxation</h3>
          <p>Check out these resources to help you relax:</p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=I77hh5I69gA" target="_blank" rel="noopener noreferrer">Guided Breathing Video</a></li>
            <li><a href="https://open.spotify.com/playlist/6uaZZTHVsbAWGDR9eNhuos" target="_blank" rel="noopener noreferrer">Relaxing Music Playlist</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpressMode;
