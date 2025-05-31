import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaEye } from 'react-icons/fa';
import './HeroSection.css';

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

        // Apply animations
        if (sectionRef.current) {
          sr.reveal('.hero-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.hero-image', {
            origin: 'right',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.hero-stats', {
            distance: '0px',
            duration: 1200,
            delay: 500,
            scale: 0.9,
            opacity: 0
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section className="hero-section" ref={sectionRef}>
      {/* Background Elements */}
      <div className="hero-bg"></div>
      
      {/* Animated Shapes */}
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>
      <div className="hero-shape hero-shape-3"></div>
      
      <div className="hero-container">
        {/* Left Side: Content */}
        <div className="hero-content">
          <div className="hero-tagline">Digital Excellence</div>
          
          <h1 className="hero-title">
            Transforming Ideas into <span>Digital Reality</span>
          </h1>
          
          <p className="hero-description">
            We craft exceptional digital experiences that elevate brands, engage users, and drive business growth. 
            From stunning designs to powerful web solutions, we bring your vision to life.
          </p>
          
          <div className="hero-cta-container">
            <Link to="/contact" className="hero-cta-primary">
              Start Your Project <FaArrowRight />
            </Link>
            <Link to="/portfolio" className="hero-cta-secondary">
              View Our Work <FaEye />
            </Link>
          </div>
        </div>
        
        {/* Right Side: Image */}
        <div className="hero-image">
          <div className="hero-image-container">
            <img src="/images/BG-2.png" alt="Digital Design Illustration" className="responsive-hero-image" />
            
            {/* Stats Card */}
            <div className="hero-stats">
              <div className="hero-stat-item">
                <div className="hero-stat-number">12+</div>
                <div className="hero-stat-text">Projects</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">10+</div>
                <div className="hero-stat-text">Clients</div>
              </div>
              <div className="hero-stat-item">
                <div className="hero-stat-number">100%</div>
                <div className="hero-stat-text">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;