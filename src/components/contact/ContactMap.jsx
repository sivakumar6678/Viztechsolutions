import { useEffect, useRef } from 'react';
import { FaMapMarkerAlt, FaDirections, FaCar, FaTrain } from 'react-icons/fa';
import './ContactMap.css';

const ContactMap = () => {
  const sectionRef = useRef(null);

  const locationInfo = {
    address: 'Chennai, Tamil Nadu, India - 600091',
    coordinates: { lat: 13.0827, lng: 80.2707 }, // Chennai coordinates
    landmarks: [
      'Near Chennai Central Railway Station',
      '15 minutes from Chennai Airport',
      'Close to major IT corridors'
    ]
  };

  const transportOptions = [
    {
      id: 1,
      icon: <FaCar />,
      title: 'By Car',
      description: 'Parking available on-site. Easy access from major highways.'
    },
    {
      id: 2,
      icon: <FaTrain />,
      title: 'By Metro/Train',
      description: 'Chennai Central and nearby metro stations provide easy access.'
    },
    {
      id: 3,
      icon: <FaDirections />,
      title: 'Directions',
      description: 'Use Google Maps for real-time navigation and traffic updates.'
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
          sr.reveal('.map-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.map-content', {
            origin: 'left',
            distance: '50px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.location-info', {
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

  const openInGoogleMaps = () => {
    const query = encodeURIComponent(locationInfo.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section className="contact-map-section" ref={sectionRef}>
      <div className="contact-map-container">
        {/* Map Header */}
        <div className="map-header">
          <h2 className="map-title">Visit Our Office</h2>
          <p className="map-description">
            We'd love to meet you in person! Our office is conveniently located in Chennai 
            with easy access to public transportation and parking facilities.
          </p>
        </div>
        
        <div className="map-content-wrapper">
          {/* Map Container */}
          <div className="map-content">
            <div className="map-placeholder">
              <div className="map-overlay">
                <div className="map-info">
                  <FaMapMarkerAlt className="map-icon" />
                  <h3>VizTech Solutions</h3>
                  <p>{locationInfo.address}</p>
                  <button onClick={openInGoogleMaps} className="map-button">
                    <FaDirections /> Open in Google Maps
                  </button>
                </div>
              </div>
              {/* You can replace this with an actual map component like Google Maps or Mapbox */}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.84916296526!2d80.06145829999999!3d13.0826802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1647875234567!5m2!1sen!2sin`}
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '15px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="VizTech Solutions Location"
              ></iframe>
            </div>
          </div>
          
          {/* Location Info */}
          <div className="location-info">
            <div className="location-details">
              <h3 className="location-title">Location Details</h3>
              <div className="location-address">
                <FaMapMarkerAlt />
                <span>{locationInfo.address}</span>
              </div>
              
              <div className="location-landmarks">
                <h4>Nearby Landmarks</h4>
                <ul>
                  {locationInfo.landmarks.map((landmark, index) => (
                    <li key={index}>{landmark}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="transport-options">
              <h3 className="transport-title">How to Reach Us</h3>
              <div className="transport-list">
                {transportOptions.map(option => (
                  <div className="transport-item" key={option.id}>
                    <div className="transport-icon">
                      {option.icon}
                    </div>
                    <div className="transport-content">
                      <h4>{option.title}</h4>
                      <p>{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="visit-note">
              <h4>Planning a Visit?</h4>
              <p>
                We recommend scheduling an appointment in advance to ensure our team 
                is available to meet with you. Call us or send an email to arrange 
                a convenient time for your visit.
              </p>
              <button onClick={() => window.location.href = 'tel:+918331994495'} className="call-button">
                Call to Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;