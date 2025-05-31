import { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Set page title
  useEffect(() => {
    document.title = 'VizTech Solutions | Contact';
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('Form submitted:', formData);
    
    // Redirect to thank you page
    navigate('/thank-you');
  };

  return (
    <main className="container-fluid">
      <section className="contact-hero-section">
        <div className="contact-hero-overlay"></div>
        <Container>
          <div className="contact-hero-content">
            <span className="contact-hero-badge">Get In Touch</span>
            <h1 className="contact-hero-title">Let's Start a <span>Conversation</span></h1>
            <p className="contact-hero-description">
              We'd love to hear from you. Reach out to us for any inquiries or project discussions.
            </p>
          </div>
        </Container>
      </section>

      <section className="contact-main-section">
        <Container>
          <Row>
            <Col lg={5} md={12} className="contact-info-col">
              <div className="contact-info-card">
                <h2>Contact Information</h2>
                <p>Feel free to reach out to us through any of the following channels:</p>
                
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="contact-info-text">
                      <h3>Our Location</h3>
                      <p>Chennai, Tamil Nadu, India - 600091</p>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaEnvelope />
                    </div>
                    <div className="contact-info-text">
                      <h3>Email Us</h3>
                      <p><a href="mailto:viztechsolutions.in@gmail.com">viztechsolutions.in@gmail.com</a></p>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaPhoneAlt />
                    </div>
                    <div className="contact-info-text">
                      <h3>Call Us</h3>
                      <p><a href="tel:+918331994495">+91 8331994495</a></p>
                    </div>
                  </div>
                  
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <FaClock />
                    </div>
                    <div className="contact-info-text">
                      <h3>Working Hours</h3>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={7} md={12} className="contact-form-col">
              <div className="contact-form-card">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                
                <Form onSubmit={handleSubmit} className="contact-form">
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="name" 
                          value={formData.name}
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control 
                          type="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleChange}
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control 
                          type="tel" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control 
                          type="text" 
                          name="subject" 
                          value={formData.subject}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control 
                      as="textarea" 
                      rows={5} 
                      name="message" 
                      value={formData.message}
                      onChange={handleChange}
                      required 
                    />
                  </Form.Group>
                  
                  <Button type="submit" className="contact-submit-btn">
                    Send Message
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Contact;