import { useEffect, useRef } from 'react';
import './AboutPartners.css';

const AboutPartners = () => {
  const sectionRef = useRef(null);

  const partners = [
    {
      id: 1,
      name: 'Google',
      logo: '/images/partners/google.png',
      description: 'Google Cloud Partner'
    },
    {
      id: 2,
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Microsoft Azure Partner'
    },
    {
      id: 3,
      name: 'AWS',
      logo: '/images/partners/aws.png',
      description: 'Amazon Web Services Partner'
    },
    {
      id: 4,
      name: 'Adobe',
      logo: '/images/partners/adobe.png',
      description: 'Adobe Creative Partner'
    },
    {
      id: 5,
      name: 'Figma',
      logo: '/images/partners/figma.png',
      description: 'Figma Design Partner'
    },
    {
      id: 6,
      name: 'Shopify',
      logo: '/images/partners/shopify.png',
      description: 'Shopify Plus Partner'
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
          sr.reveal('.partners-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.partner-item', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200,
            interval: 100
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section className="partners-section" ref={sectionRef}>
      <div className="partners-container">
        {/* Partners Header */}
        <div className="partners-header">
          <h2 className="partners-title">Our Technology Partners</h2>
          <p className="partners-description">
            We collaborate with industry-leading technology partners to deliver cutting-edge solutions 
            and ensure our clients have access to the best tools and platforms available.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="partners-grid">
          {partners.map(partner => (
            <div className="partner-item" key={partner.id}>
              <div className="partner-logo">
                <img src={partner.logo} alt={partner.name} />
              </div>
              <div className="partner-info">
                <h3 className="partner-name">{partner.name}</h3>
                <p className="partner-description">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Partners CTA */}
        <div className="partners-cta">
          <p className="partners-cta-text">
            Interested in partnering with us? Let's explore opportunities to work together.
          </p>
          <a href="mailto:info@viztechsolutions.in" className="partners-cta-button">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutPartners;