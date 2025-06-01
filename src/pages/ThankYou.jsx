import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaHome, FaArrowRight, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import './ThankYou.css';

const ThankYou = () => {
  const sectionRef = useRef(null);

  // Set page title
  useEffect(() => {
    document.title = 'Thank You | VizTech Solutions';
  }, []);

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
          sr.reveal('.thank-you-card', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.next-steps', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 400
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  return (
    <main className="thank-you-page" ref={sectionRef}>
      <section className="thank-you-section">
        <div className="thank-you-container">
          <div className="thank-you-card">
            <div className="thank-you-icon">
              <FaCheckCircle />
            </div>
            <h1 className="thank-you-title">Thank You!</h1>
            <p className="thank-you-message">
              Your message has been successfully sent. We appreciate your interest in VizTech Solutions 
              and are excited about the possibility of working with you.
            </p>
            
            <div className="response-timeline">
              <h3>What happens next?</h3>
              <div className="timeline-steps">
                <div className="timeline-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Message Review</h4>
                    <p>Our team will carefully review your project requirements</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Initial Response</h4>
                    <p>We'll get back to you within 24 hours with initial thoughts</p>
                  </div>
                </div>
                <div className="timeline-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Detailed Proposal</h4>
                    <p>Receive a comprehensive proposal with timeline and pricing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="thank-you-actions">
              <Link to="/" className="thank-you-btn primary">
                <FaHome /> Back to Home
              </Link>
              <Link to="/services" className="thank-you-btn secondary">
                Explore Our Services <FaArrowRight />
              </Link>
            </div>
          </div>
          
          <div className="next-steps">
            <h2>Need Immediate Assistance?</h2>
            <p>If you have urgent questions or need immediate support, feel free to reach out to us directly.</p>
            
            <div className="contact-options">
              <a href="tel:+918331994495" className="contact-option">
                <FaPhone />
                <div>
                  <span className="contact-label">Call Us</span>
                  <span className="contact-value">+91 83319 94495</span>
                </div>
              </a>
              
              <a href="mailto:info@viztechsolutions.in" className="contact-option">
                <FaEnvelope />
                <div>
                  <span className="contact-label">Email Us</span>
                  <span className="contact-value">info@viztechsolutions.in</span>
                </div>
              </a>
              
              <div className="contact-option">
                <FaClock />
                <div>
                  <span className="contact-label">Business Hours</span>
                  <span className="contact-value">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="social-follow">
              <h3>Follow Us for Updates</h3>
              <p>Stay connected with us on social media for the latest updates, tips, and insights.</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/viztechsolutions" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://twitter.com/viztechsolutions" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
                <a href="https://instagram.com/viztechsolutions" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ThankYou;