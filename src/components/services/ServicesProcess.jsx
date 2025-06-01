import { useEffect, useRef } from 'react';
import { FaSearch, FaLightbulb, FaPalette, FaCode, FaRocket, FaHandshake } from 'react-icons/fa';
import './ServicesProcess.css';

const ServicesProcess = () => {
  const sectionRef = useRef(null);

  const processSteps = [
    {
      id: 1,
      number: '01',
      icon: <FaSearch />,
      title: 'Discovery & Research',
      description: 'We start by understanding your business goals, target audience, and project requirements through detailed research and analysis.',
      duration: '1-2 weeks'
    },
    {
      id: 2,
      number: '02',
      icon: <FaLightbulb />,
      title: 'Strategy & Planning',
      description: 'Based on our research, we develop a comprehensive strategy and project roadmap with clear milestones and deliverables.',
      duration: '1 week'
    },
    {
      id: 3,
      number: '03',
      icon: <FaPalette />,
      title: 'Design & Prototyping',
      description: 'Our creative team designs intuitive interfaces and creates interactive prototypes for testing and validation.',
      duration: '2-3 weeks'
    },
    {
      id: 4,
      number: '04',
      icon: <FaCode />,
      title: 'Development & Implementation',
      description: 'We bring the designs to life with clean, efficient code and implement all functionality according to specifications.',
      duration: '3-6 weeks'
    },
    {
      id: 5,
      number: '05',
      icon: <FaRocket />,
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures quality and performance before we launch your project and make it live for your audience.',
      duration: '1-2 weeks'
    },
    {
      id: 6,
      number: '06',
      icon: <FaHandshake />,
      title: 'Support & Maintenance',
      description: 'We provide ongoing support, maintenance, and optimization to ensure your project continues to perform at its best.',
      duration: 'Ongoing'
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
          sr.reveal('.process-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.process-step', {
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
    <section className="services-process-section" ref={sectionRef}>
      <div className="services-process-container">
        {/* Process Header */}
        <div className="process-header">
          <h2 className="process-title">Our Proven Development Process</h2>
          <p className="process-description">
            We follow a structured, collaborative approach that ensures transparency, 
            quality, and timely delivery. Our process is designed to minimize risks 
            and maximize the success of your project.
          </p>
        </div>
        
        {/* Process Timeline */}
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <div className="process-step" key={step.id}>
              <div className="step-connector">
                {index < processSteps.length - 1 && <div className="connector-line"></div>}
              </div>
              
              <div className="step-content">
                <div className="step-header">
                  <div className="step-number">{step.number}</div>
                  <div className="step-icon">{step.icon}</div>
                </div>
                
                <div className="step-info">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                  <div className="step-duration">
                    <span className="duration-label">Timeline:</span>
                    <span className="duration-value">{step.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Process Benefits */}
        <div className="process-benefits">
          <h3>Why Our Process Works</h3>
          <div className="benefits-grid">
            <div className="benefit-item">
              <h4>Transparent Communication</h4>
              <p>Regular updates and clear communication throughout the project lifecycle</p>
            </div>
            <div className="benefit-item">
              <h4>Quality Assurance</h4>
              <p>Rigorous testing and quality checks at every stage of development</p>
            </div>
            <div className="benefit-item">
              <h4>Timely Delivery</h4>
              <p>Structured approach ensures projects are delivered on time and within budget</p>
            </div>
            <div className="benefit-item">
              <h4>Client Collaboration</h4>
              <p>Your input and feedback are integral to our development process</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesProcess;