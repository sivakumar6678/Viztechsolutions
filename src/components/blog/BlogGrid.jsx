import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock, FaSearch, FaFilter } from 'react-icons/fa';
import './BlogGrid.css';

const BlogGrid = () => {
  const sectionRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  const categories = ['All', 'Web Development', 'Design', 'Digital Marketing', 'Technology', 'Business'];

  const blogPosts = [
    {
      id: 3,
      title: 'Building Responsive Websites with Modern CSS Grid',
      excerpt: 'Master the art of creating flexible, responsive layouts using CSS Grid and Flexbox for modern web applications.',
      image: '/images/blog/css-grid-responsive.jpg',
      category: 'Web Development',
      author: 'Sivakumar C',
      date: '2024-01-08',
      readTime: '7 min read',
      slug: 'building-responsive-websites-css-grid',
      tags: ['CSS', 'Responsive Design', 'Web Development']
    },
    {
      id: 4,
      title: 'The Psychology of Color in Web Design',
      excerpt: 'Understand how color choices impact user behavior and learn to create emotionally engaging web experiences.',
      image: '/images/blog/color-psychology-design.jpg',
      category: 'Design',
      author: 'Design Team',
      date: '2024-01-05',
      readTime: '5 min read',
      slug: 'psychology-color-web-design',
      tags: ['Color Theory', 'Psychology', 'UI Design']
    },
    {
      id: 5,
      title: 'SEO Best Practices for 2024: A Complete Guide',
      excerpt: 'Stay ahead of the competition with the latest SEO strategies and techniques that actually work in 2024.',
      image: '/images/blog/seo-best-practices.jpg',
      category: 'Digital Marketing',
      author: 'Marketing Team',
      date: '2024-01-03',
      readTime: '10 min read',
      slug: 'seo-best-practices-2024-guide',
      tags: ['SEO', 'Digital Marketing', 'Content Strategy']
    },
    {
      id: 6,
      title: 'React vs Vue.js: Choosing the Right Framework',
      excerpt: 'Compare the pros and cons of React and Vue.js to make an informed decision for your next project.',
      image: '/images/blog/react-vs-vue.jpg',
      category: 'Web Development',
      author: 'Development Team',
      date: '2024-01-01',
      readTime: '8 min read',
      slug: 'react-vs-vue-choosing-framework',
      tags: ['React', 'Vue.js', 'JavaScript Frameworks']
    },
    {
      id: 7,
      title: 'Creating Engaging User Experiences with Micro-Interactions',
      excerpt: 'Learn how small design details can make a big impact on user engagement and satisfaction.',
      image: '/images/blog/micro-interactions-ux.jpg',
      category: 'Design',
      author: 'UX Team',
      date: '2023-12-28',
      readTime: '6 min read',
      slug: 'engaging-user-experiences-micro-interactions',
      tags: ['UX Design', 'Micro-interactions', 'User Engagement']
    },
    {
      id: 8,
      title: 'The Rise of Progressive Web Apps (PWAs)',
      excerpt: 'Discover how PWAs are bridging the gap between web and mobile applications for better user experiences.',
      image: '/images/blog/progressive-web-apps.jpg',
      category: 'Technology',
      author: 'Tech Team',
      date: '2023-12-25',
      readTime: '9 min read',
      slug: 'rise-progressive-web-apps-pwas',
      tags: ['PWA', 'Mobile Development', 'Web Technology']
    },
    {
      id: 9,
      title: 'Digital Transformation Strategies for Small Businesses',
      excerpt: 'Practical steps and strategies to help small businesses embrace digital transformation successfully.',
      image: '/images/blog/digital-transformation.jpg',
      category: 'Business',
      author: 'Business Team',
      date: '2023-12-22',
      readTime: '7 min read',
      slug: 'digital-transformation-small-businesses',
      tags: ['Digital Transformation', 'Business Strategy', 'SMB']
    },
    {
      id: 10,
      title: 'Optimizing Website Performance: Core Web Vitals',
      excerpt: 'Learn how to improve your website\'s Core Web Vitals for better user experience and search rankings.',
      image: '/images/blog/core-web-vitals.jpg',
      category: 'Web Development',
      author: 'Performance Team',
      date: '2023-12-20',
      readTime: '8 min read',
      slug: 'optimizing-website-performance-core-web-vitals',
      tags: ['Performance', 'Core Web Vitals', 'SEO']
    },
    {
      id: 11,
      title: 'Social Media Marketing Trends for 2024',
      excerpt: 'Stay ahead of the curve with the latest social media marketing trends and strategies for the new year.',
      image: '/images/blog/social-media-trends.jpg',
      category: 'Digital Marketing',
      author: 'Social Media Team',
      date: '2023-12-18',
      readTime: '6 min read',
      slug: 'social-media-marketing-trends-2024',
      tags: ['Social Media', 'Marketing Trends', 'Content Marketing']
    }
  ];

  useEffect(() => {
    let filtered = blogPosts;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredPosts(filtered);
  }, [selectedCategory, searchTerm]);

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
          sr.reveal('.blog-grid-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.blog-filters', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 200
          });
          
          sr.reveal('.blog-post-card', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 300,
            interval: 100
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
    <section className="blog-grid-section" ref={sectionRef}>
      <div className="blog-grid-container">
        {/* Blog Grid Header */}
        <div className="blog-grid-header">
          <h2 className="grid-title">All Articles</h2>
          <p className="grid-description">
            Explore our comprehensive collection of articles covering web development, 
            design, digital marketing, and technology insights.
          </p>
        </div>
        
        {/* Blog Filters */}
        <div className="blog-filters">
          <div className="filter-search">
            <div className="search-input-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
          </div>
          
          <div className="filter-categories">
            <div className="filter-label">
              <FaFilter /> Filter by Category:
            </div>
            <div className="category-buttons">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="blog-posts-grid">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <article className="blog-post-card" key={post.id}>
                <div className="blog-post-image">
                  <img src={post.image} alt={post.title} />
                  <div className="blog-post-overlay">
                    <div className="post-category">{post.category}</div>
                  </div>
                </div>
                
                <div className="blog-post-content">
                  <div className="blog-post-meta">
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
                  
                  <h3 className="blog-post-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-post-tags">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="post-tag">{tag}</span>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="blog-read-more">
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="no-posts">
              <h3>No articles found</h3>
              <p>Try adjusting your search terms or category filter.</p>
            </div>
          )}
        </div>
        
        {/* Load More Button */}
        {filteredPosts.length > 0 && (
          <div className="load-more-section">
            <button className="load-more-btn">
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogGrid;