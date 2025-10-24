import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';
import './PortfolioCTA.css';

const PortfolioCTA = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Using dynamic import for ScrollReveal
    const initScrollReveal = async () => {
      try {
        const ScrollRevealModule = await import('scrollreveal');
        const ScrollReveal = ScrollRevealModule.default;
        
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '50px',
          duration: 1000,
          delay: 100,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          mobile: true,
          reset: false
        });

        if (sectionRef.current) {
          sr.reveal('.portfolio-cta-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.portfolio-cta-actions', {
            origin: 'right',
            distance: '50px',
            duration: 1000,
            delay: 300
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section className="portfolio-cta-section" ref={sectionRef}>
      <div className="portfolio-cta-container">
        <div className="portfolio-cta-content">
          <div className="cta-badge">Ready to Start Your Project?</div>
          <h2 className="cta-title">Let's Create Your Next Success Story</h2>
          <p className="cta-description">
            Inspired by our work? Let's discuss how we can help bring your vision to life. 
            Our team is ready to create a custom solution that perfectly fits your business 
            needs and exceeds your expectations.
          </p>
          
          <div className="cta-features">
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Free Project Consultation</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Custom Solution Design</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Transparent Project Timeline</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Ongoing Support & Maintenance</span>
            </div>
          </div>
        </div>
        
        <div className="portfolio-cta-actions">
          <div className="cta-buttons">
            <Link to="/contact" className="cta-primary-button">
              Start Your Project <FaArrowRight />
            </Link>
            <Link to="/services" className="cta-secondary-button">
              View Our Services
            </Link>
          </div>
          
          <div className="cta-contact-methods">
            <h3>Get in Touch Today</h3>
            <div className="contact-methods-grid">
              <div className="contact-method">
                <div className="method-icon">
                  <FaPhone />
                </div>
                <div className="method-content">
                  <span className="method-label">Call Us</span>
                  <a href="tel:+918331994495" className="method-value">+91 83319 94495</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FaEnvelope />
                </div>
                <div className="method-content">
                  <span className="method-label">Email Us</span>
                  <a href="mailto:viztechsolutions.in@gmail.com" className="method-value">viztechsolutions.in@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="method-icon">
                  <FaComments />
                </div>
                <div className="method-content">
                  <span className="method-label">Let's Chat</span>
                  <Link to="/contact" className="method-value">Send Message</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cta-testimonial">
            <blockquote>
              "VizTech Solutions delivered exactly what we needed. Their attention to detail 
              and commitment to quality is outstanding."
            </blockquote>
            <cite>- Rajesh Kumar, Varada Jewellers</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioCTA;