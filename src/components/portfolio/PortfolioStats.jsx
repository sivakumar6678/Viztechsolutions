import { useEffect, useRef } from 'react';
import { FaProjectDiagram, FaUsers, FaCalendarAlt, FaAward } from 'react-icons/fa';
import './PortfolioStats.css';

const PortfolioStats = () => {
  const sectionRef = useRef(null);

  const stats = [
    {
      id: 1,
      icon: <FaProjectDiagram />,
      number: '12+',
      label: 'Projects Completed',
      description: 'Successfully delivered across various industries'
    },
    {
      id: 2,
      icon: <FaUsers />,
      number: '10+',
      label: 'Happy Clients',
      description: 'Satisfied clients who trust our expertise'
    },
    {
      id: 3,
      icon: <FaCalendarAlt />,
      number: '2+',
      label: 'Years Experience',
      description: 'Building digital solutions with passion'
    },
    {
      id: 4,
      icon: <FaAward />,
      number: '100%',
      label: 'Success Rate',
      description: 'All projects delivered on time and budget'
    }
  ];

  const technologies = [
    { name: 'React', level: 95 },
    { name: 'Node.js', level: 90 },
    { name: 'WordPress', level: 88 },
    { name: 'PHP', level: 85 },
    { name: 'MongoDB', level: 82 },
    { name: 'MySQL', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'CSS3', level: 92 }
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
          sr.reveal('.stats-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.stat-item', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200,
            interval: 100
          });
          
          sr.reveal('.tech-skills', {
            origin: 'right',
            distance: '50px',
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

  // Animate progress bars when component mounts
  useEffect(() => {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.width = `${technologies[index].level}%`;
      }, 500 + index * 100);
    });
  }, []);

  return (
    <section className="portfolio-stats-section" ref={sectionRef}>
      <div className="portfolio-stats-container">
        {/* Stats Header */}
        <div className="stats-header">
          <h2 className="stats-title">Our Impact in Numbers</h2>
          <p className="stats-description">
            These numbers represent our commitment to excellence and the trust our clients place in us. 
            Every project is a step forward in our journey of creating exceptional digital experiences.
          </p>
        </div>
        
        <div className="stats-content">
          {/* Statistics Grid */}
          <div className="stats-grid">
            {stats.map(stat => (
              <div className="stat-item" key={stat.id}>
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                  <p className="stat-description">{stat.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Technology Skills */}
          <div className="tech-skills">
            <h3 className="tech-title">Our Technical Expertise</h3>
            <p className="tech-description">
              We work with cutting-edge technologies to deliver modern, scalable solutions
            </p>
            <div className="tech-list">
              {technologies.map((tech, index) => (
                <div className="tech-item" key={index}>
                  <div className="tech-info">
                    <span className="tech-name">{tech.name}</span>
                    <span className="tech-percentage">{tech.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ width: '0%' }}
                      data-level={tech.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;