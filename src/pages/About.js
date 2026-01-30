import React, { useEffect, useRef } from 'react';
import './About.css';

function About() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Handle value items with delay
            if (entry.target.classList.contains('value-item')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 100);
            }
            
            // Handle mission-vision cards with delay
            if (entry.target.classList.contains('mission') || entry.target.classList.contains('vision')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 150);
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

  return (
    <div className="about">
      <div className="hero-section about-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 
              className="hero-title lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              About <span className="hero-highlight">Aggarwal Agro Industries</span>
            </h1>
            <p 
              className="hero-subtitle lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              Pioneering Excellence in Agricultural Transport Solutions Since 1995
            </p>
            <div 
              className="hero-stats lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              <div className="stat">
                <h3>28+</h3>
                <p>Years of Excellence</p>
              </div>
              <div className="stat">
                <h3>10,000+</h3>
                <p>Trolleys Manufactured</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Expert Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="story-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Our Journey Since 1995</h2>
            <p className="section-subtitle">Three Decades of Excellence in Agricultural Equipment Manufacturing</p>
          </div>
          
          <div className="about-content">
            <div 
              className="about-text lazy-slide-left" 
              ref={el => addToRefs(el, 'lazy-slide-left')}
            >
              <h3>Building India's Agricultural Backbone</h3>
              <p>
                Founded by <strong>Mr. Jatin Garg</strong> in 1995, Aggarwal Agro Industries began as a 
                small workshop with a big vision - to transform agricultural transportation in India. 
                What started with a single trolley design has now evolved into a comprehensive range 
                of heavy-duty tractor trolleys serving farmers across Northern India.
              </p>
              
              <p>
                Over the past 28 years, we have grown from a modest setup to a state-of-the-art 
                manufacturing facility spanning 10,000 square feet in Rohtak, Haryana. Our journey 
                has been marked by continuous innovation, unwavering commitment to quality, and 
                deep understanding of farmers' needs.
              </p>
              
              <p>
                Today, we stand as one of the most trusted names in agricultural equipment 
                manufacturing, with our trolleys being the preferred choice for farmers, 
                contractors, and agricultural businesses in Haryana, Punjab, Uttar Pradesh, 
                and Rajasthan.
              </p>
            </div>
            
            <div className="about-image lazy-slide-right" ref={el => addToRefs(el, 'lazy-slide-right')}>
  <img src="https://tiimg.tistatic.com/fp/1/006/455/agricultural-use-tractor-trolleys-630.jpg" alt="Heavy Machinery Production Line" />
</div>
          </div>
        </div>
      </section>

      <section className="mission-vision-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Our Guiding Principles</h2>
            <p className="section-subtitle">Driving Agricultural Progress Through Vision and Mission</p>
          </div>
          
          <div className="mission-vision">
            <div 
              className="mission lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To revolutionize agricultural transportation by providing farmers with reliable, 
                efficient, and affordable tractor trolleys that enhance productivity, reduce 
                operational costs, and withstand the toughest farming conditions. We aim to be 
                the trusted partner in every farmer's journey towards prosperity.
              </p>
              <ul className="mission-points">
                <li>✓ Deliver superior quality at competitive prices</li>
                <li>✓ Provide customized solutions for diverse needs</li>
                <li>✓ Ensure timely delivery and excellent after-sales service</li>
                <li>✓ Continuously innovate for better efficiency</li>
              </ul>
            </div>
            
            <div 
              className="vision lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="vision-icon">🚀</div>
              <h3>Our Vision</h3>
              <p>
                To become India's leading manufacturer of agricultural transport solutions 
                through innovation, quality, and exceptional customer service. We envision 
                a future where every farmer has access to reliable equipment that makes 
                farming more profitable and sustainable.
              </p>
              <ul className="vision-points">
                <li>✓ Expand our reach across India</li>
                <li>✓ Introduce smart farming equipment</li>
                <li>✓ Establish training centers for farmers</li>
                <li>✓ Achieve zero-defect manufacturing</li>
                <li>✓ Build sustainable manufacturing practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Our Core Values</h2>
            <p className="section-subtitle">The Foundation of Everything We Do</p>
          </div>
          
          <div className="values-grid">
  {[
    { icon: '⭐', title: 'Quality Excellence', desc: 'Using only ISI-certified materials with rigorous quality control at every stage' },
    { icon: '👥', title: 'Customer Focus', desc: 'Understanding and exceeding customer expectations with personalized solutions' },
    { icon: '💡', title: 'Innovation', desc: 'Continuous improvement in design, technology, and manufacturing processes' },
    { icon: '🤝', title: 'Integrity', desc: 'Honest business practices, transparent dealings, and ethical operations' },
    { icon: '⚙️', title: 'Expertise', desc: '28 years of specialized knowledge in agricultural equipment manufacturing' },
    { icon: '🌱', title: 'Sustainability', desc: 'Environmentally conscious manufacturing and support for sustainable farming' },
    { icon: '⏱️', title: 'Reliability', desc: 'Timely delivery and dependable performance in all conditions' },
    { icon: '❤️', title: 'Passion', desc: 'Genuine love for helping farmers succeed in their endeavors' },
    { icon: '🛡️', title: 'Safety First', desc: 'Designing equipment with maximum safety standards and protective features' },
    { icon: '💰', title: 'Value Creation', desc: 'Delivering the best value proposition with competitive pricing and superior quality' }
  ].map((value, index) => (
    <div 
      key={index}
      className="value-item lazy-rotate-x" 
      ref={el => addToRefs(el, 'lazy-rotate-x')}
    >
      <div className="value-icon">{value.icon}</div>
      <h4>{value.title}</h4>
      <p>{value.desc}</p>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Our Achievements</h2>
            <p className="section-subtitle">Milestones That Define Our Excellence</p>
          </div>
          
          <div className="achievements-timeline">
            <div 
              className="achievement lazy-slide-left" 
              ref={el => addToRefs(el, 'lazy-slide-left')}
            >
              <div className="achievement-year">1995</div>
              <h4>Company Foundation</h4>
              <p>Started operations in Rohtak with basic manufacturing setup</p>
            </div>
            
            <div 
              className="achievement lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              <div className="achievement-year">2005</div>
              <h4>First Major Expansion</h4>
              <p>Expanded facility to 5,000 sq. ft. with modern equipment</p>
            </div>
            
            <div 
              className="achievement lazy-slide-right" 
              ref={el => addToRefs(el, 'lazy-slide-right')}
            >
              <div className="achievement-year">2015</div>
              <h4>Silver Jubilee</h4>
              <p>Celebrated 20 years with 5,000+ trolleys delivered</p>
            </div>
            
            <div 
              className="achievement lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              <div className="achievement-year">2020</div>
              <h4>Modernization Phase</h4>
              <p>Upgraded to CNC machines and automated systems</p>
            </div>
            
            <div 
              className="achievement lazy-slide-left" 
              ref={el => addToRefs(el, 'lazy-slide-left')}
            >
              <div className="achievement-year">2023</div>
              <h4>Current Status</h4>
              <p>10,000+ trolleys delivered, serving 500+ satisfied clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="owner-profile-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Meet Our Founder</h2>
            <p className="section-subtitle">The Visionary Behind Our Success</p>
          </div>
          
          <div className="owner-profile">
            <div 
              className="owner-image lazy-slide-left" 
              ref={el => addToRefs(el, 'lazy-slide-left')}
            >
              <div className="image-placeholder">
                <div className="placeholder-icon">👨‍💼</div>
                <p>Jatin Garg</p>
              </div>
            </div>
            
            <div 
              className="owner-details lazy-slide-right" 
              ref={el => addToRefs(el, 'lazy-slide-right')}
            >
              <div className="owner-info">
                <h3>Jatin Garg</h3>
                <p className="owner-title">Founder & Managing Director</p>
                <p className="owner-experience">28+ Years of Experience</p>
                
                <div className="owner-description">
                  <p>
                    With a deep-rooted passion for agriculture and mechanical engineering, 
                    Mr. Jatin Garg founded Aggarwal Agro Industries in 1995. His journey 
                    began with a simple yet powerful vision - to make farming easier and 
                    more profitable for Indian farmers.
                  </p>
                  
                  <p>
                    Coming from an agricultural family himself, Mr. Garg understood the 
                    challenges farmers face firsthand. This insight drove him to design 
                    tractor trolleys that are not just durable, but perfectly suited to 
                    Indian farming conditions.
                  </p>
                  
                  <p>
                    Today, even after 28 years, Mr. Garg maintains a hands-on approach, 
                    personally overseeing quality control and interacting with customers 
                    to understand their evolving needs. His philosophy of "Quality First, 
                    Customer Always" has been the cornerstone of our company's success.
                  </p>
                </div>
                
                <div className="owner-contact">
                  <div className="contact-item">
                    <span className="contact-icon">📞</span>
                    <div>
                      <h4>Direct Contact</h4>
                      <p className="contact-number">8146896807</p>
                      <p className="contact-note">Available 24/7 for urgent matters</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">✉️</span>
                    <div>
                      <h4>Email</h4>
                      <p className="contact-email">punjabagroindustries@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="contact-item">
                    <span className="contact-icon">🏆</span>
                    <div>
                      <h4>Expertise</h4>
                      <p>Agricultural Equipment Manufacturing</p>
                      <p>Farm Mechanization Solutions</p>
                      <p>Quality Control & Standards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Our Expert Team</h2>
            <p className="section-subtitle">Skilled Professionals Driving Excellence</p>
          </div>
          
          <div className="team-grid">
            <div 
              className="team-member lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="member-icon">👨‍🔧</div>
              <h4>Production Team</h4>
              <p>50+ skilled workers with 10-20 years experience each</p>
            </div>
            
            <div 
              className="team-member lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="member-icon">👨‍💼</div>
              <h4>Engineering Team</h4>
              <p>10+ engineers specializing in agricultural equipment design</p>
            </div>
            
            <div 
              className="team-member lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="member-icon">👨‍💻</div>
              <h4>Quality Control</h4>
              <p>8 inspectors ensuring every trolley meets highest standards</p>
            </div>
            
            <div 
              className="team-member lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="member-icon">👨‍🔬</div>
              <h4>R&D Department</h4>
              <p>Continuous innovation in design and manufacturing processes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section about-cta">
        <div className="container">
          <div 
            className="cta-content lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Partner With Excellence</h2>
            <p>
              Join thousands of satisfied customers who trust Aggarwal Agro Industries 
              for their agricultural transport needs. Experience the difference that 
              28 years of expertise makes.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                📞 Contact Us: 8146896807
              </button>
              <button className="btn btn-secondary btn-large">
                🏭 Visit Our Factory
              </button>
            </div>
            <div className="cta-info">
              <p><strong>📍 Factory Address:</strong> OPP. JAGDAMBAY COLONY, SEHAJPURA ROAD, Samana (147101), Distt Patiala</p>
              <p><strong>⏰ Working Hours:</strong> Monday to Saturday: 8:00 AM - 7:00 PM</p>
              <p><strong>👤 Contact Person:</strong> Jatin Garg (Founder & MD)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;