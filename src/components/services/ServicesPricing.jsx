import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaStar } from 'react-icons/fa';
import './ServicesPricing.css';

const ServicesPricing = () => {
  const sectionRef = useRef(null);

  const pricingPlans = [
    {
      id: 1,
      name: 'Starter',
      price: '₹25,000',
      period: 'one-time',
      description: 'Perfect for small businesses and startups looking to establish their digital presence',
      features: [
        'Basic Website Design (5 pages)',
        'Responsive Mobile Design',
        'Basic SEO Setup',
        'Contact Form Integration',
        '1 Month Free Support',
        'Social Media Integration'
      ],
      popular: false,
      buttonText: 'Get Started',
      color: 'primary'
    },
    {
      id: 2,
      name: 'Professional',
      price: '₹50,000',
      period: 'one-time',
      description: 'Ideal for growing businesses that need advanced features and functionality',
      features: [
        'Custom Website Design (10 pages)',
        'Advanced Responsive Design',
        'Complete SEO Optimization',
        'E-commerce Integration',
        'CMS Integration',
        'Analytics Setup',
        '3 Months Free Support',
        'Performance Optimization'
      ],
      popular: true,
      buttonText: 'Most Popular',
      color: 'secondary'
    },
    {
      id: 3,
      name: 'Enterprise',
      price: '₹1,00,000',
      period: 'one-time',
      description: 'Comprehensive solution for large businesses with complex requirements',
      features: [
        'Custom Web Application',
        'Advanced E-commerce Platform',
        'Custom CMS Development',
        'API Integration',
        'Advanced Security Features',
        'Performance Monitoring',
        '6 Months Free Support',
        'Priority Support',
        'Custom Integrations'
      ],
      popular: false,
      buttonText: 'Contact Us',
      color: 'tertiary'
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
          sr.reveal('.pricing-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.pricing-card', {
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
    <section className="services-pricing-section" ref={sectionRef}>
      <div className="services-pricing-container">
        {/* Pricing Header */}
        <div className="pricing-header">
          <h2 className="pricing-title">Transparent Pricing Plans</h2>
          <p className="pricing-description">
            Choose the perfect plan for your business needs. All plans include our commitment 
            to quality, timely delivery, and ongoing support. No hidden fees, no surprises.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="pricing-grid">
          {pricingPlans.map(plan => (
            <div 
              className={`pricing-card ${plan.popular ? 'popular' : ''}`} 
              key={plan.id}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <FaStar /> Most Popular
                </div>
              )}
              
              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">/{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              
              <div className="pricing-card-body">
                <ul className="features-list">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <FaCheck className="feature-check" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pricing-card-footer">
                <Link 
                  to="/contact" 
                  className={`pricing-button ${plan.color}`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Pricing FAQ */}
        <div className="pricing-faq">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Do you offer custom pricing?</h4>
              <p>Yes, we provide custom quotes for unique projects and specific requirements. Contact us to discuss your needs.</p>
            </div>
            <div className="faq-item">
              <h4>What's included in the support?</h4>
              <p>Our support includes bug fixes, minor updates, technical assistance, and guidance on using your website or application.</p>
            </div>
            <div className="faq-item">
              <h4>Can I upgrade my plan later?</h4>
              <p>Absolutely! You can upgrade your plan at any time. We'll work with you to enhance your existing solution.</p>
            </div>
            <div className="faq-item">
              <h4>Do you offer payment plans?</h4>
              <p>Yes, we offer flexible payment options including milestone-based payments for larger projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPricing;