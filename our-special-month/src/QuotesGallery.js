import React, { useState, useEffect } from 'react';
import './QuotesGallery.css'; // Make sure the CSS file is imported

const QuotesGallery = () => {
    const [visible, setVisible] = useState(false);
  const quotes = [
    "First things first you have such a pretty name <3",
    "Going from 'when can I see you' to 'when are you home' is my biggest goal with you...",
    "Princess, bangaram, yuvarani, beautiful, mine, angel, chitti, meri jaan, the list goes on I can never think of one singular word that describes every part of her", // Add your actual quotes
    "I miss you... I miss you :( I miss you too don't forget that <3",
    "And if you don't know this already, I'm incredibly proud of you",
  ];

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  return (
    <div className={`quotes-gallery ${visible ? 'visible' : ''}`}>
      {quotes.map((quote, index) => (
        <div key={index} className="quote-bubble">
          {quote}
        </div>
      ))}
    </div>
  );
};

export default QuotesGallery;