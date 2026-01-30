import React, { useEffect, useRef } from 'react';
import './Home.css';

function Home() {
  const elementsRef = useRef([]);

  useEffect(() => {
    // Initialize Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add visible class to child elements for staggered animations
            if (entry.target.classList.contains('section-header')) {
              const subtitle = entry.target.querySelector('.section-subtitle');
              const h2 = entry.target.querySelector('h2');
              if (subtitle) setTimeout(() => subtitle.classList.add('visible'), 200);
              if (h2) h2.classList.add('visible');
            }
            
            // Handle product cards with delay
            if (entry.target.classList.contains('product-card')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 100);
            }
            
            // Handle feature cards with delay
            if (entry.target.classList.contains('feature-card')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 100);
            }
            
            // Handle process steps with delay
            if (entry.target.classList.contains('process-step')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 150);
            }
            
            // Handle step arrows
            if (entry.target.classList.contains('step-arrow')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 150);
            }
            
            // Handle testimonial cards with delay
            if (entry.target.classList.contains('testimonial-card')) {
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

    // Store elements in variable for cleanup
    const currentElements = elementsRef.current;
    
    // Observe all elements
    currentElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    // Scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    const updateProgress = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      progressBar.style.transform = `scaleX(${scrollPercent})`;
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    // Cleanup
    return () => {
      // Use stored variable for cleanup
      currentElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
      document.body.removeChild(progressBar);
      window.removeEventListener('scroll', updateProgress);
    };
  }, []);

  // Helper function to add elements to refs
  const addToRefs = (el, className = '') => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
      if (className) {
        el.classList.add(className);
      }
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 
              className="hero-title lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              <span className="hero-highlight">Aggarwal Agro Industries</span>
              <br />
              Excellence in Agricultural Transport Solutions
            </h1>
            <p 
              className="hero-subtitle lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              Pioneering the manufacturing of heavy-duty tractor trolleys with over 28 years 
              of expertise, serving farmers and agricultural businesses across Northern India
            </p>
            <div 
              className="hero-buttons lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              <button className="btn btn-primary">Explore Our Products</button>
              <button className="btn btn-secondary">Get Free Consultation</button>
            </div>
            <div 
              className="hero-stats lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              <div className="stat">
                <h3>28+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>10,000+</h3>
                <p>Trolleys Delivered</p>
              </div>
              <div className="stat">
                <h3>500+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>About Aggarwal Agro Industries</h2>
            <p className="section-subtitle">Trusted Name in Agricultural Equipment Since 1995</p>
          </div>
          <div className="about-content">
            <div 
              className="about-text lazy-slide-left" 
              ref={el => addToRefs(el, 'lazy-slide-left')}
            >
              <h3>Your Partner in Agricultural Progress</h3>
              <p>
                Founded and managed by <strong>Mr. Jatin Garg</strong>, Aggarwal Agro Industries 
                has been at the forefront of agricultural transport solutions for nearly three decades. 
                We specialize in manufacturing robust, durable, and efficient tractor trolleys that 
                are engineered to withstand the toughest farming conditions.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction has made us the 
                preferred choice for farmers, contractors, and agricultural businesses across 
                Haryana, Punjab, Uttar Pradesh, and Rajasthan.
              </p>
              <div className="owner-highlight">
                <div className="owner-info">
                  <h4>👤 Jatin Garg</h4>
                  <p className="contact-info">Founder & Managing Director <br></br>📞 Direct Line: 8146896807</p>
                </div>
              </div>
            </div>
            <div 
              className="about-image lazy-slide-right" 
              ref={el => addToRefs(el, 'lazy-slide-right')}
            >
              <img src="https://i.postimg.cc/qMGg2X1J/Whats_App_Image_2026_01_30_at_17_48_42.jpg" alt="Tractor Trolley Manufacturing" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Our Tractor Trolley Range</h2>
            <p className="section-subtitle">
              High-Strength Tractor Trolleys for Agricultural & Industrial Use
            </p>
          </div>

          <div className="products-grid">
            {/* Standard Tractor Trolley */}
            <div 
              className="product-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="product-icon">🚜</div>
              <h3>Standard Tractor Trolley</h3>
              <p>
                Robust and reliable tractor trolleys designed for everyday farming
                operations and material transport.
              </p>
              <ul className="product-features">
                <li>✓ 5–10 Ton Load Capacity</li>
                <li>✓ Reinforced MS Steel Body</li>
                <li>✓ Strong Chassis & Axle</li>
                <li>✓ Long-lasting Paint Coating</li>
              </ul>
            </div>

            {/* Hydraulic Tipper Tractor Trolley */}
            <div 
              className="product-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="product-icon">🚚</div>
              <h3>Hydraulic Tipper Tractor Trolley</h3>
              <p>
                Hydraulic tipping tractor trolleys for fast and efficient unloading
                of agricultural and construction materials.
              </p>
              <ul className="product-features">
                <li>✓ Hydraulic Tipping System</li>
                <li>✓ High-Quality Cylinder & Pump</li>
                <li>✓ Safe Locking Mechanism</li>
                <li>✓ Heavy-Duty Suspension</li>
              </ul>
            </div>

            {/* Heavy Duty Tractor Trolley */}
            <div 
              className="product-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="product-icon">🛠️</div>
              <h3>Heavy-Duty Tractor Trolley</h3>
              <p>
                Extra-strong tractor trolleys built for heavy loads and rough working
                conditions.
              </p>
              <ul className="product-features">
                <li>✓ 10+ Ton Capacity Options</li>
                <li>✓ Extra Thick Steel Plates</li>
                <li>✓ Industrial Grade Axles</li>
                <li>✓ Designed for Long Life</li>
              </ul>
            </div>

            {/* Customized Tractor Trolley */}
            <div 
              className="product-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="product-icon">🔧</div>
              <h3>Customized Tractor Trolley</h3>
              <p>
                Tractor trolleys manufactured as per customer requirements and
                specific usage needs.
              </p>
              <ul className="product-features">
                <li>✓ Custom Size & Capacity</li>
                <li>✓ Optional Side Panels</li>
                <li>✓ Hydraulic / Non-Hydraulic</li>
                <li>✓ Tailor-Made Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Why Choose Aggarwal Agro?</h2>
            <p className="section-subtitle">Excellence in Every Aspect of Our Service</p>
          </div>
          <div className="features-grid">
            <div 
              className="feature-card lazy-rotate-x" 
              ref={el => addToRefs(el, 'lazy-rotate-x')}
            >
              <div className="feature-icon">⭐</div>
              <h3>Premium Quality</h3>
              <p>We use only ISI-certified materials and components for maximum durability</p>
            </div>
            
            <div 
              className="feature-card lazy-rotate-x" 
              ref={el => addToRefs(el, 'lazy-rotate-x')}
            >
              <div className="feature-icon">⚙️</div>
              <h3>Expert Engineering</h3>
              <p>Our designs are optimized for performance, safety, and longevity</p>
            </div>
            
            <div 
              className="feature-card lazy-rotate-x" 
              ref={el => addToRefs(el, 'lazy-rotate-x')}
            >
              <div className="feature-icon">🎯</div>
              <h3>Custom Solutions</h3>
              <p>Tailor-made trolleys to meet your specific agricultural requirements</p>
            </div>
            
            <div 
              className="feature-card lazy-rotate-x" 
              ref={el => addToRefs(el, 'lazy-rotate-x')}
            >
              <div className="feature-icon">🔧</div>
              <h3>After-Sales Support</h3>
              <p>Comprehensive warranty and dedicated service network</p>
            </div>
            
            <div 
              className="feature-card lazy-rotate-x" 
              ref={el => addToRefs(el, 'lazy-rotate-x')}
            >
              <div className="feature-icon">⏱️</div>
              <h3>Timely Delivery</h3>
              <p>Efficient production process ensuring on-time delivery</p>
            </div>
            
            <div 
              className="feature-card lazy-rotate-x" 
              ref={el => addToRefs(el, 'lazy-rotate-x')}
            >
              <div className="feature-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>Best value for money without compromising on quality</p>
            </div>
            
            <div 
              className="feature-card lazy-rotate-x" 
              ref={el => addToRefs(el, 'lazy-rotate-x')}
            >
              <div className="feature-icon">🛡️</div>
              <h3>Weather-Resistant Design</h3>
              <p>Built to withstand harsh agricultural environments and weather conditions</p>
            </div>
            
            <div 
              className="feature-card lazy-rotate-x" 
              ref={el => addToRefs(el, 'lazy-rotate-x')}
            >
              <div className="feature-icon">🔄</div>
              <h3>Multi-Purpose Utility</h3>
              <p>Adaptable for various crops, terrains, and farming applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Our Manufacturing Process</h2>
            <p className="section-subtitle">Quality Control at Every Stage</p>
          </div>
          <div className="process-steps">
            <div 
              className="process-step" 
              ref={el => addToRefs(el)}
            >
              <div className="step-number">1</div>
              <h3>Design & Consultation</h3>
              <p>Understanding requirements and creating customized designs</p>
            </div>
            <div 
              className="step-arrow" 
              ref={el => addToRefs(el)}
            >
              →
            </div>
            <div 
              className="process-step" 
              ref={el => addToRefs(el)}
            >
              <div className="step-number">2</div>
              <h3>Material Selection</h3>
              <p>Using premium quality steel and components</p>
            </div>
            <div 
              className="step-arrow" 
              ref={el => addToRefs(el)}
            >
              →
            </div>
            <div 
              className="process-step" 
              ref={el => addToRefs(el)}
            >
              <div className="step-number">3</div>
              <h3>Fabrication</h3>
              <p>Precision cutting, bending, and welding</p>
            </div>
            <div 
              className="step-arrow" 
              ref={el => addToRefs(el)}
            >
              →
            </div>
            <div 
              className="process-step" 
              ref={el => addToRefs(el)}
            >
              <div className="step-number">4</div>
              <h3>Finishing & Testing</h3>
              <p>Painting, finishing, and rigorous testing</p>
            </div>
            <div 
              className="step-arrow" 
              ref={el => addToRefs(el)}
            >
              →
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div 
            className="cta-content lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Transform Your Agricultural Operations</h2>
            <p>
              Join thousands of satisfied farmers and businesses who trust Aggarwal Agro Industries 
              for their tractor trolley needs. Get a free consultation and quote today!
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary btn-large">
                📞 Call Now: 8146896807
              </button>
              <button className="btn btn-secondary btn-large">
                📧 Request a Quote
              </button>
              <button className="btn btn-outline btn-large">
                🗺️ Visit Our Factory
              </button>
            </div>
            <div className="cta-info">
              <p><strong>📍 Factory Address:</strong> OPP. JAGDAMBAY COLONY, SEHAJPURA ROAD, Samana (147101), Distt Patiala</p>
              <p><strong>⏰ Working Hours:</strong> Monday to Saturday: 8:00 AM - 7:00 PM</p>
              <p><strong>👤 Contact Person:</strong> Jatin Garg (Owner)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>What Our Customers Say</h2>
            <p className="section-subtitle">Trusted by Farmers Across Northern India</p>
          </div>
          <div className="testimonials-grid">
            <div 
              className="testimonial-card" 
              ref={el => addToRefs(el)}
            >
              <div className="testimonial-text">
                "The trolley we purchased 5 years ago is still working perfectly. 
                Excellent quality and great after-sales service!"
              </div>
              <div className="testimonial-author">
                <strong>Rajesh Kumar</strong>
                <p>Farmer, Sonipat</p>
              </div>
            </div>
            
            <div 
              className="testimonial-card" 
              ref={el => addToRefs(el)}
            >
              <div className="testimonial-text">
                "Custom-built trolley for our specific needs. The team understood 
                our requirements perfectly and delivered on time."
              </div>
              <div className="testimonial-author">
                <strong>Harpreet Singh</strong>
                <p>Agricultural Contractor, Ludhiana</p>
              </div>
            </div>
            
            <div 
              className="testimonial-card" 
              ref={el => addToRefs(el)}
            >
              <div className="testimonial-text">
                "Best value for money in the market. The trolley handles heavy loads 
                effortlessly. Highly recommended!"
              </div>
              <div className="testimonial-author">
                <strong>Vikram Yadav</strong>
                <p>Farm Owner, Meerut</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;