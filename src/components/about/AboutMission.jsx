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
          sr.reveal('.about-section-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.about-who-content', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200
          });
          
          sr.reveal('.service-item', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 300
          });
          
          sr.reveal('.service-tag', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 300,
            interval: 100
          });
          
          sr.reveal('.about-mission-statement', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 400
          });
          
          sr.reveal('.about-mission-statement', {
            origin: 'bottom',
            distance: '30px',
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
    <section className="about-content-section" ref={sectionRef}>
      <div className="about-content-container">
        {/* Who We Are Section */}
        <div className="about-who-we-are">
          <div className="about-section-header">
            <h2 className="about-section-title">Who We Are</h2>
            <div className="about-title-underline"></div>
          </div>
          <div className="about-who-content">
            <p className="about-who-text">
              Founded with a vision to blend visualization and technology, VizTechsolutions is a design-driven 
              company that delivers innovative solutions tailored to your business needs. Whether you're a startup, 
              a growing business, or an established brand, we help you build impactful digital experiences that 
              leave a lasting impression.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="about-what-we-offer">
          <div className="about-section-header">
            <h2 className="about-section-title">What We Offer</h2>
            <div className="about-title-underline"></div>
          </div>
          
          <div className="services-tags">
            <div className="service-tag">
              <span className="service-icon">🎨</span>
              <span className="service-name">UI/UX Design</span>
            </div>
            <div className="service-tag">
              <span className="service-icon">🏷️</span>
              <span className="service-name">Logo Branding</span>
            </div>
            <div className="service-tag">
              <span className="service-icon">📱</span>
              <span className="service-name">Product Prototyping</span>
            </div>
            <div className="service-tag">
              <span className="service-icon">📖</span>
              <span className="service-name">Magazine Publications</span>
            </div>
            <div className="service-tag">
              <span className="service-icon">📈</span>
              <span className="service-name">Marketing Strategies</span>
            </div>
            <div className="service-tag">
              <span className="service-icon">📊</span>
              <span className="service-name">Business Analytics</span>
            </div>
            <div className="service-tag">
              <span className="service-icon">💻</span>
              <span className="service-name">Web Solutions</span>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="about-mission-statement">
          <div className="mission-statement-content">
            <blockquote className="mission-quote">
              "At VizTech Solutions, we aim to deliver innovative design solutions while ensuring all client 
              requirements are met. We view design as a way to tell a compelling story, helping businesses 
              shape their unique identities."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;