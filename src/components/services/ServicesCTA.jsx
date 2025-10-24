import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhone, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import './ServicesCTA.css';

const ServicesCTA = () => {
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
          sr.reveal('.services-cta-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.services-cta-actions', {
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
    <section className="services-cta-section" ref={sectionRef}>
      <div className="services-cta-container">
        <div className="services-cta-content">
          <div className="cta-badge">Ready to Start Your Project?</div>
          <h2 className="cta-title">Let's Bring Your Vision to Life</h2>
          <p className="cta-description">
            Ready to transform your business with our digital solutions? Our team is here to help you 
            achieve your goals with innovative design and cutting-edge technology. Let's discuss your 
            project and create something amazing together.
          </p>
          
          <div className="cta-features">
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Free Initial Consultation</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Custom Solutions for Your Business</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Transparent Pricing & Timeline</span>
            </div>
          </div>
        </div>
        
        <div className="services-cta-actions">
          <div className="cta-buttons">
            <Link to="/contact" className="cta-primary-button">
              Start Your Project <FaArrowRight />
            </Link>
            <Link to="/portfolio" className="cta-secondary-button">
              View Our Portfolio
            </Link>
          </div>
          
          <div className="cta-contact-options">
            <h3>Get in Touch</h3>
            <div className="contact-options-grid">
              <div className="contact-option">
                <FaPhone />
                <div>
                  <span className="contact-label">Call Us</span>
                  <a href="tel:+918331994495" className="contact-value">+91 83319 94495</a>
                </div>
              </div>
              <div className="contact-option">
                <FaEnvelope />
                <div>
                  <span className="contact-label">Email Us</span>
                  <a href="mailto:viztechsolutions.in@gmail.com" className="contact-value">viztechsolutions.in@gmail.com</a>
                </div>
              </div>
              <div className="contact-option">
                <FaCalendarAlt />
                <div>
                  <span className="contact-label">Schedule a Call</span>
                  <Link to="/contact" className="contact-value">Book Consultation</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;