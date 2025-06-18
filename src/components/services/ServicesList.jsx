import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPalette, FaCode, FaBriefcase, FaChartBar, FaNewspaper, FaImage } from 'react-icons/fa';
import './ServicesList.css';
import UIUX from '../../assets/images/services/UIUX Design.jpg';
import WEB from '../../assets/images/services/Web Development.jpg';
import BusinessDev from '../../assets/images/services/Business Development.jpg';
import DataDashboards from '../../assets/images/services/MAGZINE.jpg'
import Magazine from '../../assets/images/services/MAGZINE.jpg';
const ServicesList = () => {
  const sectionRef = useRef(null);

  const services = [
    {
      id: 1,
      icon: <FaPalette />,
      title: 'UI/UX Design',
      shortDescription: 'User-centered design that converts visitors into customers',
      fullDescription: 'We create intuitive, engaging, and conversion-focused designs that provide exceptional user experiences. Our design process includes user research, wireframing, prototyping, and testing to ensure optimal results.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Usability Testing',
        'Design System Creation'
      ],
      image: UIUX,
      badge: 'Most Popular'
    },
    {
      id: 2,
      icon: <FaChartBar />,
      title: 'Data Dashboards',
      shortDescription: 'Interactive dashboards that transform data into actionable insights',
      fullDescription: 'We create powerful data visualization dashboards that help you understand your business metrics and make informed decisions. Our dashboards are interactive, real-time, and customizable.',
      features: [
        'Custom Dashboard Design',
        'Real-time Data Integration',
        'Interactive Visualizations',
        'Performance Analytics',
        'Mobile-responsive Charts'
      ],
      image: DataDashboards,
      badge: 'Advanced'
    },
    {
      id: 3,
      icon: <FaCode />,
      title: 'Web Development',
      shortDescription: 'Fast, secure, and scalable websites built with modern technologies',
      fullDescription: 'Our development team creates responsive, high-performance websites using the latest technologies. We focus on clean code, security, and scalability to ensure your website grows with your business.',
      features: [
        'Responsive Web Design',
        'Custom CMS Development',
        'E-commerce Solutions',
        'API Integration',
        'Performance Optimization'
      ],
      image: WEB,
      badge: 'Essential'
    },
    {
      id: 4,
      icon: <FaBriefcase />,
      title: 'Business Development',
      shortDescription: 'Strategic planning and growth strategies for your business success',
      fullDescription: 'We help businesses grow through strategic planning, market analysis, and innovative growth strategies. Our business development services focus on sustainable growth and competitive advantage.',
      features: [
        'Market Research & Analysis',
        'Business Strategy Planning',
        'Growth Strategy Development',
        'Competitive Analysis',
        'Performance Metrics'
      ],
      image: BusinessDev,
      badge: 'Strategic'
    },
    {
      id: 5,
      icon: <FaNewspaper />,
      title: 'Magazine & Ad Strategy',
      shortDescription: 'Creative advertising and publication design that captures attention',
      fullDescription: 'We create compelling magazine layouts and advertising strategies that engage your audience and communicate your message effectively. From concept to publication, we handle every detail.',
      features: [
        'Magazine Layout Design',
        'Advertisement Creation',
        'Content Strategy',
        'Print & Digital Publishing',
        'Brand Storytelling'
      ],
      image: Magazine,
      badge: 'Creative'
    },
    {
      id: 6,
      icon: <FaImage />,
      title: 'Logos & Mockups',
      shortDescription: 'Professional logos and mockups that represent your brand perfectly',
      fullDescription: 'We design memorable logos and create realistic mockups that showcase your brand identity. Our designs are versatile, scalable, and perfectly represent your business values.',
      features: [
        'Custom Logo Design',
        'Brand Identity Creation',
        'Product Mockups',
        'Business Card Design',
        'Brand Guidelines'
      ],
      image: UIUX,
      badge: 'Branding'
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
          sr.reveal('.services-list-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.service-card', {
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
    <section className="services-list-section" ref={sectionRef}>
      <div className="services-list-container">
        {/* Services Header */}
        <div className="services-list-header">
          <span className="services-badge">Our Services</span>
          <h2 className="services-list-title">Comprehensive Digital Solutions</h2>
          <p className="services-list-description">
            Transform your business with our expert services. From stunning designs to powerful 
            development solutions, we deliver excellence that drives results and growth.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-card-header">
                <div className="service-badge">{service.badge}</div>
                <div className="service-icon">
                  {service.icon}
                </div>
              </div>
              
              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
                <div className="service-card-overlay">
                  <Link to="/contact" className="service-overlay-button">
                    Get Started <FaArrowRight />
                  </Link>
                </div>
              </div>
              
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.shortDescription}</p>
                
                <div className="service-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-card-footer">
                  <Link to="/contact" className="service-card-button">
                    Start Your Project <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Services CTA */}
        <div className="services-list-cta">
          <h3>Need a Custom Solution?</h3>
          <p>We also provide custom solutions tailored to your specific business requirements.</p>
          <Link to="/contact" className="services-cta-button">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;