import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin, FaBehance, FaPaperPlane, 
  FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Footer Top with Logo and Newsletter */}
      <div className="footer-top-wrapper">
        <Container>
          <div className="footer-top">
            {/* Logo and Tagline */}
            <div className="footer-brand">
              <div className="footer-logo-container">
                <img src="/images/vizlogo.jpg" alt="VizTech Solutions Logo" className="footer-logo" />
                <div className="footer-brand-text">
                  <h3 className="footer-title">VizTech Solutions</h3>
                  <p className="footer-tagline">Bringing your digital vision to life</p>
                </div>
              </div>
              <p className="footer-description">
                We craft exceptional digital experiences that elevate brands, engage users, and drive business growth. 
                From stunning designs to powerful web solutions, we bring your vision to life.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=61567271925428&mibextid=ZbWKwL" 
                   className="footer-social-icon" 
                   aria-label="Facebook"
                   target="_blank"
                   rel="noopener noreferrer">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com/viztechsolutions.in/profilecard/?igsh=MXY3cjc5OTNzYXRuYg==" 
                   className="footer-social-icon" 
                   aria-label="Instagram"
                   target="_blank"
                   rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com/company/viztechsolutions.in/" 
                   className="footer-social-icon" 
                   aria-label="LinkedIn"
                   target="_blank"
                   rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.behance.net/tadimardadapeer" 
                   className="footer-social-icon" 
                   aria-label="Behance"
                   target="_blank"
                   rel="noopener noreferrer">
                  <FaBehance />
                </a>
              </div>
            </div>
            
            {/* Newsletter Subscription */}
            <div className="footer-newsletter">
              <h3 className="newsletter-title">Subscribe to Our Newsletter</h3>
              <p className="newsletter-description">Stay updated with our latest news, projects, and insights.</p>
              <Form className="newsletter-form">
                <div className="newsletter-input-group">
                  <Form.Control 
                    type="email" 
                    className="newsletter-input" 
                    placeholder="Enter your email address" 
                    required 
                  />
                  <Button type="submit" className="newsletter-button">
                    Subscribe <FaPaperPlane />
                  </Button>
                </div>
                <p className="newsletter-privacy">We respect your privacy. Unsubscribe at any time.</p>
              </Form>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Footer Main Content */}
      <div className="footer-main">
        <Container>
          <div className="footer-columns">
            {/* Company Column */}
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><Link to="/" className="footer-link">Home</Link></li>
                <li><Link to="/about" className="footer-link">About Us</Link></li>
                <li><Link to="/services" className="footer-link">Our Services</Link></li>
                <li><Link to="/portfolio" className="footer-link">Portfolio</Link></li>
                <li><Link to="/blog" className="footer-link">Blog</Link></li>
                <li><Link to="/contact" className="footer-link">Contact</Link></li>
              </ul>
            </div>

            {/* Services Column */}
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><Link to="/services" className="footer-link">UI/UX Design</Link></li>
                <li><Link to="/services" className="footer-link">Web Development</Link></li>
                <li><Link to="/services" className="footer-link">Brand Identity</Link></li>
                <li><Link to="/services" className="footer-link">Digital Marketing</Link></li>
                <li><Link to="/services" className="footer-link">Data Dashboards</Link></li>
                <li><Link to="/services" className="footer-link">Business Development</Link></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="footer-column">
              <h4 className="footer-heading">Resources</h4>
              <ul className="footer-links">
                <li><Link to="/blog" className="footer-link">Blog Articles</Link></li>
                <li><Link to="/portfolio" className="footer-link">Case Studies</Link></li>
                <li><Link to="/about" className="footer-link">Testimonials</Link></li>
                <li><Link to="/contact" className="footer-link">FAQs</Link></li>
                <li><Link to="/contact" className="footer-link">Support Center</Link></li>
                <li><Link to="/contact" className="footer-link">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <h4 className="footer-heading">Contact Us</h4>
              <ul className="footer-contact-info">
                <li>
                  <div className="contact-icon"><FaMapMarkerAlt /></div>
                  <div className="contact-text">Chennai, Tamil Nadu, India - 600091</div>
                </li>
                <li>
                  <div className="contact-icon"><FaEnvelope /></div>
                  <div className="contact-text">
                    <a href="mailto:viztechsolutions.in@gmail.com">viztechsolutions.in@gmail.com</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><FaPhoneAlt /></div>
                  <div className="contact-text">
                    <a href="tel:+918331994495">+91 8331994495</a>
                  </div>
                </li>
                <li>
                  <div className="contact-icon"><FaClock /></div>
                  <div className="contact-text">Mon-Fri: 9:00 AM - 6:00 PM</div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      
      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container>
          <div className="footer-bottom-content">
            <p className="copyright">&copy; {new Date().getFullYear()} VizTech Solutions. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy-policy" className="footer-bottom-link">Privacy Policy</Link>
              <Link to="/terms-of-service" className="footer-bottom-link">Terms of Service</Link>
              <Link to="/cookie-policy" className="footer-bottom-link">Cookie Policy</Link>
            </div>
          </div>
        </Container>
      </div>

      {/* WhatsApp Button */}
      <div className="whatsapp-btn-container my-5">
        <a className="whatsapp-btn" href="https://wa.me/+918331994495" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <span>Contact Us</span>
      </div>
    </footer>
  );
};

export default Footer;