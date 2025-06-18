import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaEye, FaPlay, FaChevronDown } from 'react-icons/fa';
import './HeroSection.css';
import bg2 from '../../assets/images/BG3.png';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll function for mobile "scroll down" button
  const scrollToNextSection = () => {
    const nextSection = document.querySelector('.hero-section-two');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initialize animations when component mounts
  useEffect(() => {
    // Using dynamic import for ScrollReveal
    const initScrollReveal = async () => {
      try {
        const ScrollRevealModule = await import('scrollreveal');
        const ScrollReveal = ScrollRevealModule.default;
        
        // Base configuration for ScrollReveal
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '50px',
          duration: 1000,
          delay: 100,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          mobile: true,
          reset: false
        });

        // Animation configurations
        const animations = {
          // Welcome section animations
          welcomeBadge: {
            selector: '.hero-welcome-badge',
            config: {
              origin: 'top',
              distance: '20px',
              duration: 600,
              delay: 100
            }
          },
          welcomeTitle: {
            selector: '.hero-welcome-title',
            config: {
              origin: 'bottom',
              distance: '30px',
              duration: 800,
              delay: 300
            }
          },
          welcomeSubtitle: {
            selector: '.hero-welcome-subtitle',
            config: {
              origin: 'bottom',
              distance: '20px',
              duration: 600,
              delay: 500
            }
          },
          welcomeCta: {
            selector: '.hero-welcome-cta',
            config: {
              scale: 0.8,
              duration: 600,
              delay: 700
            }
          },
          mobileScroll: {
            selector: '.mobile-scroll-indicator',
            config: {
              origin: 'bottom',
              distance: '20px',
              duration: 600,
              delay: 900
            }
          },
          
          // Section Two animations
          sectionTwoBadge: {
            selector: '.hero-section-two-badge',
            config: {
              origin: 'top',
              distance: '20px',
              duration: 600,
              delay: 200
            }
          },
          sectionTwoTitle: {
            selector: '.hero-section-two-title',
            config: {
              origin: isMobile ? 'bottom' : 'left',
              distance: isMobile ? '30px' : '40px',
              duration: 800,
              delay: 400
            }
          },
          sectionTwoDescription: {
            selector: '.hero-section-two-description',
            config: {
              origin: isMobile ? 'bottom' : 'left',
              distance: '30px',
              duration: 600,
              delay: 600
            }
          },
          sectionTwoFeature: {
            selector: '.hero-section-two-feature',
            config: {
              origin: isMobile ? 'bottom' : 'left',
              distance: '30px',
              duration: 600,
              delay: 800,
              interval: 200
            }
          },
          sectionTwoButtons: {
            selector: '.hero-section-two-buttons',
            config: {
              origin: 'bottom',
              distance: '20px',
              duration: 600,
              delay: 1200
            }
          },
          sectionTwoVisual: {
            selector: '.hero-section-two-visual',
            config: {
              origin: isMobile ? 'bottom' : 'right',
              distance: '50px',
              duration: 1000,
              delay: isMobile ? 1400 : 400
            }
          }
        };

        // Apply animations if section is available
        if (sectionRef.current) {
          // Apply all animations
          Object.values(animations).forEach(animation => {
            sr.reveal(animation.selector, animation.config);
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, [isMobile]);

  // Features data for better maintainability
  const features = [
    {
      icon: "🎨",
      title: "Creative Design",
      description: "Stunning visuals that captivate"
    },
    {
      icon: "⚡",
      title: "Fast Development",
      description: "Quick turnaround times"
    },
    {
      icon: "🔧",
      title: "24/7 Support",
      description: "Always here when you need us"
    }
  ];

  // Hero image component for reuse
  const HeroVisual = ({ className = "" }) => (
    <div className={`hero-section-two-visual ${className}`}>
      <div className="hero-section-two-image-wrapper">
        <img 
          src={bg2} 
          alt="Digital Solutions" 
          className="hero-section-two-image"
          loading="lazy"
        />
        <div className="hero-section-two-overlay">
          <span>Innovation in Action</span>
        </div>
      </div>
    </div>
  );

  // Feature item component
  const FeatureItem = ({ icon, title, description }) => (
    <div className="hero-section-two-feature">
      <div className="hero-section-two-feature-icon">{icon}</div>
      <div className="hero-section-two-feature-text">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );

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
            {/* Welcome Badge */}
            <div className="hero-welcome-badge">
              <span className="hero-badge-text">🚀 Premium Digital Solutions</span>
            </div>
            
            {/* Main Title */}
            <h1 className="hero-welcome-title">
              WELCOME TO <span className="hero-brand-name">VIZTECHSOLUTIONS</span>
            </h1>
            
            {/* Subtitle with Highlights */}
            <div className="hero-welcome-subtitle">
              <span className="hero-subtitle-highlight">DESIGN</span>
              <span className="hero-subtitle-separator">•</span>
              <span className="hero-subtitle-highlight">DEVELOP</span>
              <span className="hero-subtitle-separator">•</span>
              <span className="hero-subtitle-highlight">DELIVER</span>
            </div>
            
            {/* CTA Section */}
            <div className="hero-welcome-cta">
              <Link to="/contact" className="hero-cta-book-call">
                <span>Book a Free Consultation</span>
                <FaArrowRight className="hero-cta-icon" />
              </Link>
              <div className="hero-cta-note">
                💡 Free 30-minute strategy session
              </div>
            </div>
            
            {/* Mobile Scroll Indicator */}
            <div className="mobile-scroll-indicator" onClick={scrollToNextSection}>
              <span>Scroll Down</span>
              <FaChevronDown className="scroll-icon" />
            </div>
          </div>
        </div>
      </section>

      {/* Second Section: Transform Ideas Section */}
      <section className="hero-section-two">
        <div className="hero-section-two-container">
          {/* Mobile Order Control - Visual will appear first on mobile */}
          {isMobile && <HeroVisual className="mobile-first" />}
          
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
              {features.map((feature, index) => (
                <FeatureItem 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
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
          
          {/* Right Visual - Only shown on desktop */}
          {!isMobile && <HeroVisual />}
        </div>
      </section>
    </>
  );
};

export default HeroSection;