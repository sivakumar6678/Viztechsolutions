import { useEffect, useRef } from 'react';
import './IntroSection.css';
import bg3 from '../../assets/images/BG3.png'

const IntroSection = () => {
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
          sr.reveal('.intro-heading', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.intro-image', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.intro-content', {
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
    <section className="intro-section" ref={sectionRef}>
      <h2 className="intro-heading">Transforming Ideas into Digital Excellence</h2>
      
      <div className="intro-container">
        {/* Left Side: Image */}
        <div className="intro-image">
          <img src={bg3} alt="Digital Design Process" className="responsive-image" />
        </div>
        
        {/* Right Side: Content */}
        <div className="intro-content">
          <h3 className="intro-title">We Craft Digital Experiences That Make an Impact</h3>
          <p className="intro-description">
            At <strong>VizTech Solutions</strong>, we believe that design is more than just aesthetics—it's about crafting meaningful experiences that connect with users. Every design we create tells a story, reflecting your brand's values, vision, and purpose.
          </p>
          <p className="intro-description">
            Our team of passionate designers and developers work together to create digital solutions that not only look stunning but also deliver results. From responsive websites to intuitive user interfaces, we focus on creating experiences that engage, inspire, and convert.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;