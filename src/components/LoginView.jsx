import { useState } from 'react';

export default function LoginView({ onNavigate, onLoginSuccess }) {
  // Prefilled test credentials as requested
  const [email, setEmail] = useState('charan@gmail.com');
  const [password, setPassword] = useState('charanpassword');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      onLoginSuccess({
        email: email,
        name: 'Charan',
        phone: '9876543210',
        companyName: 'Charan Agency',
        isAgency: 'yes'
      });
    }
  };

  return (
    <div className="page-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <div className="form-header-group">
            <h2 className="form-title">Signin to your PopX account</h2>
            <p className="form-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
          </div>

          <div className="form-fields">
            {/* Email Field with Overlapping Label */}
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <input
                type="email"
                className="input-field"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field with Overlapping Label */}
            <div className="input-group">
              <label className="input-label">Password</label>
              <input
                type="password"
                className="input-field"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        <div className="form-bottom">
          <button
            type="submit"
            className={`btn-primary ${!isFormValid ? 'btn-disabled' : ''}`}
            disabled={!isFormValid}
          >
            Login
          </button>
          
          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px', color: '#636366' }}>
            Don't have an account?{' '}
            <span 
              onClick={() => onNavigate('register')}
              style={{ color: '#6C25FF', fontWeight: 600, cursor: 'pointer' }}
            >
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
