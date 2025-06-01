import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPalette, FaCode, FaBullhorn, FaChartLine, FaMobile, FaShoppingCart } from 'react-icons/fa';
import './ServicesList.css';
import UIUX from '../../assets/images/services/UIUX Design.jpg';
import WEB from '../../assets/images/services/Web Development.jpg';
import DigitalMarketing from '../../assets/images/services/Business Development.jpg';
import Brands from '../../assets/images/services/MAGZINE.jpg'
import Mobile from '../../assets//images/services/Data Dashboards.jpg';

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
      price: 'Starting from ₹25,000'
    },
    {
      id: 2,
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
      price: 'Starting from ₹35,000'
    },
    {
      id: 3,
      icon: <FaBullhorn />,
      title: 'Digital Marketing',
      shortDescription: 'Strategic marketing campaigns that drive growth and engagement',
      fullDescription: 'We develop comprehensive digital marketing strategies that increase your online visibility, engage your target audience, and drive conversions. Our data-driven approach ensures measurable results.',
      features: [
        'SEO & Content Marketing',
        'Social Media Management',
        'PPC Advertising',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      image: DigitalMarketing,
      price: 'Starting from ₹15,000/month'
    },
    {
      id: 4,
      icon: <FaChartLine />,
      title: 'Brand Identity',
      shortDescription: 'Memorable brand identities that resonate with your audience',
      fullDescription: 'We craft unique brand identities that communicate your values and connect with your target audience. From logo design to complete brand guidelines, we help you stand out in the market.',
      features: [
        'Logo Design & Branding',
        'Brand Strategy',
        'Visual Identity Systems',
        'Brand Guidelines',
        'Marketing Collateral'
      ],
      image: Brands,
      price: 'Starting from ₹20,000'
    },
    {
      id: 5,
      icon: <FaMobile />,
      title: 'Mobile App Design',
      shortDescription: 'Intuitive mobile experiences for iOS and Android platforms',
      fullDescription: 'We design beautiful, functional mobile applications that provide seamless user experiences across all devices. Our mobile-first approach ensures optimal performance and usability.',
      features: [
        'iOS & Android Design',
        'User Interface Design',
        'Interactive Prototypes',
        'App Store Optimization',
        'Cross-platform Solutions'
      ],
      image: Mobile,
      price: 'Starting from ₹40,000'
    },
    {
      id: 6,
      icon: <FaShoppingCart />,
      title: 'E-commerce Solutions',
      shortDescription: 'Complete online stores that drive sales and customer satisfaction',
      fullDescription: 'We build comprehensive e-commerce platforms that provide exceptional shopping experiences. From product catalogs to payment integration, we handle every aspect of your online store.',
      features: [
        'Custom E-commerce Development',
        'Payment Gateway Integration',
        'Inventory Management',
        'Order Processing Systems',
        'Customer Support Tools'
      ],
      image: UIUX,
      price: 'Starting from ₹50,000'
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
          <h2 className="services-list-title">Our Complete Service Portfolio</h2>
          <p className="services-list-description">
            We offer a comprehensive range of digital services designed to help your business 
            succeed in today's competitive digital landscape. Each service is tailored to meet 
            your specific needs and business objectives.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-card-image">
                <img src={service.image} alt={service.title} />
                <div className="service-card-overlay">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <div className="service-card-content">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-description">{service.shortDescription}</p>
                
                <div className="service-features">
                  <h4>What's Included:</h4>
                  <ul>
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="service-card-footer">
                  <div className="service-price">{service.price}</div>
                  <Link to="/contact" className="service-card-button">
                    Get Started <FaArrowRight />
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