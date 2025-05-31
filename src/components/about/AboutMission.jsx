import { useEffect, useRef } from 'react';
import './AboutMission.css';
import missionicons from '../../assets/images/mission-icon.png'
import visionicons from '../../assets/images/vision-icon.png'
import valuesicons from '../../assets/images/values-icon.png'

const AboutMission = () => {
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
          sr.reveal('.mission-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.mission-card', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200,
            interval: 100
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section className="mission-section" ref={sectionRef}>
      <div className="mission-container">
        {/* Mission Header */}
        <div className="mission-header">
          <h2 className="mission-title">Our Mission & Values</h2>
          <p className="mission-description">
            At VizTech Solutions, we're guided by a set of core values that define who we are and how we work.
            These principles shape our approach to every project and client relationship.
          </p>
        </div>
        
        {/* Mission Cards */}
        <div className="mission-cards">
          <div className="mission-card">
            <div className="mission-card-icon">
              <img src={missionicons} alt="Mission Icon" />
            </div>
            <h3 className="mission-card-title">Our Mission</h3>
            <p className="mission-card-text">
              To empower businesses with innovative digital solutions that drive growth, enhance user experiences, 
              and create lasting value. We strive to be a trusted partner in our clients' digital journey, 
              helping them navigate the complexities of the digital landscape with confidence.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="mission-card-icon">
              <img src={visionicons} alt="Vision Icon" />
            </div>
            <h3 className="mission-card-title">Our Vision</h3>
            <p className="mission-card-text">
              To be recognized as a leading digital agency that sets new standards in design excellence and 
              technological innovation. We envision a future where our creative solutions help businesses 
              of all sizes thrive in an increasingly digital world.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="mission-card-icon">
              <img src={valuesicons} alt="Values Icon" />
            </div>
            <h3 className="mission-card-title">Our Values</h3>
            <ul className="mission-values-list">
              <li><strong>Excellence:</strong> We pursue the highest standards in everything we do</li>
              <li><strong>Innovation:</strong> We embrace creativity and forward-thinking approaches</li>
              <li><strong>Integrity:</strong> We operate with honesty, transparency, and ethical practices</li>
              <li><strong>Collaboration:</strong> We believe in the power of teamwork and partnership</li>
              <li><strong>Client-Centric:</strong> We prioritize our clients' needs and success</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;