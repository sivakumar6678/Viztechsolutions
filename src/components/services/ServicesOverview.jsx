import { useEffect, useRef } from 'react';
import { FaLightbulb, FaRocket, FaUsers, FaAward } from 'react-icons/fa';
import './ServicesOverview.css';

const ServicesOverview = () => {
  const sectionRef = useRef(null);

  const features = [
    {
      id: 1,
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Cutting-edge solutions using the latest technologies and design trends'
    },
    {
      id: 2,
      icon: <FaRocket />,
      title: 'Performance',
      description: 'Fast, optimized, and scalable solutions that deliver exceptional results'
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: 'Collaboration',
      description: 'Close partnership with our clients throughout the entire project lifecycle'
    },
    {
      id: 4,
      icon: <FaAward />,
      title: 'Quality',
      description: 'Rigorous testing and quality assurance to ensure perfect deliverables'
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
          sr.reveal('.overview-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.overview-features', {
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
    <section className="services-overview-section" ref={sectionRef}>
      <div className="services-overview-container">
        <div className="overview-content">
          <div className="overview-badge">Why Choose Us</div>
          <h2 className="overview-title">Transforming Ideas into Digital Excellence</h2>
          <p className="overview-description">
            At VizTech Solutions, we combine creativity, technology, and strategy to deliver 
            exceptional digital experiences. Our comprehensive approach ensures that every 
            project not only meets but exceeds your expectations.
          </p>
          <p className="overview-description">
            From initial concept to final deployment, we work closely with our clients to 
            understand their unique needs and deliver solutions that drive real business results. 
            Our team of experts brings years of experience and a passion for innovation to every project.
          </p>
          
          <div className="overview-stats">
            <div className="overview-stat">
              <div className="stat-number">12+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="overview-stat">
              <div className="stat-number">10+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="overview-stat">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="overview-features">
          {features.map(feature => (
            <div className="overview-feature" key={feature.id}>
              <div className="feature-icon">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;