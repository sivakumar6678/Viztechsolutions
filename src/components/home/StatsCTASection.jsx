import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './StatsCTASection.css';

const StatsCTASection = () => {
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
          sr.reveal('.stats-left', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.cta-right', {
            origin: 'right',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section className="stats-cta-section" ref={sectionRef}>
      <div className="stats-cta-container">
        {/* Left Side: Stats */}
        <div className="stats-left">
          <div className="stats-block">
            <div className="stats-number">12+</div>
            <div className="stats-text">Projects</div>
          </div>
          <div className="stats-block">
            <div className="stats-number">10+</div>
            <div className="stats-text">Clients</div>
          </div>
          <div className="stats-block">
            <div className="stats-number">100%</div>
            <div className="stats-text">Satisfaction</div>
          </div>
        </div>
        
        {/* Right Side: CTA */}
        <div className="cta-right">
          <div className="cta-top">
            <h2 className="cta-heading">Ready to transform your digital presence?</h2>
          </div>
          <div className="cta-bottom">
            <Link to="/contact" className="cta-button">Get Started</Link>
            <Link to="/portfolio" className="see-projects">See Our Projects →</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCTASection;