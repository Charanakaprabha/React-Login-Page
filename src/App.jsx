import { useState } from 'react';
import WelcomeView from './components/WelcomeView';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ProfileView from './components/ProfileView';
import './App.css';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [user, setUser] = useState(null);

  const handleNavigate = (screen) => {
    setCurrentScreen(screen);
  };

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setCurrentScreen('profile');
  };

  const handleRegisterSuccess = (userData) => {
    setUser(userData);
    setCurrentScreen('profile');
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentScreen('welcome');
  };

  return (
    <div className="desktop-wrapper">
      {currentScreen === 'welcome' && (
        <WelcomeView onNavigate={handleNavigate} />
      )}
      
      {currentScreen === 'login' && (
        <LoginView 
          onNavigate={handleNavigate} 
          onLoginSuccess={handleLoginSuccess} 
        />
      )}
      
      {currentScreen === 'register' && (
        <RegisterView 
          onNavigate={handleNavigate} 
          onRegisterSuccess={handleRegisterSuccess} 
        />
      )}
      
      {currentScreen === 'profile' && (
        <ProfileView 
          user={user} 
          onLogout={handleLogout} 
        />
      )}
    </div>
  );
}
