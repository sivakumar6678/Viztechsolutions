import { useEffect, useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import './ContactSection.css';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
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
              <span>Chennai, Tamil Nadu, India - 600091</span>
            </div>
            <div className="contact-item">
              <FaEnvelope />
              <span>viztechsolutions.in@gmail.com</span>
            </div>
            <div className="contact-item">
              <FaPhoneAlt />
              <span>+91 8331994495</span>
            </div>
          </div>
        </div>
        
        {/* Right Side: Contact Form */}
        <div className="contact-form">
          <h3 className="form-title">
            <FaEnvelope /> Send Us a Message
          </h3>
          <Form onSubmit={handleSubmit}>
            <Form.Control 
              type="text" 
              placeholder="Your Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
            <Form.Control 
              type="email" 
              placeholder="Your Email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
            <Form.Control 
              type="text" 
              placeholder="Subject" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required 
            />
            <Form.Control 
              as="textarea" 
              rows={5} 
              placeholder="Your Message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              required 
            />
            <Button type="submit" className="contact-btn">
              Send Message
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;