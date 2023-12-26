import React, { useState } from 'react';
import Countdown from 'react-countdown';
import './CountdownTimer.css';

const CountdownTimer = ({ onTimerComplete }) => {
  const [fade, setFade] = useState(false);

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Trigger fade-out only once when the timer completes
      if (!fade) {
        setFade(true);
        setTimeout(onTimerComplete, 2000); // Delay the onTimerComplete call by 2 seconds (or your fade-out duration)
      }
      // Keep the display at 0
      days = hours = minutes = seconds = 0;
    }

    return (
      <div className={`countdown-display ${fade ? 'fade-out' : ''}`}>
        <div className="time-section">{days}<span className="time-label">Days</span></div>
        <div className="time-section">{hours}<span className="time-label">Hours</span></div>
        <div className="time-section">{minutes}<span className="time-label">Minutes</span></div>
        <div className="time-section">{seconds}<span className="time-label">Seconds</span></div>
      </div>
    );
  };

  const targetDate = new Date('2023-12-26T05:00:00.000Z');
  return (
    <Countdown 
      date={targetDate} 
      renderer={renderer}
    />
  );
};

export default CountdownTimer;
