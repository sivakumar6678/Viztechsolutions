import { useEffect, useRef } from 'react';
import './AboutIntro.css';
import aboutintro from '../../assets/images/about-1.png';

const AboutIntro = () => {
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
          sr.reveal('.about-hero-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.about-hero-image', {
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
    <section className="about-hero-section" ref={sectionRef}>
      <div className="about-hero-container">
        {/* Hero Content */}
        <div className="about-hero-content">
          <div className="about-hero-badge">About VizTech Solutions</div>
          <h1 className="about-hero-title">
            Crafting Meaningful Digital Experiences
          </h1>
          <p className="about-hero-subtitle">
            We believe that design is more than just aesthetics—it's about creating meaningful 
            experiences that connect with users and tell compelling stories.
          </p>
          
          <div className="about-hero-description">
            <p>
              At VizTechsolutions, we believe that design is more than just aesthetics—it's about crafting meaningful 
              experiences that connect with users. Every design we create tells a story, reflecting your brand's values, 
              vision, and purpose.
            </p>
            <p>
              We specialize in UI/UX design, web development, data dashboards, branding, and advertising strategies, 
              transforming ideas into visually compelling and user-friendly digital experiences. Our mission is to help 
              businesses establish a strong online presence with intuitive interfaces, data-driven insights, and strategic 
              branding solutions that engage and inspire audiences.
            </p>
          </div>
          
          <div className="about-hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-number">100+</div>
              <div className="hero-stat-text">Projects Completed</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">98%</div>
              <div className="hero-stat-text">Client Satisfaction</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">6</div>
              <div className="hero-stat-text">Core Services</div>
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="about-hero-image">
          <div className="hero-image-wrapper">
            <img src={aboutintro} alt="VizTech Solutions - Digital Design Excellence" />
            <div className="hero-image-overlay"></div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="hero-floating-elements">
        <div className="floating-element floating-1"></div>
        <div className="floating-element floating-2"></div>
        <div className="floating-element floating-3"></div>
      </div>
    </section>
  );
};

export default AboutIntro;