import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPhone, FaEnvelope, FaComments, FaLightbulb, FaRocket, FaHandshake } from 'react-icons/fa';
import './BlogCTA.css';

const BlogCTA = () => {
  const sectionRef = useRef(null);

  const ctaFeatures = [
    {
      id: 1,
      icon: <FaLightbulb />,
      title: 'Expert Consultation',
      description: 'Get personalized advice from our experienced team'
    },
    {
      id: 2,
      icon: <FaRocket />,
      title: 'Fast Implementation',
      description: 'Quick turnaround times without compromising quality'
    },
    {
      id: 3,
      icon: <FaHandshake />,
      title: 'Ongoing Support',
      description: 'Continuous support and maintenance for your projects'
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
          sr.reveal('.blog-cta-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.blog-cta-actions', {
            origin: 'right',
            distance: '50px',
            duration: 1000,
            delay: 300
          });
          
          sr.reveal('.cta-feature-item', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 400,
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
    <section className="blog-cta-section" ref={sectionRef}>
      <div className="blog-cta-container">
        <div className="blog-cta-wrapper">
          {/* CTA Content */}
          <div className="blog-cta-content">
            <div className="cta-badge">Ready to Get Started?</div>
            <h2 className="cta-title">Turn Your Ideas Into Reality</h2>
            <p className="cta-description">
              Inspired by our insights? Let's collaborate to bring your digital vision to life. 
              Our team of experts is ready to help you create exceptional web experiences that 
              drive results and exceed expectations.
            </p>
            
            <div className="cta-features">
              {ctaFeatures.map(feature => (
                <div className="cta-feature-item" key={feature.id}>
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Actions */}
          <div className="blog-cta-actions">
            <div className="cta-main-actions">
              <h3>Let's Start Your Project</h3>
              <p>
                Ready to transform your business with cutting-edge digital solutions? 
                Get in touch with us today for a free consultation.
              </p>
              
              <div className="cta-buttons">
                <Link to="/contact" className="cta-primary-btn">
                  Start Your Project <FaArrowRight />
                </Link>
                <Link to="/portfolio" className="cta-secondary-btn">
                  View Our Work
                </Link>
              </div>
            </div>
            
            <div className="cta-contact-info">
              <h4>Get in Touch Directly</h4>
              <div className="contact-methods">
                <a href="tel:+918331994495" className="contact-method">
                  <FaPhone />
                  <div>
                    <span className="method-label">Call Us</span>
                    <span className="method-value">+91 83319 94495</span>
                  </div>
                </a>
                
                <a href="mailto:info@viztechsolutions.in" className="contact-method">
                  <FaEnvelope />
                  <div>
                    <span className="method-label">Email Us</span>
                    <span className="method-value">info@viztechsolutions.in</span>
                  </div>
                </a>
                
                <Link to="/contact" className="contact-method">
                  <FaComments />
                  <div>
                    <span className="method-label">Live Chat</span>
                    <span className="method-value">Send Message</span>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="cta-guarantee">
              <div className="guarantee-content">
                <h4>Our Promise</h4>
                <ul>
                  <li>✓ Free initial consultation</li>
                  <li>✓ Transparent pricing</li>
                  <li>✓ On-time delivery</li>
                  <li>✓ 100% satisfaction guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="cta-bottom-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCTA;