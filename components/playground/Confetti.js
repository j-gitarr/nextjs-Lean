import React from 'react';
import Confetti from 'react-confetti';


const ConfettiComponent = ({ active }) => {
  return( 
    <div className="confettiContainer">
        {active && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            initialVelocityY={5}
            initialY={0}
            key={Date.now()}
          />
        )}

    </div>
  )
};

export default ConfettiComponent;
