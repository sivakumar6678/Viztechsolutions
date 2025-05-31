import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaBars, FaTimes, FaArrowRight } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  // Close mobile menu when clicking a link
  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <header className={`premium-header ${scrolled ? 'scrolled' : ''}`}>
      <Navbar 
        expand="lg" 
        expanded={expanded} 
        onToggle={setExpanded} 
        className="container"
      >
        {/* Logo */}
        <Link to="/" className="logo-container">
          <img src="/images/vizlogo.jpg" alt="VizTech Solutions Logo" className="logo" />
          <div className="brand-text">
            <span className="site-title">VizTech Solutions</span>
            <span className="site-tagline">Digital Excellence</span>
          </div>
        </Link>
        
        {/* Mobile Toggle Button */}
        <Navbar.Toggle aria-controls="navbarNav">
          <span className="navbar-toggler-icon">
            {expanded ? <FaTimes /> : <FaBars />}
          </span>
        </Navbar.Toggle>
        
        {/* Navigation Menu */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Nav.Item>
              <NavLink 
                to="/" 
                className={({isActive}) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                <span className="nav-link-text">Home</span>
                <span className="nav-link-line"></span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink 
                to="/about" 
                className={({isActive}) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                <span className="nav-link-text">About</span>
                <span className="nav-link-line"></span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink 
                to="/services" 
                className={({isActive}) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                <span className="nav-link-text">Services</span>
                <span className="nav-link-line"></span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink 
                to="/portfolio" 
                className={({isActive}) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                <span className="nav-link-text">Portfolio</span>
                <span className="nav-link-line"></span>
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink 
                to="/blog" 
                className={({isActive}) => 
                  `nav-link ${isActive ? 'active' : ''}`
                }
                onClick={closeMenu}
              >
                <span className="nav-link-text">Blog</span>
                <span className="nav-link-line"></span>
              </NavLink>
            </Nav.Item>
            
            {/* Contact Button */}
            <Nav.Item className="nav-item-cta">
              <NavLink 
                to="/contact" 
                className="nav-contact-btn"
                onClick={closeMenu}
              >
                Contact Us <FaArrowRight />
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;