import React, { useState, useRef, useEffect } from 'react';
import CountdownTimer from './CountdownTimer';
import AnniversaryMessage from './AnniversaryMessage';
import RainingHearts from './RainingHearts'; // Import the new component
import './App.css';
import PhotoGallery from './PhotoGallery';
import QuotesGallery from './QuotesGallery'; // Import the new component


const App = () => {
  const [timerComplete, setTimerComplete] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (timerComplete) {
      audioRef.current.play();
    }
  }, [timerComplete]);

  const handleTimerComplete = () => {
    setTimerComplete(true);
  };

  return (
    <div className="app">
      <audio ref={audioRef} src="nenu.mp3" loop /> {/* Loop attribute added here */}
      {!timerComplete ? (
        <CountdownTimer onTimerComplete={handleTimerComplete} />
        ) : (
          <>
            <RainingHearts />
            <PhotoGallery />
            <AnniversaryMessage />
            <QuotesGallery />
          </>
        )}
    </div>
  );
};

export default App;
