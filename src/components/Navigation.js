import React, { useState, useEffect } from 'react';
import './Navigation.css';

function Navigation({ setCurrentPage, currentPage }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About Us', icon: 'ℹ️' },
    { id: 'workplace', label: 'Manufacturing', icon: '🏭' },
    { id: 'contact', label: 'Contact', icon: '📞' }
  ];

  const handleNavClick = (page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navigation">
      <div className="nav-container">
        
        {/* Brand */}
        <div className="nav-brand">
          <h2>Aggarwal Agro Industries</h2>
          <span>Since 1995</span>
        </div>

        {/* Desktop Menu */}
        <div className="nav-links">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button
            className="nav-btn primary"
            onClick={() => window.location.href = 'tel:8146896807'}
          >
            📞 Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <button
            key={item.id}
            className={`mobile-link ${currentPage === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}

        <button
          className="mobile-cta"
          onClick={() => {
            window.location.href = 'tel:8146896807';
            setIsMobileMenuOpen(false);
          }}
        >
          📞 Call Now
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
