import React, { useEffect, useRef } from 'react';
import './Contact.css';

function Contact() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Handle contact items with delay
            if (entry.target.classList.contains('contact-item')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 100);
            }
            
            // Handle quick links with delay
            if (entry.target.classList.contains('quick-link')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 80);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const addToRefs = (el, className = '') => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
      if (className) {
        el.classList.add(className);
      }
    }
  };

  const handleQuickAction = (action) => {
    switch(action) {
      case 'quote':
        window.location.href = 'tel:8146896807';
        break;
      case 'service':
        alert('Please call 8146896807 for service requests');
        break;
      case 'callback':
        window.location.href = 'tel:8146896807';
        break;
      case 'catalog':
        alert('Catalog download coming soon!');
        break;
      default:
        break;
    }
  };

  return (
    <div className="contact">
      <div className="contact-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 
              className="hero-title lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              Get in <span className="hero-highlight">Touch</span>
            </h1>
            <p 
              className="hero-subtitle lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              Connect with India's Leading Tractor Trolley Manufacturer
            </p>
            <div 
              className="hero-buttons lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              <button 
                className="btn btn-primary"
                onClick={() => window.location.href = 'tel:8146896807'}
              >
                📞 Call Now: 8146896807
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => window.open('https://www.google.com/maps/place/JAGDAMBAY+MACHINERY+STORE/@30.147482,76.187622,14z/data=!4m14!1m7!3m6!1s0x3911cd37431369dd:0xfc199a8864d888f8!2sJAGDAMBAY+MACHINERY+STORE!8m2!3d30.1474816!4d76.1876221!16s%2Fg%2F11fl5rk3hs!3m5!1s0x3911cd37431369dd:0xfc199a8864d888f8!8m2!3d30.1474816!4d76.1876221!16s%2Fg%2F11fl5rk3hs?hl=en&entry=ttu&g_ep=EgoyMDI2MDEyNy4wIKXMDSoASAFQAw%3D%3D', '_blank')}
              >
                🗺️ Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-info-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Contact Information</h2>
            <p className="section-subtitle">Multiple Ways to Reach Us</p>
          </div>
          
          <div className="contact-grid">
            <div 
              className="contact-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="contact-card-icon">📍</div>
              <div className="contact-card-content">
                <h3>Factory Address</h3>
                <div className="address-details">
                  <p><strong>Aggarwal Agro Industries</strong></p>
                  <p>03ACCPJ5936E3ZX</p>
                  <p>OPP. JAGDAMBAY COLONY, SEHAJPURA ROAD</p>
                  <p>Samana (147101), Distt Patiala</p>
                  <button 
                    className="btn btn-outline btn-small"
                    onClick={() => window.open('https://maps.app.goo.gl/', '_blank')}
                  >
                    Open in Maps
                  </button>
                </div>
              </div>
            </div>
            
            <div 
              className="contact-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="contact-card-icon">📞</div>
              <div className="contact-card-content">
                <h3>Phone Numbers</h3>
                <div className="phone-details">
                  <div className="phone-item">
                    <span className="phone-label">Owner (Jatin Garg):</span>
                    <a href="tel:8146896807" className="phone-number">8146896807</a>
                    <span className="phone-note">Available 24/7</span>
                  </div>
                  <div className="phone-item">
                    <span className="phone-label">Owner:</span>
                    <a href="tel:8360046744" className="phone-number">83600-46744</a>
                  </div>
                  <div className="phone-item">
                    <span className="phone-label">Support:</span>
                    <a href="tel:9779456807" className="phone-number">97794-56807</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="contact-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="contact-card-icon">✉️</div>
              <div className="contact-card-content">
                <h3>Email Address</h3>
                <div className="email-details">
                  <div className="email-item">
                    <span className="email-label">General Inquiries:</span>
                    <a href="mailto:punjabagroindustries@gmail.com" className="email-address">punjabagroindustries@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className="contact-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="contact-card-icon">⏰</div>
              <div className="contact-card-content">
                <h3>Business Hours</h3>
                <div className="hours-details">
                  <div className="hours-item">
                    <span className="hours-day">Monday - Friday:</span>
                    <span className="hours-time">8:00 AM - 7:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="hours-day">Saturday:</span>
                    <span className="hours-time">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-item">
                    <span className="hours-day">Sunday:</span>
                    <span className="hours-time">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="hours-item emergency">
                    <span className="hours-day">Emergency Service:</span>
                    <span className="hours-time">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="emergency-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Emergency Contact</h2>
            <p className="section-subtitle">Immediate Assistance When You Need It Most</p>
          </div>
          
          <div 
            className="emergency-card lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <div className="emergency-icon">🚨</div>
            <div className="emergency-content">
              <h3>24/7 Emergency Support</h3>
              <p className="emergency-description">
                For urgent breakdowns, immediate service requirements, or critical inquiries 
                after business hours, our emergency support team is always available.
              </p>
              <div className="emergency-contact-info">
                <div className="primary-contact">
                  <div className="contact-number-large">
                    <span className="number-icon">📞</span>
                    <a href="tel:8146896807" className="emergency-number">8146896807</a>
                  </div>
                  <p className="contact-person">Jatin Garg (Owner) - Direct Line</p>
                </div>
                <div className="emergency-features">
                  <div className="feature">
                    <span className="feature-icon">⚡</span>
                    <span>Immediate Response</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🔧</span>
                    <span>On-site Support</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">⏱️</span>
                    <span>Quick Resolution</span>
                  </div>
                  <div className="feature">
                    <span className="feature-icon">🛡️</span>
                    <span>Priority Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-action-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Quick Actions</h2>
            <p className="section-subtitle">Instant Solutions at Your Fingertips</p>
          </div>
          
          <div className="quick-actions-grid">
            <div 
              className="quick-action-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
              onClick={() => handleQuickAction('quote')}
            >
              <div className="action-icon">📋</div>
              <h4>Instant Quote</h4>
              <p>Get immediate pricing for standard trolley models</p>
              <button className="action-button">Get Quote Now</button>
            </div>
            
            <div 
              className="quick-action-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
              onClick={() => handleQuickAction('service')}
            >
              <div className="action-icon">🔧</div>
              <h4>Service Request</h4>
              <p>Schedule maintenance or repair for your equipment</p>
              <button className="action-button">Request Service</button>
            </div>
            
            <div 
              className="quick-action-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
              onClick={() => handleQuickAction('callback')}
            >
              <div className="action-icon">📞</div>
              <h4>Call Back</h4>
              <p>Request immediate callback from our sales team</p>
              <button className="action-button">Request Call Back</button>
            </div>
            
            <div 
              className="quick-action-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
              onClick={() => window.open('https://www.google.com/maps?ll=30.147482,76.187622&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=18165720482573748472', '_blank')}
            >
              <div className="action-icon">🗺️</div>
              <h4>Factory Visit</h4>
              <p>Schedule a visit to our manufacturing facility</p>
              <button className="action-button">Book Visit</button>
            </div>
            
            <div 
              className="quick-action-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
              onClick={() => window.location.href = 'mailto:punjabagroindustries@gmail.com.com'}
            >
              <div className="action-icon">✉️</div>
              <h4>Email Inquiry</h4>
              <p>Send detailed inquiries via email</p>
              <button className="action-button">Send Email</button>
            </div>
          </div>
        </div>
      </section>

      <section className="location-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Find Us Here</h2>
            <p className="section-subtitle">Easy Access from Major Cities</p>
          </div>
          
          <div className="location-content">
            <div 
              className="location-map lazy-slide-left" 
              ref={el => addToRefs(el, 'lazy-slide-left')}
            >
              <div className="map-placeholder">
                <div className="map-overlay">
                  <h3>📍 Aggarwal Agro Industries</h3>
                  <p>Industrial Area, Rohtak, Haryana</p>
                  <button 
                    className="btn btn-primary"
                    onClick={() => window.open('https://maps.app.goo.gl/', '_blank')}
                  >
                    Open in Google Maps
                  </button>
                </div>
              </div>
            </div>
            
            <div 
  className="location-directions lazy-slide-right" 
  ref={el => addToRefs(el, 'lazy-slide-right')}
