import { useEffect } from 'react';

const Services = () => {
  // Set page title
  useEffect(() => {
    document.title = 'VizTech Solutions | Services';
  }, []);

  return (
    <main className="container-fluid">
      <section className="services-hero-section">
        <div className="services-hero-overlay"></div>
        <div className="container">
          <div className="services-hero-content">
            <span className="services-hero-badge">Our Services</span>
            <h1 className="services-hero-title">Premium Digital <span>Solutions</span></h1>
            <p className="services-hero-description">
              We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Services content will be added here */}
      <section className="services-content-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Our Services Page is Coming Soon</h2>
              <p>We're currently working on creating an amazing services page for you.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;