import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

interface HeaderProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'photography', label: 'Photo' },
    { id: 'videography', label: 'Video' },
    { id: 'web', label: 'Web' },
    { id: 'achievements', label: 'Works' },
    { id: 'contact', label: 'Contact' },
    { id: 'profile', label: 'Profile' }
  ];

  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (sectionId === 'profile') {
      navigate('/profile');
      return;
    }
    if (location.pathname !== '/') {
      navigate(sectionId === 'home' ? '/' : `/#${sectionId}`);
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      onSectionChange?.(sectionId);
    }
  };

  return (
    <>
      <header>
        <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>M.Koizumi Portfolio</Link>

        <ul className="nav-links">
          {navigationItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={activeSection === item.id ? 'active' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </header>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        {navigationItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(item.id);
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Header;
