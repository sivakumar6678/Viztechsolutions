import { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './BlogSection.css';

const BlogSection = () => {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Subscribed with email:', email);
    setSubscribed(true);
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
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
          sr.reveal('.blog-text', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.blog-form', {
            origin: 'right',
            distance: '50px',
            duration: 1000,
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
    <section className="blog-section" ref={sectionRef}>
      <div className="blog-container">
        {/* Left Side: Text */}
        <div className="blog-text">
          <h2 className="blog-heading">Subscribe to Our Newsletter</h2>
          <p className="blog-subtext">
            Stay updated with our latest insights, trends, and news from the digital world. 
            We send valuable content that helps you stay ahead in the digital landscape.
          </p>
        </div>
        
        {/* Right Side: Form */}
        <div className="blog-form">
          <Form onSubmit={handleSubmit}>
            <div className="blog-subscription">
              <Form.Control 
                type="email" 
                placeholder="Enter your email address" 
                className="blog-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="blog-subscribe-button">
                Subscribe
              </Button>
            </div>
            <p className="blog-already">
              Already subscribed? <a href="#" className="blog-unsubscribe">Unsubscribe</a>
            </p>
            
            {subscribed && (
              <div className="subscription-success">
                Thank you for subscribing to our newsletter!
              </div>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;