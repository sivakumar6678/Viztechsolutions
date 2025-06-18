import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './ChatSection.css';
import quote from '../../assets/images/quote.png'
const ChatSection = () => {
  const sectionRef = useRef(null);

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
          sr.reveal('.chat-text', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.chat-button', {
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
    <section className="chat-section" ref={sectionRef}>
      <div className="chat-container">
        {/* Left Side: Text */}
        <div className="chat-text">
          <h2 className="chat-heading">Ready to Start Your Project?</h2>
          <p className="chat-subtext">Let's discuss how we can help bring your vision to life.</p>
        </div>
        
        {/* Right Side: Button */}
        <div className="chat-button">
          <Link to="/contact" className="chat-quote">
            <span className="chat-quote-text">Get a Free Quote</span>
            <img src={quote} alt="Quote" className="chat-icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;