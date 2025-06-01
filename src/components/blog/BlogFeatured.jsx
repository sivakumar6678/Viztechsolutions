import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';
import './BlogFeatured.css';

const BlogFeatured = () => {
  const sectionRef = useRef(null);

  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Discover the latest trends shaping the web development landscape, from AI integration to progressive web apps and the rise of serverless architecture.',
      image: '/images/blog/web-development-trends.jpg',
      category: 'Web Development',
      author: 'Sivakumar C',
      date: '2024-01-15',
      readTime: '8 min read',
      featured: true,
      slug: 'future-web-development-trends-2024'
    },
    {
      id: 2,
      title: 'UI/UX Design Principles That Drive Conversions',
      excerpt: 'Learn how strategic design decisions can significantly impact your conversion rates and user engagement.',
      image: '/images/blog/ui-ux-design-principles.jpg',
      category: 'Design',
      author: 'Design Team',
      date: '2024-01-10',
      readTime: '6 min read',
      featured: true,
      slug: 'ui-ux-design-principles-conversions'
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
          <div className="featured-badge">Featured Articles</div>
          <h2 className="featured-title">Latest Insights from Our Experts</h2>
          <p className="featured-description">
            Dive deep into the world of technology, design, and digital innovation with our 
            carefully curated featured articles written by industry experts.
          </p>
        </div>
        
        {/* Featured Posts Grid */}
        <div className="featured-posts-grid">
          {featuredPosts.map((post, index) => (
            <article className={`featured-post ${index === 0 ? 'main-featured' : 'secondary-featured'}`} key={post.id}>
              <div className="featured-post-image">
                <img src={post.image} alt={post.title} />
                <div className="featured-overlay">
                  <div className="featured-category">{post.category}</div>
                </div>
              </div>
              
              <div className="featured-post-content">
                <div className="featured-post-meta">
                  <div className="meta-item">
                    <FaUser />
                    <span>{post.author}</span>
                  </div>
                  <div className="meta-item">
                    <FaCalendarAlt />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="meta-item">
                    <FaClock />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="featured-post-title">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                
                <p className="featured-post-excerpt">{post.excerpt}</p>
                
                <Link to={`/blog/${post.slug}`} className="featured-read-more">
                  Read Full Article <FaArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {/* Featured Stats */}
        <div className="featured-stats">
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Articles Published</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">10K+</div>
            <div className="stat-label">Monthly Readers</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Expert Authors</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">Weekly</div>
            <div className="stat-label">New Content</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFeatured;