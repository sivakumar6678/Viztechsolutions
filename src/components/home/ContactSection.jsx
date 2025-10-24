import { useEffect, useRef, useState, useCallback } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import './ContactSection.css';
import { sub } from 'framer-motion/client';

// Contact information constants
const CONTACT_INFO = {
  email: 'viztechsolutions.in@gmail.com',
  phone: '+91 83319 94495',
  location: 'Chennai, Tamil Nadu, India'
};

const ContactSection = () => {
  const sectionRef = useRef(null);
    const navigate = useNavigate();

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
      const response = await fetch('https://formsubmit.co/ajax/4dfd538da51b6676d3e420546e01ba51', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                _subject: 'New Contact Form Submission!',
                _captcha: 'false',
                _template: 'table'
              })
            });

            if (response.ok) {
              setFormData({ name: '', email: '', message: '' });
              navigate('/thank-you');
            } else {
              console.error('Form submission failed:', response.statusText);
              alert('Something went wrong. Please try again later.');
            }      
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
          sr.reveal('.home-contact-info', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.home-contact-form', {
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
    <section className="home-contact-section" ref={sectionRef}>
      <div className="home-contact-container">
        {/* Left Side: Contact Info */}
        <div className="home-contact-info">
          <div className="home-contact-badge">Get In Touch</div>
          <h2 className="home-contact-title">Let's Start a Conversation</h2>
          <div className="home-contact-details">
            <div className="home-contact-item">
              <div className="home-contact-icon-wrapper">
                <FaMapMarkerAlt className="home-contact-icon" />
              </div>
              <div className="home-contact-item-content">
                <h4>Visit Us</h4>
                <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.location)}`} 
                   target="_blank" 
                   rel="noopener noreferrer">
                  {CONTACT_INFO.location}
                </a>
              </div>
            </div>
            <div className="home-contact-item">
              <div className="home-contact-icon-wrapper">
                <FaEnvelope className="home-contact-icon" />
              </div>
              <div className="home-contact-item-content">
                <h4>Email Us</h4>
                <a href={`mailto:${CONTACT_INFO.email}`}>
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <div className="home-contact-item">
              <div className="home-contact-icon-wrapper">
                <FaPhoneAlt className="home-contact-icon" />
              </div>
              <div className="home-contact-item-content">
                <h4>Call Us</h4>
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`}>
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="home-contact-form">
          <h3 className="home-form-title">
            <FaEnvelope /> Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="home-contact-form-inner">
            <input 
              type="text" 
              placeholder="Your Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
              className="home-form-input"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
              className="home-form-input"
            />
            <input 
              type="text" 
              placeholder="Subject" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required 
              className="home-form-input"
            />
            <textarea 
              rows={5} 
              placeholder="Your Message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
              className="home-form-textarea"
            />
            <button 
              type="submit" 
              className={`home-contact-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="home-spinner"></div>
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