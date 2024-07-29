import React, { useState } from 'react';
import './FlipCard.css';

function FlipCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flip-card" onClick={handleClick}>
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          
        </div>
        <div className="flip-card-back">
            <p>{props.str}</p>
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
