import { useState } from 'react';
import { Camera } from 'lucide-react';

export default function ProfileView({ user, onLogout }) {
  // Batman profile image URL with a custom vector SVG fallback
  const onlinePhoto = "https://avatarfiles.alphacoders.com/152/152349.png";
  const batmanSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%231A1A1A"/><path d="M30 45 L32 15 L42 35 L58 35 L68 15 L70 45 Z" fill="%230D0D0D"/><path d="M30 45 C30 30 70 30 70 45 C70 70 30 70 30 45 Z" fill="%230D0D0D"/><path d="M30 45 C30 55 70 55 70 45 L65 75 L35 75 Z" fill="%230D0D0D"/><path d="M40 55 C40 68 60 68 60 55 L58 68 L42 68 Z" fill="%23FFDBAC"/><path d="M46 64 C48 65 52 65 54 64" stroke="%23000000" stroke-width="1.5" fill="none"/><polygon points="38,46 48,48 45,43" fill="%23FFFFFF"/><polygon points="62,46 52,48 55,43" fill="%23FFFFFF"/></svg>`;
  
  const [avatarSrc, setAvatarSrc] = useState(onlinePhoto);

  const handleImageError = () => {
    setAvatarSrc(batmanSvg);
  };

  return (
    <div className="page-container">
      <div className="profile-header">
        Account Settings
      </div>

      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-meta">
            <div className="profile-avatar-container">
              <img 
                src={avatarSrc} 
                alt="Profile Avatar" 
                className="profile-avatar"
                onError={handleImageError}
              />
              <div className="camera-badge">
                <Camera size={12} strokeWidth={2.5} />
              </div>
            </div>

            <div className="profile-info">
              <div className="profile-name">{user?.name || "Charan"}</div>
              <div className="profile-email">{user?.email || "charan@gmail.com"}</div>
            </div>
          </div>

          <div className="profile-bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </div>
        </div>

        <div className="logout-container">
          <button 
            type="button" 
            className="btn-logout" 
            onClick={onLogout}
          >
            Logout / Back to Welcome
          </button>
        </div>
      </div>
    </div>
  );
}
