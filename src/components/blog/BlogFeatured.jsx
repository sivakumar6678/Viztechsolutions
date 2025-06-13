import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';
import './BlogFeatured.css';
import uiColorPalettesImg from '../../assets/images/blog/ui-color-palettes.jpg';
import authorImageSrc from '../../assets/images/author.jpg';

const BlogFeatured = () => {
  const sectionRef = useRef(null);

  const featuredPost = {
    id: 1,
    title: 'The Art of UI Color Palettes',
    excerpt: 'Have you ever seen a color that instantly reminded you of a particular brand? Or found yourself feeling uneasy in a room with clashing colors? Color plays a powerful role in design, affecting emotions, usability, and brand identity.',
    image: uiColorPalettesImg,
    category: 'UI Design',
    author: 'VizTech Solutions',
    date: '2024-10-15',
    readTime: '8 min read',
    featured: true,
    slug: 'art-of-ui-color-palettes',
    externalUrl: 'https://tadimarridadapeer.blogspot.com/2024/10/the-art-of-ui-color-palettes-for-ui.html'
  };

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
          sr.reveal('.featured-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.featured-post', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200,
            interval: 200
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <section className="blog-featured-section" ref={sectionRef}>
      <div className="blog-featured-container">
        {/* Featured Header */}
        <div className="featured-header">
          <div className="featured-badge">OUR BLOG</div>
          <h1 className="featured-title">Insights & Inspirations</h1>
          <p className="featured-description">
            Discover our latest thoughts on UI/UX design, data visualization, and creative storytelling.
          </p>
        </div>
        
        {/* Featured Content Grid - Blog + Author */}
        <div className="featured-content-grid">
          {/* Main Featured Blog */}
          <article className="featured-post main-featured">
            <div className="featured-post-image">
              <img src={featuredPost.image} alt={featuredPost.title} />
              <div className="featured-overlay">
                <div className="featured-category">{featuredPost.category}</div>
              </div>
            </div>
            
            <div className="featured-post-content">
              <div className="featured-post-meta">
                <div className="meta-item">
                  <FaUser />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>{formatDate(featuredPost.date)}</span>
                </div>
                <div className="meta-item">
                  <FaClock />
                  <span>{featuredPost.readTime}</span>
                </div>
              </div>
              
              <h3 className="featured-post-title">
                {featuredPost.externalUrl ? (
                  <a href={featuredPost.externalUrl} target="_blank" rel="noopener noreferrer">{featuredPost.title}</a>
                ) : (
                  <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                )}
              </h3>
              
              <p className="featured-post-excerpt">{featuredPost.excerpt}</p>
              
              {featuredPost.externalUrl ? (
                <a href={featuredPost.externalUrl} target="_blank" rel="noopener noreferrer" className="featured-read-more">
                  Read Full Article <FaArrowRight />
                </a>
              ) : (
                <Link to={`/blog/${featuredPost.slug}`} className="featured-read-more">
                  Read Full Article <FaArrowRight />
                </Link>
              )}
            </div>
          </article>

          {/* Author Section */}
          <div className="author-section">
            <div className="author-card">
              <div className="author-header">
                <div className="author-image">
                  <img 
                    src={authorImageSrc}
                    alt="VizTech Solutions Author"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="author-avatar-fallback" style={{display: 'none'}}>
                    <span>VT</span>
                  </div>
                </div>
                <h3>Meet the Author</h3>
                <p className="author-greeting">Hello!</p>
              </div>
              <div className="author-content">
                <p className="author-description">
                  I'm the Founder & CEO of VizTechsolutions, passionate about design and AI-driven solutions.
                </p>
                <div className="author-links">
                  <div className="author-link">
                    🌐 Website: <a href="https://viztechsolutions.in" target="_blank" rel="noopener noreferrer">viztechsolutions.in</a>
                  </div>
                  <div className="author-link">
                    📷 Instagram: <a href="https://instagram.com/viztechsolutions.in" target="_blank" rel="noopener noreferrer">@viztechsolutions.in</a>
                  </div>
                  <div className="author-link">
                    🔗 LinkedIn: <a href="https://linkedin.com/company/viztechsolutions" target="_blank" rel="noopener noreferrer">VizTechsolutions.in</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default BlogFeatured;