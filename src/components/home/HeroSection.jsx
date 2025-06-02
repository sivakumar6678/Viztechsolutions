import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaEye, FaPlay } from 'react-icons/fa';
import './HeroSection.css';
import bg2 from '../../assets/images/BG3.png';

const HeroSection = () => {
  const sectionRef = useRef(null);

  // Initialize animations when component mounts
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

        // Apply animations with better sequencing
        if (sectionRef.current) {
          // Welcome section animations
          sr.reveal('.hero-welcome-badge', {
            origin: 'top',
            distance: '20px',
            duration: 600,
            delay: 100
          });
          
          sr.reveal('.hero-welcome-title', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 300
          });
          
          sr.reveal('.hero-welcome-subtitle', {
            origin: 'bottom',
            distance: '20px',
            duration: 600,
            delay: 500
          });
          
          sr.reveal('.hero-welcome-cta', {
            scale: 0.8,
            duration: 600,
            delay: 700
          });
          
          // Section Two animations
          sr.reveal('.hero-section-two-badge', {
            origin: 'top',
            distance: '20px',
            duration: 600,
            delay: 200
          });
          
          sr.reveal('.hero-section-two-title', {
            origin: 'left',
            distance: '40px',
            duration: 800,
            delay: 400
          });
          
          sr.reveal('.hero-section-two-description', {
            origin: 'left',
            distance: '30px',
            duration: 600,
            delay: 600
          });
          
          sr.reveal('.hero-section-two-feature', {
            origin: 'left',
            distance: '30px',
            duration: 600,
            delay: 800,
            interval: 200
          });
          
          sr.reveal('.hero-section-two-buttons', {
            origin: 'bottom',
            distance: '20px',
            duration: 600,
            delay: 1200
          });
          
          sr.reveal('.hero-section-two-visual', {
            origin: 'right',
            distance: '50px',
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
    <>
      {/* First Section: Welcome Section */}
      <section className="hero-welcome-main-section" ref={sectionRef}>
        {/* Background Elements */}
        <div className="hero-bg"></div>
        
        {/* Animated Shapes */}
        <div className="hero-shape hero-shape-1"></div>
        <div className="hero-shape hero-shape-2"></div>
        <div className="hero-shape hero-shape-3"></div>
        
        <div className="hero-welcome-container">
          <div className="hero-welcome-section">
            <div className="hero-welcome-badge">
              <span className="hero-badge-text">🚀 Premium Digital Solutions</span>
            </div>
            
            <h1 className="hero-welcome-title">
              WELCOME TO <span className="hero-brand-name">VIZTECHSOLUTIONS</span>
            </h1>
            
            <div className="hero-welcome-subtitle">
              <span className="hero-subtitle-highlight">DESIGN</span>
              <span className="hero-subtitle-separator">•</span>
              <span className="hero-subtitle-highlight">DEVELOP</span>
              <span className="hero-subtitle-separator">•</span>
              <span className="hero-subtitle-highlight">DELIVER</span>
            </div>
            
            <div className="hero-welcome-cta">
              <Link to="/contact" className="hero-cta-book-call">
                <span>Book a Free Consultation</span>
                <FaArrowRight className="hero-cta-icon" />
              </Link>
              <div className="hero-cta-note">
                💡 Free 30-minute strategy session
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Transform Ideas Section */}
      <section className="hero-section-two">
        <div className="hero-section-two-container">
          {/* Left Content */}
          <div className="hero-section-two-content">
            {/* Badge */}
            <div className="hero-section-two-badge">
              <span className="hero-section-two-badge-icon">⭐</span>
              <span>Digital Excellence</span>
            </div>
            
            {/* Main Title */}
            <h2 className="hero-section-two-title">
              Transforming Ideas into 
              <span className="hero-section-two-highlight"> Digital Reality</span>
            </h2>
            
            {/* Description */}
            <p className="hero-section-two-description">
              We craft exceptional digital experiences that elevate brands, engage users, and drive business growth. 
              From stunning designs to powerful web solutions, we bring your vision to life.
            </p>
            
            {/* Features Grid */}
            <div className="hero-section-two-features">
              <div className="hero-section-two-feature">
                <div className="hero-section-two-feature-icon">🎨</div>
                <div className="hero-section-two-feature-text">
                  <h4>Creative Design</h4>
                  <p>Stunning visuals that captivate</p>
                </div>
              </div>
              
              <div className="hero-section-two-feature">
                <div className="hero-section-two-feature-icon">⚡</div>
                <div className="hero-section-two-feature-text">
                  <h4>Fast Development</h4>
                  <p>Quick turnaround times</p>
                </div>
              </div>
              
              <div className="hero-section-two-feature">
                <div className="hero-section-two-feature-icon">🔧</div>
                <div className="hero-section-two-feature-text">
                  <h4>24/7 Support</h4>
                  <p>Always here when you need us</p>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="hero-section-two-buttons">
              <Link to="/contact" className="hero-section-two-btn-primary">
                <span>Start Your Project</span>
                <FaArrowRight />
              </Link>
              <Link to="/portfolio" className="hero-section-two-btn-secondary">
                <FaEye />
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
          
          {/* Right Visual */}
          <div className="hero-section-two-visual">
            <div className="hero-section-two-image-wrapper">
              <img src={bg2} alt="Digital Solutions" className="hero-section-two-image" />
              <div className="hero-section-two-overlay">
                <span>Innovation in Action</span>
              </div>
            </div>
            

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;