import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterView({ onRegisterSuccess }) {
  const navigate = useNavigate();
  // Prefilled mock values representing Charan's credentials for testing
  const [fullName, setFullName] = useState('Charan');
  const [phone, setPhone] = useState('9876543210');
  const [email, setEmail] = useState('charan@gmail.com');
  const [password, setPassword] = useState('charanpassword');
  const [companyName, setCompanyName] = useState('Charan Agency');
  const [isAgency, setIsAgency] = useState('yes');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterSuccess({
      name: fullName,
      phone: phone,
      email: email.includes('@') ? email : 'charan@gmail.com', // fallback for Profile screen representation
      companyName: companyName,
      isAgency: isAgency
    });
    navigate('/profile');
  };

  return (
    <div className="page-container">
      <form onSubmit={handleSubmit} className="form-container">
        <div>
          <div className="form-header-group" style={{ marginBottom: '24px' }}>
            <h2 className="form-title">Create your<br />PopX account</h2>
          </div>

          <div className="form-fields" style={{ gap: '18px' }}>
            {/* Full Name */}
            <div className="input-group">
              <label className="input-label">
                Full Name<span className="label-asterisk">*</span>
              </label>
              <input
                type="text"
                className="input-field"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            {/* Phone Number */}
            <div className="input-group">
              <label className="input-label">
                Phone number<span className="label-asterisk">*</span>
              </label>
              <input
                type="text"
                className="input-field"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            {/* Email Address */}
            <div className="input-group">
              <label className="input-label">
                Email address<span className="label-asterisk">*</span>
              </label>
              <input
                type="text"
                className="input-field"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="input-group">
              <label className="input-label">
                Password<span className="label-asterisk">*</span>
              </label>
              <input
                type="text"
                className="input-field"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Company Name */}
            <div className="input-group">
              <label className="input-label">Company name</label>
              <input
                type="text"
                className="input-field"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            {/* Radio buttons for agency status */}
            <div className="radio-section">
              <span className="radio-label-heading">
                Are you an Agency?<span className="label-asterisk">*</span>
              </span>
              <div className="radio-group">
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="yes"
                    checked={isAgency === 'yes'}
                    onChange={() => setIsAgency('yes')}
                  />
                  <span className="custom-radio"></span>
                  Yes
                </label>
                
                <label className="radio-option">
                  <input
                    type="radio"
                    name="isAgency"
                    value="no"
                    checked={isAgency === 'no'}
                    onChange={() => setIsAgency('no')}
                  />
                  <span className="custom-radio"></span>
                  No
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="form-bottom">
          <button type="submit" className="btn-primary">
            Create Account
          </button>
          
          <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '14px', color: '#636366' }}>
            Already have an account?{' '}
            <span 
              onClick={() => navigate('/login')}
              style={{ color: '#6C25FF', fontWeight: 600, cursor: 'pointer' }}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
