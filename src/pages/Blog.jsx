import { useEffect } from 'react';

const Blog = () => {
  // Set page title
  useEffect(() => {
    document.title = 'VizTech Solutions | Blog';
  }, []);

  return (
    <main className="container-fluid">
      <section className="blog-hero-section">
        <div className="blog-hero-overlay"></div>
        <div className="container">
          <div className="blog-hero-content">
            <span className="blog-hero-badge">Our Blog</span>
            <h1 className="blog-hero-title">Insights & <span>Updates</span></h1>
            <p className="blog-hero-description">
              Stay updated with the latest trends, insights, and news from the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Blog content will be added here */}
      <section className="blog-content-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2>Our Blog Page is Coming Soon</h2>
              <p>We're currently working on creating insightful articles for you.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blog;