import React, { useState, useEffect } from 'react';

const CircleMouseTracker = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div style={{position:"fixed" , top:'0' , zIndex:"30"}} >
      <div
        style={{
          position: 'absolute',
          top: position.y - 25,
          left: position.x - 25,
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '2px solid #333',
          boxShadow:"0 0 10px #444",
          userSelect:"unset",
          touchAction:"none",
        }}
      ></div>
    </div>
  );
};

export default CircleMouseTracker;
