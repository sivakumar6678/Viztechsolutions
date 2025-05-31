import { useEffect } from 'react';
import './Preloader.css';

const Preloader = () => {
  // Add overflow hidden to body when preloader is active
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-spinner"></div>
        <div className="preloader-logo">
          <img src="/images/vizlogo.jpg" alt="VizTech Solutions Logo" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;