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
          sr.reveal('.about-intro-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.about-intro-image', {
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
    <section className="about-intro-section" ref={sectionRef}>
      <div className="about-intro-container">
        <div className="about-intro-content">
          <div className="about-intro-badge">Our Story</div>
          <h2 className="about-intro-title">Bringing Your Digital Vision to Life</h2>
          

          <p className="about-intro-text">
            Founded in 2023, VizTech Solutions was born from a passion for creating exceptional digital experiences. 
            Our journey began with a simple mission: to help businesses transform their digital presence through 
            innovative design and technology solutions.
          </p>
          <p className="about-intro-text">
            What started as a small team of dedicated designers and developers has grown into a full-service 
            digital agency, serving clients across various industries. Our commitment to quality, creativity, 
            and client satisfaction has been the cornerstone of our success.
          </p>
          <p className="about-intro-text">
            Today, we continue to push the boundaries of digital design and development, helping our clients 
            stay ahead in an ever-evolving digital landscape. Our team combines technical expertise with 
            creative thinking to deliver solutions that not only look great but also drive results.
          </p>
          <div className="about-intro-stats">
            <div className="about-stat-item">
              <div className="about-stat-number">12+</div>
              <div className="about-stat-text">Projects Completed</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-number">10+</div>
              <div className="about-stat-text">Happy Clients</div>
            </div>
            <div className="about-stat-item">
              <div className="about-stat-number">100%</div>
              <div className="about-stat-text">Client Satisfaction</div>
            </div>
          </div>
        </div>
        <div className="about-intro-image">
          <img src={aboutintro} alt="VizTech Solutions Team" />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;