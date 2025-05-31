import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './PageHeader.css';

const PageHeader = ({ title, subtitle, background }) => {
  const headerRef = useRef(null);

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

        if (headerRef.current) {
          sr.reveal('.page-header-content', {
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
    <div className="page-header" ref={headerRef} style={{ backgroundImage: `url(${background})` }}>
      <div className="page-header-overlay"></div>
      <div className="page-header-content">
        <h1 className="page-title">{title}</h1>
        <p className="page-subtitle">{subtitle}</p>
        <div className="page-breadcrumbs">
          <Link to="/">Home</Link> / <span>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;