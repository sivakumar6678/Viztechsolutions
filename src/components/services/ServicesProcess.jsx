import { useEffect, useRef, useState, useCallback, useMemo } from 'react';
import { FaSearch, FaLightbulb, FaPalette, FaCode, FaRocket, FaHandshake, FaCheckCircle } from 'react-icons/fa';
import './ServicesProcess.css';

const ServicesProcess = () => {
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = useMemo(() => [
    {
      id: 1,
      number: '01',
      icon: <FaSearch />,
      title: 'Discovery & Research',
      description: 'We dive deep into understanding your business goals, target audience, and project requirements through comprehensive research and analysis.',
      duration: '1-2 weeks',
      color: '#3B82F6',
      deliverables: ['Project Brief', 'Market Research', 'User Personas', 'Requirements Document']
    },
    {
      id: 2,
      number: '02',
      icon: <FaLightbulb />,
      title: 'Strategy & Planning',
      description: 'We develop a comprehensive strategy and detailed project roadmap with clear milestones, timelines, and deliverables.',
      duration: '1 week',
      color: '#8B5CF6',
      deliverables: ['Project Strategy', 'Technical Architecture', 'Timeline & Milestones', 'Resource Planning']
    },
    {
      id: 3,
      number: '03',
      icon: <FaPalette />,
      title: 'Design & Prototyping',
      description: 'Our creative team crafts intuitive interfaces and creates interactive prototypes for testing and validation.',
      duration: '2-3 weeks',
      color: '#EC4899',
      deliverables: ['Wireframes', 'UI/UX Design', 'Interactive Prototypes', 'Design System']
    },
    {
      id: 4,
      number: '04',
      icon: <FaCode />,
      title: 'Development & Implementation',
      description: 'We bring designs to life with clean, efficient code and implement all functionality according to specifications.',
      duration: '3-6 weeks',
      color: '#10B981',
      deliverables: ['Frontend Development', 'Backend Development', 'Database Setup', 'API Integration']
    },
    {
      id: 5,
      number: '05',
      icon: <FaRocket />,
      title: 'Testing & Launch',
      description: 'Rigorous testing ensures quality and performance before we launch your project and make it live for your audience.',
      duration: '1-2 weeks',
      color: '#F59E0B',
      deliverables: ['Quality Testing', 'Performance Optimization', 'Security Audit', 'Live Deployment']
    },
    {
      id: 6,
      number: '06',
      icon: <FaHandshake />,
      title: 'Support & Maintenance',
      description: 'We provide ongoing support, maintenance, and optimization to ensure your project continues to perform at its best.',
      duration: 'Ongoing',
      color: '#EF4444',
      deliverables: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Feature Enhancements']
    }
  ], []);

  // Simple step navigation
  const goToStep = useCallback((stepIndex) => {
    setActiveStep(stepIndex);
  }, []);

  // Simple auto-progression
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(current => (current + 1) % processSteps.length);
    }, 5000); // Change step every 5 seconds

    intervalRef.current = interval;

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [processSteps.length]);

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
          
          sr.reveal('.process-timeline', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200
          });

          sr.reveal('.process-showcase', {
            origin: 'left',
            distance: '30px',
            duration: 800,
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
    <section className="services-process-section" ref={sectionRef}>
      <div className="services-process-container">
        {/* Process Header */}
        <div className="process-header">
          <span className="process-badge">Our Process</span>
          <h2 className="process-title">How We Bring Your Vision to Life</h2>
          <p className="process-description">
            Our proven 6-step process ensures exceptional results through collaboration, 
            transparency, and meticulous attention to detail at every stage.
          </p>
          

        </div>
        
        {/* Process Navigation */}
        <div className="process-navigation">
          {processSteps.map((step, index) => (
            <div 
              className={`nav-step ${index === activeStep ? 'active' : ''} ${index < activeStep ? 'completed' : ''}`}
              key={step.id}
              onClick={() => goToStep(index)}
            >
              <div className="nav-marker" style={{ backgroundColor: step.color }}>
                {index < activeStep ? <FaCheckCircle /> : step.icon}
              </div>
              <div className="nav-info">
                <span className="nav-number">{step.number}</span>
                <span className="nav-title">{step.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Step Showcase */}
        <div className="step-showcase" key={activeStep}>
          <div className="showcase-header">
            <div className="showcase-icon" style={{ backgroundColor: processSteps[activeStep].color }}>
              {processSteps[activeStep].icon}
            </div>
            <div className="showcase-meta">
              <h2 className="showcase-title">{processSteps[activeStep].title}</h2>
              <div className="showcase-info-row">
                <span className="showcase-duration">⏱️ {processSteps[activeStep].duration}</span>
                <span className="showcase-step">Step {activeStep + 1} of {processSteps.length}</span>
              </div>
            </div>
          </div>
          
          <p className="showcase-description">{processSteps[activeStep].description}</p>
          
          <div className="showcase-deliverables">
            <h3>📋 Key Deliverables</h3>
            <div className="deliverables-grid">
              {processSteps[activeStep].deliverables.map((deliverable, index) => (
                <div 
                  className="deliverable-item" 
                  key={`${activeStep}-${index}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <FaCheckCircle style={{ color: processSteps[activeStep].color }} />
                  <span>{deliverable}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default ServicesProcess;