import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ExpertSection.css';
import BG2 from '../../assets/images/BG2.png'

const ExpertSection = () => {
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
          sr.reveal('.expert-image', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.expert-content', {
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
    <section className="expert-section" ref={sectionRef}>
      {/* Left Side: Image */}
      <div className="expert-image">
        <img src={BG2} alt="Expert Team" />
      </div>
      
      {/* Right Side: Content */}
      <div className="expert-content">
        <div className="expert-tag">Why Choose Us</div>
        <h2 className="expert-title">Expert Team, Exceptional Results</h2>
        <ul className="expert-list">
          <li>Innovative design solutions tailored to your brand</li>
          <li>Dedicated team of experienced professionals</li>
          <li>Collaborative approach focused on your goals</li>
          <li>Attention to detail and commitment to quality</li>
          <li>Timely delivery and transparent communication</li>
          <li>Continuous support and post-launch assistance</li>
        </ul>
        <Link to="/about" className="expert-button">Learn More About Us</Link>
      </div>
    </section>
  );
};

export default ExpertSection;