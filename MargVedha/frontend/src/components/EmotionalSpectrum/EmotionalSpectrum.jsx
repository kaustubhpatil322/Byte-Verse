import React, { useState } from 'react';
import './EmotionalSpectrum.css';

const categories = {
  Happiness: [
    { name: 'Joy', icon: 'fas fa-smile-beam' },
    { name: 'Gratitude', icon: 'fas fa-hands' },
    { name: 'Serenity', icon: 'fas fa-dove' },
    { name: 'Elation', icon: 'fas fa-grin-stars' }
  ],
  Sadness: [
    { name: 'Grief', icon: 'fas fa-heart-broken' },
    { name: 'Disappointment', icon: 'fas fa-frown' },
    { name: 'Loneliness', icon: 'fas fa-user-slash' },
    { name: 'Melancholy', icon: 'fas fa-cloud-rain' }
  ],
  Anger: [
    { name: 'Frustration', icon: 'fas fa-bolt' },
    { name: 'Resentment', icon: 'fas fa-skull-crossbones' },
    { name: 'Irritation', icon: 'fas fa-exclamation-circle' },
    { name: 'Rage', icon: 'fas fa-fire' }
  ],
  Calm: [
    { name: 'Peace', icon: 'fas fa-seedling' },
    { name: 'Contentment', icon: 'fas fa-coffee' },
    { name: 'Balance', icon: 'fas fa-balance-scale' },
    { name: 'Tranquility', icon: 'fas fa-water' }
  ]
};

const EmotionalSpectrum = () => {
  const [activeCategory, setActiveCategory] = useState('Happiness');
  const [selectedEmotion, setSelectedEmotion] = useState(null);
  const [journalEntry, setJournalEntry] = useState('');

  const handleEmotionSelect = (emotion) => {
    setSelectedEmotion(emotion);
  };

  return (
    <div className="container">
      <h1 className="title">MoodMuse | Complete Emotional Palette</h1>

      <div className="tabs">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`tab ${cat === activeCategory ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid">
        {categories[activeCategory].map((emotion) => (
          <div
            key={emotion.name}
            className={`card ${selectedEmotion?.name === emotion.name ? 'selected' : ''}`}
            onClick={() => handleEmotionSelect(emotion)}
          >
            <i className={`${emotion.icon} icon`}></i>
            <span>{emotion.name}</span>
          </div>
        ))}
      </div>

      <div className="journal">
        <textarea
          placeholder="Describe your mood in your own words..."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
        />
        <button
          className="submit"
          onClick={() => {
            console.log('Selected Emotion:', selectedEmotion?.name);
            console.log('Journal Entry:', journalEntry);
          }}
        >
          Receive Bespoke Content
        </button>
      </div>
    </div>
  );
};

export default EmotionalSpectrum;
