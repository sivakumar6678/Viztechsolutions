import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa';
import './ServicesSection.css';
import webdesing from '../../assets/images/web-design.png';
import appdevelopment from '../../assets/images/app-development.png';
import magazine from '../../assets/images/magazine.png';
import success from '../../assets/images/success.png';
import dashboard from '../../assets/images/dashboard.png';
import mockup from '../../assets/images/mockup.png';

const ServicesSection = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      icon: webdesing,
      title: 'UI/UX Design',
      description: 'We create intuitive, engaging, and user-centered designs that enhance user satisfaction and drive business growth.',
      link: '/services'
    },
    {
      id: 2,
      icon: dashboard,
      title: 'Data Dashboards',
      description: 'We design intuitive data visualization dashboards that transform complex data into actionable insights.',
      link: '/services'
    },
    {
      id: 3,
      icon: appdevelopment,
      title: 'Web Development',
      description: 'We build responsive, fast, and secure websites that deliver exceptional user experiences across all devices.',
      link: '/services'
    },
    {
      id: 4,
      icon: success,
      title: 'Business Development',
      description: 'We provide strategic consulting to help businesses identify opportunities, overcome challenges, and achieve growth.',
      link: '/services'
    },
    {
      id: 5,
      icon: magazine,
      title: 'Magazine & Ad Strategy',
      description: 'We create compelling magazine layouts and advertising strategies that engage your audience effectively.',
      link: '/services'
    },
    {
      id: 6,
      icon: mockup,
      title: 'Logos & Mockups',
      description: 'We design professional logos and mockups that represent your brand perfectly with memorable designs.',
      link: '/services'
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
          sr.reveal('.services-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.service-item', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200,
            interval: 100
          });
          
          sr.reveal('.services-cta', {
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
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        {/* Services Header */}
        <div className="services-header">
          <div className="services-subtitle">What We Do</div>
          <h2 className="services-title">Our Premium Services</h2>
          <p className="services-description">
            We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="services-grid">
          {services.map(service => (
            <div className="service-item" key={service.id}>
              <div className="service-top"></div>
              <div className="service-content">
                <div className="service-icon-container">
                  <img src={service.icon} alt={service.title} className="service-icon" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <Link to={service.link} className="service-link">
                  Learn More <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Services CTA */}
        <div className="services-cta">
          <Link to="/services" className="services-button">
            View All Services <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;