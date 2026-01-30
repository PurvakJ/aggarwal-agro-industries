import React from 'react';
import './Footer.css';

function Footer({ setCurrentPage }) {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  const goToWorkplace = () => {
    setCurrentPage('workplace');
    scrollToTop();
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">

            {/* BRAND */}
            <div className="footer-main">
              <div className="footer-logo">
                <h2 className="logo-text">Aggarwal Agro Industries</h2>
                <p className="logo-tagline">
                  Excellence in Agricultural Transport Since 1995
                </p>
              </div>
              <p className="footer-description">
                Leading manufacturers of heavy-duty tractor trolleys with 28+ years of expertise.
                Committed to quality, innovation, and farmer prosperity.
              </p>
            </div>

            <div className="footer-sections">

              {/* QUICK LINKS */}
              <div className="footer-section">
                <h4 className="section-title">Quick Links</h4>
                <ul className="footer-links">
                  <li><button onClick={() => goToPage('home')} className="footer-link">🏠 Home</button></li>
                  <li><button onClick={() => goToPage('about')} className="footer-link">ℹ️ About Us</button></li>
                  <li><button onClick={goToWorkplace} className="footer-link">🏭 Manufacturing</button></li>
                  <li><button onClick={() => goToPage('contact')} className="footer-link">📞 Contact</button></li>
                </ul>
              </div>

              {/* PRODUCTS → ALL GO TO WORKPLACE */}
              <div className="footer-section">
                <h4 className="section-title">Our Products</h4>
                <ul className="footer-links">
                  <li><button onClick={goToWorkplace} className="footer-link">🚜 Standard Trolleys</button></li>
                  <li><button onClick={goToWorkplace} className="footer-link">🚚 Tipper Trolleys</button></li>
                  <li><button onClick={goToWorkplace} className="footer-link">🔧 Custom Solutions</button></li>
                  <li><button onClick={goToWorkplace} className="footer-link">⚙️ Spare Parts</button></li>
                </ul>
              </div>

              {/* CONTACT */}
              <div className="footer-section">
                <h4 className="section-title">Contact Us</h4>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📍</span>
                    <div>
                      <p className="contact-text">OPP. JAGDAMBAY COLONY, SEHAJPURA ROAD</p>
                      <p className="contact-text">Samana (147101), Distt Patiala</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <div>
                      <a href="tel:8146896807" className="contact-link">8146896807</a>
                      <p className="contact-note">Jatin Garg (Owner)</p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div>
                      <a href="mailto:punjabagroindustries@gmail.com" className="contact-link">
                        punjabagroindustries@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* BUSINESS HOURS */}
              <div className="footer-section">
                <h4 className="section-title">Business Hours</h4>
                <div className="business-hours">
                  <div className="hours-item">
                    <span className="hours-day">Mon – Fri</span>
                    <span className="hours-time">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="hours-day">Saturday</span>
                    <span className="hours-time">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="hours-item emergency">
                    <span className="hours-day">Emergency</span>
                    <span className="hours-time">24/7 Available</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom"> <div className="container"> <div className="bottom-content"> <div className="copyright"> <p>© {currentYear} Aggarwal Agro Industries. All Rights Reserved.</p> <div className="legal-links"> <a href="#" className="legal-link">Privacy Policy</a> <span className="separator">|</span> <a href="#" className="legal-link">Terms of Service</a> <span className="separator">|</span> <a href="#" className="legal-link">Disclaimer</a> </div> </div> <div className="footer-actions"> <button onClick={scrollToTop} className="back-to-top"> <span className="top-icon">⬆️</span> <span>Back to Top</span> </button> <div className="payment-methods"> <span className="payment-icon">💳</span> <span className="payment-icon">🏦</span> <span className="payment-icon">📱</span> <span className="payment-text">All Payment Methods Accepted</span> </div> </div> </div> </div> </div> <div className="footer-credits"> <div className="container"> <p className="credits-text"> Made with ❤️ for Indian Farmers | GST No: 03ACCPJ5936E3ZX | ISO 9001:2015 Certified | MSME Registered </p> </div> </div> </footer> ); } export default Footer;
