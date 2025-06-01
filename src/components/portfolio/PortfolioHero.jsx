import { useEffect, useRef } from 'react';
import './PortfolioHero.css';

const PortfolioHero = () => {
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
          sr.reveal('.portfolio-hero-badge', {
            origin: 'top',
            distance: '30px',
            duration: 800,
            delay: 100
          });
          
          sr.reveal('.portfolio-hero-title', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.portfolio-hero-description', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
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
    <section className="portfolio-hero-section" ref={sectionRef}>
      <div className="portfolio-hero-overlay"></div>
      <div className="portfolio-hero-container">
        <div className="portfolio-hero-content">
          <span className="portfolio-hero-badge">Our Portfolio</span>
          <h1 className="portfolio-hero-title">
            Showcasing Our <span className="highlight">Creative Excellence</span>
          </h1>
          <p className="portfolio-hero-description">
            Explore our collection of projects that demonstrate our expertise in design, development, and digital innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;