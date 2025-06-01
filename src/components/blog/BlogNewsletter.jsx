import { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPaperPlane, FaCheckCircle, FaBell, FaRss, FaUsers } from 'react-icons/fa';
import './BlogNewsletter.css';

const BlogNewsletter = () => {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const benefits = [
    {
      id: 1,
      icon: <FaBell />,
      title: 'Weekly Updates',
      description: 'Get the latest articles delivered to your inbox every week'
    },
    {
      id: 2,
      icon: <FaRss />,
      title: 'Exclusive Content',
      description: 'Access subscriber-only content and early previews'
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: 'Expert Insights',
      description: 'Learn from industry experts and thought leaders'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate newsletter subscription
    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          sr.reveal('.newsletter-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.newsletter-form-section', {
            origin: 'right',
            distance: '50px',
            duration: 1000,
            delay: 300
          });
          
          sr.reveal('.newsletter-benefit', {
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
    <section className="blog-newsletter-section" ref={sectionRef}>
      <div className="blog-newsletter-container">
        <div className="newsletter-wrapper">
          {/* Newsletter Content */}
          <div className="newsletter-content">
            <div className="newsletter-header">
              <div className="newsletter-icon">
                <FaEnvelope />
              </div>
              <h2 className="newsletter-title">Stay Updated</h2>
              <p className="newsletter-description">
                Join our newsletter to receive the latest insights, tips, and updates 
                from the world of web development, design, and digital marketing.
              </p>
            </div>
            
            <div className="newsletter-benefits">
              {benefits.map(benefit => (
                <div className="newsletter-benefit" key={benefit.id}>
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>
                  <div className="benefit-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="newsletter-stats">
              <div className="stat">
                <span className="stat-number">2,500+</span>
                <span className="stat-label">Subscribers</span>
              </div>
              <div className="stat">
                <span className="stat-number">Weekly</span>
                <span className="stat-label">Updates</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Free</span>
              </div>
            </div>
          </div>
          
          {/* Newsletter Form */}
          <div className="newsletter-form-section">
            {!isSubscribed ? (
              <div className="newsletter-form-card">
                <h3 className="form-title">Subscribe Now</h3>
                <p className="form-description">
                  Enter your email address and join thousands of developers and designers 
                  who trust us for quality content.
                </p>
                
                <form onSubmit={handleSubmit} className="newsletter-form">
                  <div className="form-group">
                    <div className="input-wrapper">
                      <FaEnvelope className="input-icon" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="newsletter-input"
                        required
                      />
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    className={`newsletter-submit ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Subscribing...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Subscribe Now
                      </>
                    )}
                  </button>
                </form>
                
                <div className="form-note">
                  <p>
                    We respect your privacy. Unsubscribe at any time. 
                    No spam, just quality content delivered weekly.
                  </p>
                </div>
              </div>
            ) : (
              <div className="newsletter-success">
                <div className="success-icon">
                  <FaCheckCircle />
                </div>
                <h3>Thank You for Subscribing!</h3>
                <p>
                  You've successfully joined our newsletter. Check your email for 
                  a confirmation message and get ready for weekly insights!
                </p>
                <div className="success-actions">
                  <button 
                    onClick={() => setIsSubscribed(false)}
                    className="subscribe-another"
                  >
                    Subscribe Another Email
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletter;