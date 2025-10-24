import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaLightbulb, 
  FaUsers, 
  FaSearch, 
  FaMousePointer, 
  FaPalette, 
  FaFlask,
  FaArrowRight,
  FaCheckCircle,
  FaStar,
  FaRocket,
  FaChartLine,
  FaShieldAlt,
  FaCog
} from 'react-icons/fa';
import './ProductDesigning.css';

const ProductDesigning = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({});
  const [hasAnimated, setHasAnimated] = useState(false);
  const animationTimers = useRef([]);

  const stats = [
    { number: 100, suffix: '+', label: 'Products Designed', icon: <FaRocket /> },
    { number: 90, suffix: '%', label: 'User Satisfaction', icon: <FaChartLine /> },
    { number: 45, suffix: '%', label: 'Avg. Conversion Boost', icon: <FaShieldAlt /> },
    { number: 24, suffix: '/7', label: 'Design Support', icon: <FaCog /> }
  ];

  // Debug log to ensure component is loading
  useEffect(() => {
    console.log('ProductDesigning component mounted');
    
  }, []);

  const designServices = [
    {
      id: 1,
      icon: <FaLightbulb />,
      title: 'Concept Design',
      description: 'From napkin sketch to structured concept',
      features: ['Ideation Workshops', 'Concept Validation', 'Market Research', 'Feasibility Analysis'],
      color: '#f39c12',
      gradient: 'linear-gradient(135deg, #f39c12, #e67e22)'
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: 'User-Centered Design',
      description: 'We prioritize user needs in every touchpoint',
      features: ['User Journey Mapping', 'Persona Development', 'Accessibility Design', 'User Flow Optimization'],
      color: '#2ecc71',
      gradient: 'linear-gradient(135deg, #2ecc71, #27ae60)'
    },
    {
      id: 3,
      icon: <FaSearch />,
      title: 'UX Strategy & Research',
      description: 'Real user insights to back product decisions',
      features: ['User Interviews', 'Competitive Analysis', 'Usability Studies', 'Data-Driven Insights'],
      color: '#e74c3c',
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)'
    },
    {
      id: 4,
      icon: <FaMousePointer />,
      title: 'Interactive Prototyping',
      description: 'Clickable, high-fidelity mockups to test real flows',
      features: ['Wireframe Creation', 'Interactive Prototypes', 'User Testing', 'Iteration Cycles'],
      color: '#9b59b6',
      gradient: 'linear-gradient(135deg, #9b59b6, #8e44ad)'
    },
    {
      id: 5,
      icon: <FaPalette />,
      title: 'Visual UI Design',
      description: 'Beautiful interfaces that convert and engage',
      features: ['Visual Design', 'Design Systems', 'Brand Integration', 'Responsive Design'],
      color: '#3498db',
      gradient: 'linear-gradient(135deg, #3498db, #2980b9)'
    },
    {
      id: 6,
      icon: <FaFlask />,
      title: 'Usability Testing',
      description: 'Validate designs with real user feedback',
      features: ['A/B Testing', 'User Feedback', 'Performance Metrics', 'Optimization'],
      color: '#1abc9c',
      gradient: 'linear-gradient(135deg, #1abc9c, #16a085)'
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
          sr.reveal('.product-design-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.design-service-card', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200,
            interval: 100
          });

          sr.reveal('.product-design-stats', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 300
          });

          sr.reveal('.product-design-cta', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 400
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
        // Fallback: show all elements immediately
        const elements = document.querySelectorAll('.product-design-header, .design-service-card, .product-design-stats, .product-design-cta');
        elements.forEach(el => {
          if (el) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          }
        });
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section className="product-design-section" ref={sectionRef}>
      <div className="product-design-container">
        {/* Header Section */}
        <div className="product-design-header">
          <div className="product-design-badge">
            <FaRocket />
            Product Designing
          </div>
          <h2 className="product-design-title">
            Transforming Ideas into Powerful Products
          </h2>
          <p className="product-design-description">
            At Viz Techsolutions, we don't just design—we craft experiences. Our product design process bridges innovation, usability, and visual aesthetics to bring your product to life.
          </p>
          <Link to="/contact" className="product-design-main-cta">
            Get a Free Consultation
            <FaArrowRight />
          </Link>
        </div>

        {/* Content Section */}
        <div className="product-design-content">
          <div className="design-services-header">
            <h3>Product Design Services</h3>
            <div className="services-divider"></div>
          </div>
          
          <div className="design-services-grid">
            {designServices.map((service, index) => (
              <div 
                className="design-service-card" 
                key={service.id}
                style={{ 
                  '--service-color': service.color,
                  '--service-gradient': service.gradient
                }}
              >
                <div className="service-card-icon">
                  {service.icon}
                </div>
                <div className="service-card-content">
                  <h4 className="service-card-title">{service.title}</h4>
                  <p className="service-card-description">{service.description}</p>
                  <ul className="service-card-features">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <FaCheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-card-overlay">
                  <Link to="/contact" className="service-card-button">
                    Learn More
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="product-design-stats">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">
                  {animatedStats[index] || `${stat.number}${stat.suffix}`}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="product-design-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Ideas?</h3>
            <p>
              Let's collaborate to create exceptional products that users love and businesses thrive on. 
              Our expert team is ready to bring your vision to life.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary-button">
                Start Your Project
                <FaArrowRight />
              </Link>
              <Link to="/portfolio" className="cta-secondary-button">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="cta-visual">
            <div className="floating-elements">
              <div className="floating-element element-1">
                <FaPalette />
              </div>
              <div className="floating-element element-2">
                <FaLightbulb />
              </div>
              <div className="floating-element element-3">
                <FaRocket />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDesigning;