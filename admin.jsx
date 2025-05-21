// src/admin/Login.jsx
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (email === 'ted914063@gmail.com') {
      onLogin(email);
    } else {
      alert('Unauthorized');
    }
  };

  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h2>Admin Login</h2>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter admin email"
        style={{ padding: '0.5rem', marginRight: '0.5rem' }}
      />
      <button onClick={handleLogin} style={{ padding: '0.5rem' }}>Login</button>
    </div>
  );
};

export default Login;


// src/admin/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, children }) => {
  return user === 'ted914063@gmail.com' ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;


// src/admin/AdminPanel.jsx
import React from 'react';

const AdminPanel = () => {
  return (
    <div style={{ padding: '2rem', color: 'white' }}>
      <h1>Admin Dashboard</h1>
      <p>Welcome, manage your products, discounts, and orders here.</p>
      {/* Add actual admin features/components here */}
    </div>
  );
};

export default AdminPanel;


// src/MainRoutes.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './admin/Login';
import AdminPanel from './admin/AdminPanel';
import ProtectedRoute from './admin/ProtectedRoute';
import App from './App';

function MainRoutes() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/admin" element={
          <ProtectedRoute user={user}>
            <AdminPanel />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default MainRoutes;


// src/index.js or src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import MainRoutes from './MainRoutes';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainRoutes />);
