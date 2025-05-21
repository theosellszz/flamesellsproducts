import React from 'react';
import StarryBackground from './components/StarryBackground';
import './styles/global.css';

function App() {
  return (
    <div>
      <StarryBackground />

      <main style={{ position: 'relative', zIndex: 1, padding: '2rem' }}>
        <h1>Welcome to My Resell Store</h1>
        <p>Shop premium 1:1 products — AirPods, hoodies, colognes, and more.</p>
        {/* Add your router or product components here */}
      </main>
    </div>
  );
}

export default App;
