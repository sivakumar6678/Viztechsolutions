import { useEffect, useRef, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './PortfolioShowcase.css';
import Alpha from '../../assets/images/portfolio/alalpha fitness-3.PNG';

const PortfolioShowcase = () => {
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
          sr.reveal('.project-showcase-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.project-showcase-image', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.project-showcase-details', {
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

  // Project info data
  const projectInfo = [
    { title: "Client", text: "Alpha Fitness" },
    { title: "Services", text: "UI/UX Design, App Development" },
    { title: "Duration", text: "3 Months" }
  ];

  return (
    <section className="project-showcase-section" ref={sectionRef}>
      <div className="project-showcase-container">
        <div className="project-showcase-header">
          <span className="project-showcase-badge">Featured Project</span>
          <h2 className="project-showcase-title">Alpha Fitness Pro App</h2>
          <p className="project-showcase-subtitle">
            A comprehensive fitness tracking application designed to help users achieve their health and fitness goals.
          </p>
        </div>
        
        <div className="project-showcase-content">
          <div className="project-showcase-image">
            <img src={Alpha} alt="Alpha Fitness Pro App" loading="lazy" />
          </div>
          <div className="project-showcase-details">
            <div className="project-showcase-info">
              {projectInfo.map((item, index) => (
                <div className="project-info-item" key={index}>
                  <h3 className="project-info-title">{item.title}</h3>
                  <p className="project-info-text">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="project-showcase-description">
              <div className="description-section">
                <h3>Project Overview</h3>
                <p>
                  Alpha Fitness Pro is a comprehensive fitness tracking application designed to help users monitor their workouts, nutrition, and progress. The app provides personalized workout plans, nutrition tracking, and progress analytics to help users achieve their fitness goals.
                </p>
              </div>
              
              <div className="description-section">
                <h3>The Challenge</h3>
                <p>
                  The main challenge was to create an intuitive and engaging user interface that would motivate users to maintain their fitness routines while providing comprehensive tracking features without overwhelming them.
                </p>
              </div>
              
              <div className="description-section">
                <h3>Our Solution</h3>
                <p>
                  We designed a clean, user-friendly interface with a focus on visual progress tracking and personalized recommendations. The app features an intuitive dashboard, customizable workout plans, and detailed analytics to help users stay motivated and track their progress effectively.
                </p>
              </div>
              
              <div className="project-showcase-cta">
                <a 
                  href="https://www.behance.net/gallery/209206527/ALPHA-FITNESS-PRO-APP-UNFINISHED-UI" 
                  className="project-showcase-button" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt /> View on Behance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;