>
  <h3>Find Us on Map</h3>

  <div className="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27601.100734383424!2d76.187622!3d30.147482!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911cd37431369dd%3A0xfc199a8864d888f8!2sJAGDAMBAY%20MACHINERY%20STORE!5e0!3m2!1sen!2sin!4v1769781519212!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Aggarwal Agro Industries Location"
    />
  </div>

  <div className="map-note">
    <p>📍 Industrial Area, Sector 7, Rohtak, Haryana – 124001</p>
    <p>🚗 Easily accessible by road | 🚆 15 mins from Rohtak Junction</p>
  </div>
</div>

          </div>
        </div>
      </section>

      <section className="cta-section contact-cta">
        <div className="container">
          <div 
            className="cta-content lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Ready to Transform Your Farming Operations?</h2>
            <p>
              Contact us today and experience the Aggarwal Agro difference. 
              Our team is ready to assist you with the perfect tractor trolley solution.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn btn-primary btn-large"
                onClick={() => window.location.href = 'tel:8146896807'}
              >
                📞 Call Now: 8146896807
              </button>
              <button 
                className="btn btn-secondary btn-large"
                onClick={() => window.open('https://maps.app.goo.gl/', '_blank')}
              >
                🗺️ Get Directions
              </button>
            </div>
            <div className="cta-info">
              <div className="info-item">
                <span className="info-icon">👤</span>
                <div>
                  <h5>Primary Contact</h5>
                  <p>Mr. Jatin Garg (Owner & Managing Director)</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h5>Factory Location</h5>
                  <p>OPP. JAGDAMBAY COLONY, SEHAJPURA ROAD, Samana (147101), Distt Patiala</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">⏰</span>
                <div>
                  <h5>Visit Timings</h5>
                  <p>Monday to Saturday: 8:00 AM - 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;