import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaArrowRight, FaHome, FaInfoCircle, FaTools, FaBriefcase, FaBlog } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Navigation items array with icons
  const navigationItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/services', label: 'Services', icon: <FaTools /> },
    { path: '/portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { path: '/blog', label: 'Blog', icon: <FaBlog /> }
  ];

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link or route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setExpanded(false);
  };

  // Handle mobile menu toggle
  const toggleMenu = () => {
    setExpanded(!expanded);
  };

  // Reusable navigation link component with improved handling
  const NavigationLink = ({ item, isMobile = false, onClick }) => (
    <NavLink 
      to={item.path} 
      className={({isActive}) => 
        `${isMobile ? 'mobile-nav-link' : 'nav-link'} ${isActive ? 'active' : ''}`
      }
      onClick={onClick}
      end={item.path === '/'} // Ensures home link is only active on exact match
    >
      <span>
        {!isMobile && item.icon}
        {isMobile && item.icon}
        {item.label}
      </span>
      {isMobile && <FaArrowRight className="mobile-nav-arrow" />}
    </NavLink>
  );

  return (
    <header className={`professional-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo Section */}
        <Link to="/" className="logo-section" onClick={closeMenu}>
          <div className="logo-wrapper">
            <img src="/images/vizlogo.jpg" alt="VizTech Solutions" className="company-logo" />
          </div>
          <div className="company-info">
            <h1 className="company-name">VizTech Solutions</h1>
            <span className="company-tagline">Digital Excellence</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="desktop-navigation">
          <ul className="nav-list">
            {navigationItems.map((item) => (
              <li key={item.path} className="nav-item">
                <NavigationLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Contact & CTA Section */}
        <div className="header-actions">
          <div className="contact-info">
            <a href="tel:+918331994495" className="contact-link">
              <FaPhone className="contact-icon" />
              <span>+91 83319 94495</span>
            </a>
          </div>
          
          <Link to="/contact" className="cta-button">
            <span>Get Started</span>
            <FaArrowRight className="cta-icon" />
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${expanded ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`mobile-navigation ${expanded ? 'active' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <img src="/images/vizlogo.jpg" alt="VizTech Solutions" />
              <div className="mobile-brand-info">
                <h3>VizTech Solutions</h3>
                <span>Digital Excellence</span>
              </div>
            </div>
          </div>
          
          <nav className="mobile-nav-menu">
            <ul className="mobile-nav-list">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <NavigationLink 
                    item={item} 
                    isMobile={true} 
                    onClick={closeMenu} 
                  />
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mobile-nav-footer">
            <div className="mobile-contact">
              <a href="tel:+918331994495" className="mobile-contact-item">
                <FaPhone />
                <span>+91 83319 94495</span>
              </a>
              <a href="mailto:info@viztechsolutions.in" className="mobile-contact-item">
                <FaEnvelope />
                <span>info@viztechsolutions.in</span>
              </a>
            </div>
            
            <Link to="/contact" className="mobile-cta" onClick={closeMenu}>
              <span>Get Started Today</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay */}
      <div 
        className={`mobile-overlay ${expanded ? 'active' : ''}`}
        onClick={closeMenu}
      ></div>
    </header>
  );
};

export default Header;