import React, { useEffect, useRef } from 'react';
import './Workplace.css';

function Workplace() {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Handle steps with delay
            if (entry.target.classList.contains('step')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 100);
            }
            
            // Handle infra items with delay
            if (entry.target.classList.contains('infra-item')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 80);
            }
            
            // Handle standards with delay
            if (entry.target.classList.contains('standard')) {
              const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
              setTimeout(() => {
                entry.target.classList.add('visible');
              }, index * 100);
            }
            
            // Handle stats with delay
            if (entry.target.classList.contains('stat')) {
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
    
    currentElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      // Use stored variable for cleanup
      currentElements.forEach((element) => {
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
    <div className="workplace">
      <div className="workplace-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 
              className="hero-title lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              Our <span className="hero-highlight">WorkPlace Station</span>
            </h1>
            <p 
              className="hero-subtitle lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
              Powering Agriculture & Industry with Technology, Electricity & Premium Raw Materials
            </p>
            <div 
              className="hero-buttons lazy-fade-in" 
              ref={el => addToRefs(el, 'lazy-fade-in')}
            >
            </div>
          </div>
        </div>
      </div>

      {/* New Product Focus Section - Technology, Electricity & Raw Materials */}
      <section className="product-focus-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Our Core Product Verticals</h2>
            <p className="section-subtitle">Technology | Electricity | Raw Material Supply</p>
          </div>
          
          <div className="focus-grid">
            <div 
              className="focus-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="focus-icon">💻</div>
              <h3>Technology Solutions</h3>
              <p>Advanced technological products and solutions for modern agricultural and industrial applications</p>
              <ul>
                <li>Digital monitoring systems</li>
                <li>Automation solutions</li>
                <li>Precision control equipment</li>
                <li>Smart farming technology</li>
              </ul>
            </div>
            
            <div 
              className="focus-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="focus-icon">⚡</div>
              <h3>Electricity Products</h3>
              <p>High-quality electrical components and power solutions for reliable operations</p>
              <ul>
                <li>Power distribution units</li>
                <li>Electrical control panels</li>
                <li>Wiring and connectivity</li>
                <li>Power backup solutions</li>
              </ul>
            </div>
            
            <div 
              className="focus-card lazy-scale-up" 
              ref={el => addToRefs(el, 'lazy-scale-up')}
            >
              <div className="focus-icon">🏭</div>
              <h3>Raw Material Supply</h3>
              <p>Premium raw materials for rally-making factories and manufacturing industries</p>
              <ul>
                <li>High-tensile steel & metals</li>
                <li>Industrial-grade components</li>
                <li>Specialized rally-making materials</li>
                <li>Bulk material procurement</li>
              </ul>
            </div>
          </div>
          
          <div 
            className="rally-supply-banner lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <div className="banner-icon">🏁</div>
            <div className="banner-content">
              <h4>Preferred Raw Material Supplier for Rally-Making Factories</h4>
              <p>We stand as a reliable raw material supplier for the rally-making industry, providing high-grade materials that meet stringent quality standards. Our supply chain ensures timely delivery and consistent quality for all rally manufacturing requirements.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="facility-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>State-of-the-Art Manufacturing Facility</h2>
            <p className="section-subtitle">10,000 Sq. Ft. of Precision Engineering Excellence</p>
          </div>
          
          <div className="facility-overview">
            <div 
              className="facility-image lazy-slide-left" 
              ref={el => addToRefs(el, 'lazy-slide-left')}
            >
              <img src="https://i.postimg.cc/c4c6fMFg/Whats_App_Image_2026_01_30_at_17_48_44.jpg" alt="Modern Manufacturing Facility" />
            </div>
            
            <div 
              className="facility-details lazy-slide-right" 
              ref={el => addToRefs(el, 'lazy-slide-right')}
            >
              <h3>Industrial Hub of Haryana</h3>
              <p>
                Strategically located in the industrial heartland of Rohtak, Haryana, 
                our 10,000 square feet manufacturing facility represents the pinnacle 
                of agricultural and industrial equipment production in Northern India.
              </p>
              
              <p>
                Equipped with cutting-edge machinery and staffed by experienced 
                technicians, our facility operates on a simple yet powerful principle: 
                <strong> precision in every process, quality in every component</strong>.
              </p>
              
              <p>
                From raw material inspection to final dispatch, every product undergoes 
                27 quality checks across 6 production stages, ensuring that only 
                the highest quality products leave our premises.
              </p>
              
              <div className="facility-features">
                <div className="feature">
                  <span className="feature-icon">🏭</span>
                  <span>10,000 Sq. Ft. Production Area</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">⚡</span>
                  <span>24/7 Power Backup</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🔧</span>
                  <span>Modern Machinery</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">👷</span>
                  <span>Experienced Workforce</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="facility-stats lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <div 
              className="stat" 
              ref={el => addToRefs(el)}
            >
              <h3>10,000+</h3>
              <p>Products Manufactured</p>
              <p className="stat-desc">Across All Categories</p>
            </div>
            <div 
              className="stat" 
              ref={el => addToRefs(el)}
            >
              <h3>28+</h3>
              <p>Years of Experience</p>
              <p className="stat-desc">Industry Leadership</p>
            </div>
            <div 
              className="stat" 
              ref={el => addToRefs(el)}
            >
              <h3>50+</h3>
              <p>Skilled Workers</p>
              <p className="stat-desc">Expert Team</p>
            </div>
            <div 
              className="stat" 
              ref={el => addToRefs(el)}
            >
              <h3>27</h3>
              <p>Quality Checks</p>
              <p className="stat-desc">Per Product</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Our 8-Stage Manufacturing Process</h2>
            <p className="section-subtitle">Precision Engineering at Every Step</p>
          </div>
          
          <div className="process-steps">
            {[
              { 
                icon: '📐', 
                title: 'Design & Consultation', 
                desc: 'Custom designs based on specific requirements across technology, electrical, and industrial applications',
                details: ['Customer requirement analysis', 'Technical drawings', 'Material planning', 'Cost estimation']
              },
              { 
                icon: '🔩', 
                title: 'Material Selection', 
                desc: 'Using ISI-certified high-tensile steel, premium electrical components, and industry-grade materials',
                details: ['ISI-grade steel procurement', 'Component quality verification', 'Material testing', 'Storage management']
              },
              { 
                icon: '⚡', 
                title: 'Fabrication', 
                desc: 'Precision cutting, bending, and welding by experienced technicians',
                details: ['CNC precision cutting', 'Hydraulic bending', 'ARC/MIG welding', 'Component fabrication']
              },
              { 
                icon: '🔧', 
                title: 'Assembly', 
                desc: 'Systematic assembly with attention to detail and precision for all product lines',
                details: ['Sub-assembly creation', 'Main assembly', 'Electrical system fitting', 'Quality checks']
              },
              { 
                icon: '🎨', 
                title: 'Surface Treatment', 
                desc: 'Multi-layer protective coating for enhanced durability and rust prevention',
                details: ['Sandblasting/Shot blasting', 'Phosphating treatment', 'Primer coating', 'Anti-rust treatment']
              },
              { 
                icon: '✅', 
                title: 'Quality Testing', 
                desc: 'Rigorous testing for strength, electrical safety, and performance standards',
                details: ['Load testing', 'Electrical safety verification', 'Performance testing', 'Durability checks']
              },
              { 
                icon: '🏭', 
                title: 'Painting & Finishing', 
                desc: 'Advanced painting techniques with durable, weather-resistant coatings',
                details: ['Automated spray painting', 'UV curing process', 'Color matching', 'Quality inspection']
              },
              { 
                icon: '🚚', 
                title: 'Packaging & Dispatch', 
                desc: 'Secure packaging and organized dispatch with documentation',
                details: ['Protective packaging', 'Documentation completion', 'Loading & securing', 'Delivery tracking']
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="step lazy-scale-up" 
                ref={el => addToRefs(el, 'lazy-scale-up')}
              >
                <div className="step-header">
                  <div className="step-number">{}</div>
                  <div className="step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                </div>
                <p className="step-desc">{step.desc}</p>
                <ul className="step-details">
                  {step.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="infrastructure-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Advanced Infrastructure</h2>
            <p className="section-subtitle">Modern Equipment for Superior Quality</p>
          </div>
          
          <div className="infra-grid">
            {[
              { 
                icon: '🛠️', 
                title: 'CNC Machines', 
                desc: 'Computer-controlled precision cutting equipment with ±0.1mm accuracy',
                features: ['Laser cutting', 'Plasma cutting', 'CNC bending', 'Digital control']
              },
              { 
                icon: '🔥', 
                title: 'Welding Stations', 
                desc: 'Multiple welding bays with MIG, TIG, and ARC welding equipment',
                features: ['MIG welding units', 'TIG precision welding', 'ARC heavy-duty', 'Safety ventilation']
              },
              { 
                icon: '🎨', 
                title: 'Paint Booth', 
                desc: 'Automated spray painting system with dust control and curing oven',
                features: ['Automated spraying', 'Dust filtration', 'Temperature control', 'UV curing']
              },
              { 
                icon: '⚖️', 
                title: 'Testing Lab', 
                desc: 'Comprehensive testing facility for load, electrical, stress, and performance',
                features: ['Load testing up to 30 tons', 'Electrical safety testing', 'Stress analysis', 'Performance checks']
              },
              { 
                icon: '📦', 
                title: 'Storage Systems', 
                desc: 'Organized storage for raw materials, components, and finished products',
                features: ['Raw material storage', 'Component inventory', 'Finished goods', 'Climate control']
              },
              { 
                icon: '🚚', 
                title: 'Loading Bay', 
                desc: 'Dedicated dispatch area with hydraulic loading platforms',
                features: ['Hydraulic platforms', 'Crane facilities', 'Secure loading', 'Documentation area']
              },
              { 
                icon: '🔋', 
                title: 'Power Backup', 
                desc: '100% power backup with generators and inverter systems',
                features: ['DG sets', 'Inverter backup', 'UPS systems', 'Power stabilization']
              },
              { 
                icon: '💧', 
                title: 'Water Treatment', 
                desc: 'Eco-friendly water treatment plant for manufacturing processes',
                features: ['Water recycling', 'Effluent treatment', 'Zero discharge', 'Environmental compliance']
              },
              { 
                icon: '🏭', 
                title: 'Assembly Line', 
                desc: 'Streamlined production line with ergonomic workstations and quality checkpoints',
                features: ['Modular workstations', 'Quality checkpoints', 'Ergonomic design', 'Continuous workflow']
              },
              { 
                icon: '🔬', 
                title: 'Quality Control', 
                desc: 'Dedicated QC department with advanced measuring instruments and testing equipment',
                features: ['Dimensional inspection', 'Material testing', 'Surface finish check', 'Final approval']
              }
            ].map((infra, index) => (
              <div 
                key={index}
                className="infra-item lazy-rotate-x" 
                ref={el => addToRefs(el, 'lazy-rotate-x')}
              >
                <div className="infra-icon">{infra.icon}</div>
                <h4>{infra.title}</h4>
                <p>{infra.desc}</p>
                <ul className="infra-features">
                  {infra.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="standards-section">
        <div className="container">
          <div 
            className="section-header lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Safety & Quality Standards</h2>
            <p className="section-subtitle">Our Commitment to Excellence and Safety</p>
          </div>
          
          <div className="standards-content">
            <div 
              className="standards-image lazy-slide-left" 
              ref={el => addToRefs(el, 'lazy-slide-left')}
            >
              <img src="https://i.postimg.cc/15K4Dcv5/Whats_App_Image_2026_01_30_at_17_48_43_(1).jpg" alt="Quality Control and Safety Standards" />
            </div>
            
            <div 
              className="standards-list lazy-slide-right" 
              ref={el => addToRefs(el, 'lazy-slide-right')}
            >
              <div 
                className="standard lazy-scale-up" 
                ref={el => addToRefs(el, 'lazy-scale-up')}
              >
                <div className="standard-icon">🏆</div>
                <div>
                  <h4>ISO Compliant Processes</h4>
                  <p>Following international manufacturing and quality management standards</p>
                  <ul>
                    <li>ISO 9001:2015 Quality Management</li>
                    <li>ISO 14001 Environmental Management</li>
                    <li>Regular internal and external audits</li>
                  </ul>
                </div>
              </div>
              
              <div 
                className="standard lazy-scale-up" 
                ref={el => addToRefs(el, 'lazy-scale-up')}
              >
                <div className="standard-icon">👷</div>
                <div>
                  <h4>Worker Safety Protocols</h4>
                  <p>Comprehensive safety measures and training for all employees</p>
                  <ul>
                    <li>Personal protective equipment (PPE)</li>
                    <li>Regular safety training sessions</li>
                    <li>Emergency response systems</li>
                    <li>Health check-ups and insurance</li>
                  </ul>
                </div>
              </div>
              
              <div 
                className="standard lazy-scale-up" 
                ref={el => addToRefs(el, 'lazy-scale-up')}
              >
                <div className="standard-icon">🌱</div>
                <div>
                  <h4>Environmental Responsibility</h4>
                  <p>Eco-friendly manufacturing practices and waste management</p>
                  <ul>
                    <li>Water treatment and recycling</li>
                    <li>Proper waste disposal systems</li>
                    <li>Energy-efficient operations</li>
                    <li>Reduced carbon footprint initiatives</li>
                  </ul>
                </div>
              </div>
              
              <div 
                className="standard lazy-scale-up" 
                ref={el => addToRefs(el, 'lazy-scale-up')}
              >
                <div className="standard-icon">🔬</div>
                <div>
                  <h4>Quality Assurance</h4>
                  <p>Stringent quality control at every manufacturing stage</p>
                  <ul>
                    <li>27-point quality check system</li>
                    <li>Third-party quality verification</li>
                    <li>Customer feedback integration</li>
                    <li>Continuous improvement programs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="visit-section">
        <div className="container">
          <div 
            className="visit-content lazy-fade-in" 
            ref={el => addToRefs(el, 'lazy-fade-in')}
          >
            <h2>Experience Manufacturing Excellence</h2>
            <p className="visit-subtitle">
              Witness firsthand how we transform raw materials into robust technology, electrical, and industrial solutions
            </p>
            
            <div className="visit-features">
              <div className="visit-feature">
                <div className="feature-icon">👁️</div>
                <h4>Live Production Viewing</h4>
                <p>See our manufacturing processes in action</p>
              </div>
              <div className="visit-feature">
                <div className="feature-icon">🤝</div>
                <h4>Technical Consultation</h4>
                <p>Discuss your requirements with our engineers</p>
              </div>
              <div className="visit-feature">
                <div className="feature-icon">🎯</div>
                <h4>Custom Solutions</h4>
                <p>Get personalized designs for your needs</p>
              </div>
              <div className="visit-feature">
                <div className="feature-icon">📞</div>
                <h4>Direct Factory Pricing</h4>
                <p>Eliminate middlemen, get best prices</p>
              </div>
            </div>
            
            <div className="visit-info">
              <h4>Visit Information</h4>
              <div className="info-grid">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <h5>Factory Address</h5>
                    <p>OPP. JAGDAMBAY COLONY, SEHAJPURA ROAD, Samana (147101), Distt Patiala</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">⏰</span>
                  <div>
                    <h5>Visit Timings</h5>
                    <p>Monday to Saturday: 9:00 AM - 6:00 PM</p>
                    <p>By appointment only</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">👤</span>
                  <div>
                    <h5>Contact Person</h5>
                    <p>Sh. Parveen Kuman (Owner)</p>
                    <p>Mr. Jatin Garg (Factory Manager)</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">📞</span>
                  <div>
                    <h5>Contact Numbers</h5>
                    <p>Owner: 8146896807</p>
                    <p>Factory: 83600-46744</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Workplace;