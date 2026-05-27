
export default function WelcomeView({ onNavigate }) {
  return (
    <div className="page-container">
      <div className="welcome-container">
        {/* Upper space is kept empty as in the mockup */}
        <div style={{ flexGrow: 1 }} />
        
        <h1 className="welcome-title">Welcome to PopX</h1>
        <p className="welcome-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        
        <div className="welcome-buttons">
          <button 
            type="button" 
            className="btn-primary" 
            onClick={() => onNavigate('register')}
          >
            Create Account
          </button>
          
          <button 
            type="button" 
            className="btn-secondary" 
            onClick={() => onNavigate('login')}
          >
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
