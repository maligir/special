import React, { useState, useEffect } from 'react';
import './AnniversaryMessage.css'; // Import the CSS file

const AnniversaryMessage = () => {
  const [visible, setVisible] = useState(false); // Start invisible

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100); // Delay before starting the fade-in

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className={`anniversary-message ${visible ? 'visible' : ''}`}>
      Happy One Month Naa Bangaram
    </div>
  );
};

export default AnniversaryMessage;
