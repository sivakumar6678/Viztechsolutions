import { useEffect, useRef, useState, useCallback } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import './ContactSection.css';

// Contact information constants
const CONTACT_INFO = {
  email: 'info@viztechsolutions.in',
  phone: '+91 83319 94495',
  location: 'Chennai, Tamil Nadu, India'
};

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app, you would send this to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Show success message (you can add a toast notification here)
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

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
          sr.reveal('.contact-info', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.contact-form', {
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
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        {/* Left Side: Contact Info */}
        <div className="contact-info">
          <div className="contact-badge">Get In Touch</div>
          <h2 className="contact-title">Let's Start a Conversation</h2>
          <div className="contact-details">
            <div className="contact-item">
              <FaMapMarkerAlt />
              <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.location)}`} 
                 target="_blank" 
                 rel="noopener noreferrer">
                {CONTACT_INFO.location}
              </a>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <a href={`mailto:${CONTACT_INFO.email}`}>
                {CONTACT_INFO.email}
              </a>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                {CONTACT_INFO.phone}
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="contact-form">
          <h3 className="form-title">
            <FaEnvelope /> Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="contact-form-inner">
            <input 
              type="text" 
              placeholder="Your Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              className="form-input"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              className="form-input"
            />
            <input 
              type="text" 
              placeholder="Subject" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required 
              className="form-input"
            />
            <textarea 
              rows={5} 
              placeholder="Your Message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
              className="form-textarea"
            />
            <button 
              type="submit" 
              className={`contact-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;