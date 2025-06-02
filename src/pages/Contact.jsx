import { useEffect, useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Contact.css';

// Contact information constants
const CONTACT_INFO = {
  email: 'info@viztechsolutions.in',
  phone: '+91 83319 94495',
  location: 'Chennai, Tamil Nadu, India'
};

const SOCIAL_LINKS = [
  { icon: FaWhatsapp, url: 'https://wa.me/918331994495', label: 'WhatsApp' },
  { icon: FaLinkedin, url: 'https://www.linkedin.com/company/viztechsolutions', label: 'LinkedIn' },
  { icon: FaInstagram, url: 'https://instagram.com/viztechsolutions', label: 'Instagram' }
];

const Contact = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = 'Contact Us | VizTech Solutions';
  }, []);

  // Handle form input changes
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }, []);

  // Handle form submission
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Form submitted:', formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, navigate]);

  // Initialize animations
  useEffect(() => {
    const initScrollReveal = async () => {
      try {
        const ScrollRevealModule = await import('scrollreveal');
        const ScrollReveal = ScrollRevealModule.default;
        
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '30px',
          duration: 800,
          delay: 100,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          mobile: true,
          reset: false
        });

        if (sectionRef.current) {
          sr.reveal('.contact-header', { delay: 100 });
          sr.reveal('.contact-info-header', { delay: 200 });
          sr.reveal('.contact-info-card', { delay: 300, interval: 100 });
          sr.reveal('.contact-social', { delay: 500 });
          sr.reveal('.contact-form-container', { delay: 400 });
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
        {/* Header */}
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Ready to bring your vision to life? Let's start a conversation.
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Info Section */}
          <div className="contact-info-section">
            <div className="contact-info-header">
              <h2 className="info-title">Get in Touch</h2>
              <p className="info-subtitle">We're here to help and answer any question you might have</p>
            </div>
            
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div className="contact-info-content">
                  <h3>Email Us</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                  <span className="contact-info-desc">Send us an email anytime</span>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <FaPhone className="contact-icon" />
                </div>
                <div className="contact-info-content">
                  <h3>Call Us</h3>
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>{CONTACT_INFO.phone}</a>
                  <span className="contact-info-desc">Mon-Fri from 9am to 6pm</span>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon-wrapper">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <div className="contact-info-content">
                  <h3>Visit Us</h3>
                  <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.location)}`} 
                     target="_blank" 
                     rel="noopener noreferrer">
                    {CONTACT_INFO.location}
                  </a>
                  <span className="contact-info-desc">Come say hello at our office</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-social">
              <h3>Connect With Us</h3>
              <div className="social-links">
                {SOCIAL_LINKS.map(({ icon: Icon, url, label }) => (
                  <a 
                    key={label}
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="social-link"
                  >
                    <Icon />
                    <span className="social-tooltip">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-description">We'll get back to you within 24 hours</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
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
      </div>
    </section>
  );
};

export default Contact;