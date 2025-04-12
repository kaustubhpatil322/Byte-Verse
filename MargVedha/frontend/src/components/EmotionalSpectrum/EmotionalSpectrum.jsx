import React, { useState, useEffect } from 'react';
import './EmotionalSpectrum.css';
import { auth } from '../../firebase';  // Firebase auth

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
  Fear: [
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
  const [uploadType, setUploadType] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [videoFile, setVideoFile] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);  // Set user when logged in
      } else {
        setUser(null);  // Clear user when logged out
      }
    });
    return () => unsubscribe();
  }, []);

  const hasUploadedMedia = uploadType === 'image' ? !!imageFile : uploadType === 'video' ? !!videoFile : false;

  const handleEmotionSelect = (emotion) => {
    if (hasUploadedMedia) {
      setSelectedEmotion(emotion);
    }
  };

  // Render image preview
  const renderImagePreview = () => {
    if (imageFile) {
      return <img src={URL.createObjectURL(imageFile)} alt="Preview" className="media-preview" />;
    }
    return null;
  };

  // Render video preview
  const renderVideoPreview = () => {
    if (videoFile) {
      return <video controls className="media-preview"><source src={URL.createObjectURL(videoFile)} type="video/mp4" /></video>;
    }
    return null;
  };

  return (
    <div className="container">
      <h1 className="title">RasaSetu | Complete Emotional Palette</h1>

      {/* Conditional message if user is not logged in */}
      {!user && (
        <div className="login-prompt">
          <p>Please log in to access the emotional spectrum.</p>
        </div>
      )}

      {/* Media Upload Toggle */}
      <div className="media-toggle">
        <label>
          <input
            type="radio"
            name="mediaType"
            value="image"
            checked={uploadType === 'image'}
            onChange={() => {
              setUploadType('image');
              setVideoFile(null); // clear other
            }}
            disabled={!user}
          />
          Upload Image
        </label>
        <label>
          <input
            type="radio"
            name="mediaType"
            value="video"
            checked={uploadType === 'video'}
            onChange={() => {
              setUploadType('video');
              setImageFile(null); // clear other
            }}
            disabled={!user}
          />
          Upload Video
        </label>
      </div>

      {/* Image Upload Section */}
      {uploadType === 'image' && (
        <div className="media-upload">
          <label>
            📷 Select Image:
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files[0])}
              disabled={!user}
            />
          </label>
          {renderImagePreview()}
        </div>
      )}

      {/* Video Upload Section */}
      {uploadType === 'video' && (
        <div className="media-upload">
          <label>
            🎥 Select Video:
            <input
              type="file"
              accept="video/*"
              onChange={(e) => setVideoFile(e.target.files[0])}
              disabled={!user}
            />
          </label>
          {renderVideoPreview()}
        </div>
      )}

      {/* Upload warning if no media is uploaded */}
      {!hasUploadedMedia && user && (
        <p className="upload-warning">⚠️ Please upload an image or video to proceed with selecting emotions.</p>
      )}

      {/* Category Tabs */}
      <div className="tabs">
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            className={`tab ${cat === activeCategory ? 'active' : ''}`}
            onClick={() => hasUploadedMedia && setActiveCategory(cat)}
            disabled={!hasUploadedMedia || !user}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Emotion Grid */}
      <div className="grid">
        {categories[activeCategory].map((emotion) => (
          <div
            key={emotion.name}
            className={`card ${selectedEmotion?.name === emotion.name ? 'selected' : ''} ${
              !hasUploadedMedia ? 'disabled' : ''
            }`}
            onClick={() => handleEmotionSelect(emotion)}
            disabled={!hasUploadedMedia || !user}
          >
            <i className={`${emotion.icon} icon`}></i>
            <span>{emotion.name}</span>
          </div>
        ))}
      </div>

      {/* Journal Entry */}
      <div className="journal">
        <textarea
          placeholder="Describe your mood in your own words..."
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          disabled={!user || !hasUploadedMedia}
        />
        <button
          className="submit"
          disabled={!user || !hasUploadedMedia || !selectedEmotion}
          onClick={() => {
            console.log('Selected Emotion:', selectedEmotion?.name);
            console.log('Journal Entry:', journalEntry);
            console.log('Image:', imageFile);
            console.log('Video:', videoFile);
          }}
        >
          Submit Feelings
        </button>
      </div>
    </div>
  );
};

export default EmotionalSpectrum;
