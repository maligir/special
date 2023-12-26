import React from 'react';
import './RainingHearts.css'; // Import the CSS for the hearts

const RainingHearts = () => {
  const numberOfHearts = 30; // Adjust the number of hearts as needed

  return (
    <div className="raining-hearts">
      {Array.from({ length: numberOfHearts }).map((_, index) => (
        <div key={index} className="heart" />
      ))}
    </div>
  );
};

export default RainingHearts;
