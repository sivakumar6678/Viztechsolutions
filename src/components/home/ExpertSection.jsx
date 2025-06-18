import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './ExpertSection.css';
import BG2 from '../../assets/images/BG2.png';

const ExpertSection = () => {
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

  // Expert features data
  const expertFeatures = [
    "Innovative design solutions tailored to your brand",
    "Dedicated team of experienced professionals",
    "Collaborative approach focused on your goals",
    "Attention to detail and commitment to quality",
    "Timely delivery and transparent communication",
    "Continuous support and post-launch assistance"
  ];

  return (
    <section className="expert-section" ref={sectionRef}>
      <div className="expert-container">
        {/* Left Side: Image */}
        <div className="expert-image">
          <img src={BG2} alt="Expert Team" loading="lazy" />
        </div>
        
        {/* Right Side: Content */}
        <div className="expert-content">
          <div className="expert-tag">Why Choose Us</div>
          <h2 className="expert-title">Expert Team, Exceptional Results</h2>
          <ul className="expert-list">
            {expertFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="expert-button-container">
            <Link to="/about" className="expert-button">Learn More About Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSection;