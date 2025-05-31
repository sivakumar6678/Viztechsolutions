import { useEffect, useRef } from 'react';
import './AboutProcess.css';

const AboutProcess = () => {
  const sectionRef = useRef(null);

  const processSteps = [
    {
      id: 1,
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, and target audience. This phase involves in-depth research and analysis to identify opportunities and challenges.'
    },
    {
      id: 2,
      number: '02',
      title: 'Strategy',
      description: 'Based on our findings, we develop a comprehensive strategy that outlines the approach, timeline, and deliverables for your project.'
    },
    {
      id: 3,
      number: '03',
      title: 'Design',
      description: 'Our creative team crafts visually stunning designs that align with your brand identity and meet user needs. We focus on creating intuitive, engaging experiences.'
    },
    {
      id: 4,
      number: '04',
      title: 'Development',
      description: 'Our developers bring the designs to life, building robust, scalable solutions using the latest technologies and best practices.'
    },
    {
      id: 5,
      number: '05',
      title: 'Testing',
      description: 'We rigorously test all aspects of your project to ensure quality, performance, and compatibility across devices and platforms.'
    },
    {
      id: 6,
      number: '06',
      title: 'Launch & Support',
      description: 'After successful testing, we launch your project and provide ongoing support to ensure its continued success and optimal performance.'
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
    <section className="process-section" ref={sectionRef}>
      <div className="process-container">
        {/* Process Header */}
        <div className="process-header">
          <h2 className="process-title">Our Process</h2>
          <p className="process-description">
            We follow a structured, collaborative approach to ensure every project is delivered on time, 
            within budget, and exceeds expectations. Our process is designed to be transparent, 
            efficient, and focused on achieving your business objectives.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="process-steps">
          {processSteps.map(step => (
            <div className="process-step" key={step.id}>
              <div className="process-step-number">{step.number}</div>
              <div className="process-step-content">
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;