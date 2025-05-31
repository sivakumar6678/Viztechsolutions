import { useEffect } from 'react';

const Portfolio = () => {
  // Set page title
  useEffect(() => {
    document.title = 'VizTech Solutions | Portfolio';
  }, []);

  return (
    <main className="container-fluid">
      <section className="portfolio-hero-section">
        <div className="portfolio-hero-overlay"></div>
        <div className="container">
          <div className="portfolio-hero-content">
            <span className="portfolio-hero-badge">Our Work</span>
            <h1 className="portfolio-hero-title">Showcasing Our <span>Creative Projects</span></h1>
            <p className="portfolio-hero-description">
              Explore our portfolio of successful projects that demonstrate our expertise and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio content will be added here */}
      <section className="portfolio-content-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Our Portfolio Page is Coming Soon</h2>
              <p>We're currently working on showcasing our amazing projects for you.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;