import React, { useEffect, useState } from 'react';
import "./wordAnimation.css"

const WordAnimation = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
        }, 5000); // Change word every second

        return () => clearInterval(interval); // Cleanup on unmount
    }, [words.length]);

    return (
        <div className='word-animation'>
            <h1 key={currentWordIndex}>{words[currentWordIndex]}</h1>
        </div>
    );
};

export default WordAnimation;
