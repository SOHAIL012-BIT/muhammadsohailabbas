import React, { useEffect, useState } from 'react';

const Typewriter = ({ titles }) => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [typing, setTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

 



  useEffect(() => {
    const timer = setTimeout(() => {
      if (typing) {
        // Typing phase
        if (currentIndex < titles[currentTitleIndex].length) {
          setDisplayText((prevText) => prevText + titles[currentTitleIndex][currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          // Switch to deleting phase
          setTimeout(function() {
              setTyping(false);
              setCurrentIndex(titles[currentTitleIndex].length - 1);   
        }, 3000); 
        }
      } else {
        // Deleting phase
        if (currentIndex >= 0) {
          
          setDisplayText((prevText) => prevText.slice(0, -1));
          setCurrentIndex((prevIndex) => prevIndex - 1);
        } else {
          // Switch to next title
          setTyping(true);
          setCurrentIndex(0);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setDisplayText('');
        }
      }
    }, 200); 

    return () => clearTimeout(timer);
  }, [currentIndex, titles, currentTitleIndex, typing]);

  return (
    <div style={{height:"5rem"}}>
        
        <h5 className="titleLine">{displayText}
        <span className='cursorblink'>|</span>
        </h5>
    </div>
  )
};

export default Typewriter;
