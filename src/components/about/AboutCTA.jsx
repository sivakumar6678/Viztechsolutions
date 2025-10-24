import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';
import './AboutCTA.css';

const AboutCTA = () => {
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
          sr.reveal('.cta-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.cta-actions', {
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
    <section className="about-cta-section" ref={sectionRef}>
      <div className="about-cta-container">
        <div className="cta-content">
          <div className="cta-badge">Ready to Get Started?</div>
          <h2 className="cta-title">Let's Create Something Amazing Together</h2>
          <p className="cta-description">
            Ready to transform your digital presence? Our team is here to help you achieve your goals 
            with innovative design solutions and cutting-edge technology. Let's discuss your project 
            and bring your vision to life.
          </p>
          
          <div className="cta-features">
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Free Initial Consultation</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Custom Solutions Tailored to Your Needs</span>
            </div>
            <div className="cta-feature">
              <div className="cta-feature-icon">✓</div>
              <span>Ongoing Support & Maintenance</span>
            </div>
          </div>
        </div>
        
        <div className="cta-actions">
          <div className="cta-buttons">
            <Link to="/contact" className="cta-primary-button">
              Start Your Project <FaArrowRight />
            </Link>
            <Link to="/portfolio" className="cta-secondary-button">
              View Our Work
            </Link>
          </div>
          
          <div className="cta-contact-info">
            <div className="cta-contact-item">
              <FaPhone />
              <div>
                <span className="cta-contact-label">Call Us</span>
                <a href="tel:+918331994495" className="cta-contact-value">+91 83319 94495</a>
              </div>
            </div>
            <div className="cta-contact-item">
              <FaEnvelope />
              <div>
                <span className="cta-contact-label">Email Us</span>
                <a href="mailto:viztechsolutions.in@gmail.com" className="cta-contact-value">viztechsolutions.in@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCTA;