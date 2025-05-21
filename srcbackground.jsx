import React, { useEffect } from 'react';

const StarryBackground = () => {
  useEffect(() => {
    const container = document.getElementById('stars-container');
    if (!container) return;

    for (let i = 0; i < 150; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.top = `${Math.random() * 100}vh`;
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${1 + Math.random() * 3}s`;
      container.appendChild(star);
    }
  }, []);

  return <div id="stars-container" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}></div>;
};

export default StarryBackground;
