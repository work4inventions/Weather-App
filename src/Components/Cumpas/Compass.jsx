import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import './Compass.css';

const Compass = ({ weather }) => {
  const [direction, setDirection] = React.useState(0);
  const [localSpeed, setLocalSpeed] = React.useState(0);

  React.useEffect(() => {
    if (weather && weather.speed) {
      setLocalSpeed(weather.speed);
    }
    
    // You might want to use weather's wind direction instead of random direction
    const updateCompass = () => {
      const newDirection = Math.floor(Math.random() * 360);
      setDirection(newDirection);
    };

    // Update direction every second
    const intervalId = setInterval(updateCompass, 1000);

    return () => clearInterval(intervalId);
  }, [weather]);

  const props = useSpring({ transform: `rotate(${direction}deg)` });

  return (
    <div className="compass-container">
      <div className="compass">
        <animated.div
          className="needle"
          style={props}
        >
          <FaArrowUp />
        </animated.div>
      </div>
      <div className="speed">
        <h2>Speed</h2>
        <p>{localSpeed} km/h</p>
      </div>
    </div>
  );
};

export default Compass;
