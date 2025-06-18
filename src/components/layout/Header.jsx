import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaArrowRight, FaHome, FaInfoCircle, FaTools, FaBriefcase, FaBlog, FaTimes } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const location = useLocation();
  const mobileNavRef = useRef(null);
  const headerRef = useRef(null);

  // Navigation items array with icons
  const navigationItems = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaInfoCircle /> },
    { path: '/services', label: 'Services', icon: <FaTools /> },
    { path: '/portfolio', label: 'Portfolio', icon: <FaBriefcase /> },
    { path: '/blog', label: 'Blog', icon: <FaBlog /> }
  ];

  // Handle responsive breakpoints and scroll events
  useEffect(() => {
    const handleResize = () => {
      setMobileView(window.innerWidth < 992);
    };
    
    const handleScroll = () => {
      // Use a threshold that adapts to mobile/desktop
      const scrollThreshold = mobileView ? 30 : 50;
      setScrolled(window.scrollY > scrollThreshold);
    };

    // Initial checks
    handleResize();
    handleScroll();

    // Add event listeners
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileView]);

  // Close mobile menu when clicking a link or route changes
  useEffect(() => {
    setExpanded(false);
  }, [location]);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (expanded) {
      // Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
      
      // Add escape key listener to close menu
      const handleEscKey = (e) => {
        if (e.key === 'Escape') {
          setExpanded(false);
        }
      };
      
      document.addEventListener('keydown', handleEscKey);
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    } else {
      // Restore scrolling when menu is closed
      document.body.style.overflow = '';
    }
  }, [expanded]);

  // Close mobile menu
  const closeMenu = () => {
    setExpanded(false);
  };

  // Handle mobile menu toggle with animation timing
  const toggleMenu = () => {
    setExpanded(prevState => !prevState);
  };
  
  // Handle swipe to close menu
  useEffect(() => {
    if (!mobileNavRef.current) return;
    
    let touchStartX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e) => {
      if (!expanded) return;
      
      const touchEndX = e.touches[0].clientX;
      const diff = touchStartX - touchEndX;
      
      // If swiping left (diff > 0) and the swipe is significant
      if (diff > 50) {
        closeMenu();
      }
    };
    
    const navElement = mobileNavRef.current;
    navElement.addEventListener('touchstart', handleTouchStart);
    navElement.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      navElement.removeEventListener('touchstart', handleTouchStart);
      navElement.removeEventListener('touchmove', handleTouchMove);
    };
  }, [expanded, mobileNavRef]);

  // Enhanced navigation link component with improved accessibility and animations
  const NavigationLink = ({ item, isMobile = false, onClick }) => {
    // Determine if this is the active route
    const isCurrentRoute = location.pathname === item.path || 
                          (item.path === '/' && location.pathname === '/');
    
    return (
      <NavLink 
        to={item.path} 
        className={({isActive}) => 
          `${isMobile ? 'mobile-nav-link' : 'nav-link'} ${isActive ? 'active' : ''}`
        }
        onClick={onClick}
        end={item.path === '/'} // Ensures home link is only active on exact match
        aria-current={isCurrentRoute ? 'page' : undefined}
        role="menuitem"
      >
        <span className="nav-link-content">
          <span className="nav-icon-wrapper">
            {item.icon}
          </span>
          <span className="nav-label">{item.label}</span>
        </span>
        {isMobile && <FaArrowRight className="mobile-nav-arrow" aria-hidden="true" />}
      </NavLink>
    );
  };

  return (
    <header 
      ref={headerRef}
      className={`professional-header ${scrolled ? 'scrolled' : ''} ${mobileView ? 'mobile-view' : ''}`}
    >
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
        <nav className="desktop-navigation" aria-label="Main navigation">
          <ul className="nav-list" role="menubar">
            {navigationItems.map((item) => (
              <li key={item.path} className="nav-item" role="none">
                <NavigationLink item={item} />
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Contact & CTA Section */}
        <div className="header-actions">
          <div className="contact-info">
            <a href="tel:+918331994495" className="contact-link" aria-label="Call us">
              <FaPhone className="contact-icon" aria-hidden="true" />
              <span>+91 83319 94495</span>
            </a>
          </div>
          
          <Link to="/contact" className="cta-button" aria-label="Get Started">
            <span>Get Started</span>
            <FaArrowRight className="cta-icon" aria-hidden="true" />
          </Link>
          
          {/* Mobile Menu Toggle - Enhanced for accessibility */}
          <button 
            className={`mobile-menu-toggle ${expanded ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-expanded={expanded}
            aria-controls="mobile-navigation"
            aria-label={expanded ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{expanded ? "Close menu" : "Open menu"}</span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - Enhanced with refs and accessibility */}
      <div 
        id="mobile-navigation"
        ref={mobileNavRef}
        className={`mobile-navigation ${expanded ? 'active' : ''}`}
        aria-hidden={!expanded}
      >
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <img src="/images/vizlogo.jpg" alt="VizTech Solutions" />
              <div className="mobile-brand-info">
                <h3>VizTech Solutions</h3>
                <span>Digital Excellence</span>
              </div>
            </div>
            <button 
              className="mobile-close-button" 
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>
          
          <nav className="mobile-nav-menu" aria-label="Mobile navigation">
            <ul className="mobile-nav-list" role="menu">
              {navigationItems.map((item) => (
                <li key={item.path} role="none">
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
              <a href="tel:+918331994495" className="mobile-contact-item" aria-label="Call us">
                <FaPhone aria-hidden="true" />
                <span>+91 83319 94495</span>
              </a>
              <a href="mailto:info@viztechsolutions.in" className="mobile-contact-item" aria-label="Email us">
                <FaEnvelope aria-hidden="true" />
                <span>info@viztechsolutions.in</span>
              </a>
            </div>
            
            <Link to="/contact" className="mobile-cta" onClick={closeMenu} aria-label="Get Started Today">
              <span>Get Started Today</span>
              <FaArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Overlay with improved interaction */}
      <div 
        className={`mobile-overlay ${expanded ? 'active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
        tabIndex="-1"
      ></div>
    </header>
  );
};

export default Header;