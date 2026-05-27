import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import WelcomeView from './components/WelcomeView';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ProfileView from './components/ProfileView';
import './App.css';

export default function App() {
  // Load initial user state from localStorage if available
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('popx_user');
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (e) {
      console.error("Error reading user from localStorage", e);
      return null;
    }
  });

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('popx_user', JSON.stringify(userData));
  };

  const handleRegisterSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem('popx_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('popx_user');
  };

  return (
    <Router>
      <div className="desktop-wrapper">
        <Routes>
          {/* Welcome Screen */}
          <Route 
            path="/welcome" 
            element={
              user ? <Navigate to="/profile" replace /> : <WelcomeView />
            } 
          />
          
          {/* Login Screen */}
          <Route 
            path="/login" 
            element={
              user ? (
                <Navigate to="/profile" replace />
              ) : (
                <LoginView onLoginSuccess={handleLoginSuccess} />
              )
            } 
          />
          
          {/* Register Screen */}
          <Route 
            path="/register" 
            element={
              user ? (
                <Navigate to="/profile" replace />
              ) : (
                <RegisterView onRegisterSuccess={handleRegisterSuccess} />
              )
            } 
          />
          
          {/* Profile Screen (Protected) */}
          <Route 
            path="/profile" 
            element={
              user ? (
                <ProfileView user={user} onLogout={handleLogout} />
              ) : (
                <Navigate to="/welcome" replace />
              )
            } 
          />
          
          {/* Fallbacks */}
          <Route path="/" element={<Navigate to="/welcome" replace />} />
          <Route path="*" element={<Navigate to="/welcome" replace />} />
        </Routes>
      </div>
    </Router>
  );
}
