import { useEffect, useRef } from 'react';
import { FaEye, FaHeart, FaAward, FaUsers } from 'react-icons/fa';
import './PortfolioOverview.css';

const PortfolioOverview = () => {
  const sectionRef = useRef(null);

  const achievements = [
    {
      id: 1,
      icon: <FaEye />,
      number: '12+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries'
    },
    {
      id: 2,
      icon: <FaHeart />,
      number: '10+',
      label: 'Happy Clients',
      description: 'Satisfied clients who trust our expertise and creativity'
    },
    {
      id: 3,
      icon: <FaAward />,
      number: '100%',
      label: 'Success Rate',
      description: 'All projects delivered on time and within budget'
    },
    {
      id: 4,
      icon: <FaUsers />,
      number: '5+',
      label: 'Industries Served',
      description: 'Diverse portfolio spanning multiple business sectors'
    }
  ];

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
          sr.reveal('.portfolio-overview-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.achievement-item', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 300,
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
    <section className="portfolio-overview-section" ref={sectionRef}>
      <div className="portfolio-overview-container">
        <div className="portfolio-overview-content">
          <div className="overview-badge">Our Work</div>
          <h2 className="overview-title">Creating Digital Experiences That Matter</h2>
          <p className="overview-description">
            Our portfolio showcases a diverse range of projects that demonstrate our expertise 
            in web design, development, branding, and digital marketing. Each project represents 
            our commitment to excellence and our ability to transform ideas into impactful digital solutions.
          </p>
          <p className="overview-description">
            From startups to established businesses, we've helped clients across various industries 
            achieve their digital goals. Our approach combines creativity, technical expertise, 
            and strategic thinking to deliver results that exceed expectations.
          </p>
          
          <div className="overview-highlights">
            <div className="highlight-item">
              <h4>Custom Solutions</h4>
              <p>Every project is tailored to meet specific client needs and business objectives</p>
            </div>
            <div className="highlight-item">
              <h4>Modern Technologies</h4>
              <p>We use the latest tools and frameworks to ensure optimal performance</p>
            </div>
            <div className="highlight-item">
              <h4>User-Centered Design</h4>
              <p>Our designs prioritize user experience and conversion optimization</p>
            </div>
          </div>
        </div>
        
        <div className="portfolio-achievements">
          {achievements.map(achievement => (
            <div className="achievement-item" key={achievement.id}>
              <div className="achievement-icon">
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioOverview;