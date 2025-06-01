import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane, FaUser, FaEnvelope, FaPhone, FaTag, FaComment } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceOptions = [
    'UI/UX Design',
    'Data Dashboards',
    'Web Development',
    'Business Development',
    'Magazine & Ad Strategy',
    'Logos & Mockups',
    'Other'
  ];

  const budgetOptions = [
    'Under ₹25,000',
    '₹25,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,00,000',
    'Above ₹2,00,000',
    'Let\'s Discuss'
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real app, you would send this to your backend
      console.log('Form submitted:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
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
          sr.reveal('.contact-form-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.contact-form-card', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 200
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section className="contact-form-section" ref={sectionRef}>
      <div className="contact-form-container">
        {/* Form Header */}
        <div className="contact-form-header">
          <h2 className="form-title">Send Us a Message</h2>
          <p className="form-description">
            Ready to start your project? Fill out the form below with your details and project 
            requirements. We'll get back to you within 24 hours with a detailed proposal.
          </p>
        </div>
        
        {/* Contact Form */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FaUser /> Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FaEnvelope /> Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  <FaPhone /> Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <FaTag /> Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter message subject"
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="budget" className="form-label">
                  Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="form-select"
                >
                  <option value="">Select budget range</option>
                  {budgetOptions.map((budget, index) => (
                    <option key={index} value={budget}>{budget}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                <FaComment /> Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="6"
                placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className={`form-submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
          
          <div className="form-note">
            <p>
              <strong>Note:</strong> All fields marked with * are required. 
              We respect your privacy and will never share your information with third parties.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;