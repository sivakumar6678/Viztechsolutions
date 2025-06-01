import { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './ContactInfo.css';

const ContactInfo = () => {
  const sectionRef = useRef(null);

  const contactDetails = [
    {
      id: 1,
      icon: <FaMapMarkerAlt />,
      title: 'Our Location',
      info: 'Chennai, Tamil Nadu, India - 600091',
      description: 'Visit us at our office for in-person consultations'
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: 'Email Us',
      info: 'info@viztechsolutions.in',
      link: 'mailto:info@viztechsolutions.in',
      description: 'Send us an email and we\'ll respond within 24 hours'
    },
    {
      id: 3,
      icon: <FaPhoneAlt />,
      title: 'Call Us',
      info: '+91 83319 94495',
      link: 'tel:+918331994495',
      description: 'Call us during business hours for immediate assistance'
    },
    {
      id: 4,
      icon: <FaClock />,
      title: 'Working Hours',
      info: 'Monday - Friday: 9:00 AM - 6:00 PM',
      description: 'We\'re available during these hours for consultations'
    }
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/viztechsolutions',
      color: '#0077B5'
    },
    {
      id: 2,
      icon: <FaTwitter />,
      name: 'Twitter',
      url: 'https://twitter.com/viztechsolutions',
      color: '#1DA1F2'
    },
    {
      id: 3,
      icon: <FaInstagram />,
      name: 'Instagram',
      url: 'https://instagram.com/viztechsolutions',
      color: '#E4405F'
    }
  ];

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
          sr.reveal('.contact-info-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.contact-detail-card', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200,
            interval: 100
          });
          
          sr.reveal('.contact-social', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 400
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section className="contact-info-section" ref={sectionRef}>
      <div className="contact-info-container">
        {/* Contact Info Header */}
        <div className="contact-info-header">
          <h2 className="contact-info-title">Get in Touch</h2>
          <p className="contact-info-description">
            We're here to help you bring your digital vision to life. Reach out to us through 
            any of the channels below, and let's start a conversation about your project.
          </p>
        </div>
        
        {/* Contact Details Grid */}
        <div className="contact-details-grid">
          {contactDetails.map(detail => (
            <div className="contact-detail-card" key={detail.id}>
              <div className="contact-detail-icon">
                {detail.icon}
              </div>
              <div className="contact-detail-content">
                <h3 className="contact-detail-title">{detail.title}</h3>
                {detail.link ? (
                  <a href={detail.link} className="contact-detail-info">
                    {detail.info}
                  </a>
                ) : (
                  <p className="contact-detail-info">{detail.info}</p>
                )}
                <p className="contact-detail-description">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Social Media Links */}
        <div className="contact-social">
          <h3 className="social-title">Follow Us</h3>
          <p className="social-description">
            Stay connected with us on social media for updates and insights
          </p>
          <div className="social-links">
            {socialLinks.map(social => (
              <a 
                key={social.id}
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--social-color': social.color }}
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;