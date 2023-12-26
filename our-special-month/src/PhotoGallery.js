import React, { useState, useEffect } from 'react';
import './PhotoGallery.css';

const PhotoGallery = () => {
  const [visible, setVisible] = useState(false);
  const images = ['funny.jpeg', 'cute.JPG', 'pretty.jpeg', 'yes.png', 'hot.JPG'];

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  return (
    <div className={`photo-gallery ${visible ? 'visible' : ''}`}>
      {images.map((src, index) => (
        <div key={index} className="photo-frame">
          <img src={src} alt={`Gallery ${index}`} className="gallery-photo" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
