import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowRight, FaClock } from 'react-icons/fa';
import './BlogGrid.css';
import uiColorPalettesImg from '../../assets/images/blog/ui-color-palettes.jpg';
import emotionalDesignImg from '../../assets/images/blog/emotional-design.png';
import typographyManualImg from '../../assets/images/blog/typography-manual.jpg';

const BlogGrid = () => {
  const sectionRef = useRef(null);


  const blogPosts = [
    { id: 1,
    title: 'The Art of UI Color Palettes',
    excerpt: 'Have you ever seen a color that instantly reminded you of a particular brand? Or found yourself feeling uneasy in a room with clashing colors? Color plays a powerful role in design, affecting emotions, usability, and brand identity.',
    image: uiColorPalettesImg,
    category: 'UI Design',
    author: 'VizTech Solutions',
    date: '2024-10-15',
    readTime: '8 min read',
    featured: true,
    slug: 'art-of-ui-color-palettes',
    tags: ['UI Design', 'Color Theory', 'Branding'],

    externalUrl: 'https://tadimarridadapeer.blogspot.com/2024/10/the-art-of-ui-color-palettes-for-ui.html'
  },
    {
      id: 2,
      title: 'The Human Touch: Elevating UI with Emotional Design',
      excerpt: 'In the digital era, the way we engage with technology is becoming increasingly personal. The world of user interface (UI) design is not just about creating functional and efficient tools; it\'s about crafting experiences that resonate on a deeper emotional level.',
      image: emotionalDesignImg,
      category: 'UX Design',
      author: 'VizTech Solutions',
      date: '2024-09-28',
      readTime: '10 min read',
      slug: 'human-touch-emotional-design',
      tags: ['UX Design', 'Emotional Design', 'User Experience'],
      externalUrl: 'https://tadimarridadapeer.blogspot.com/2024/09/the-human-touch-elevating-ui-with.html'
    },
    {
      id: 3,
      title: 'Typography Manual: 5 Golden Rules for Perfect Design',
      excerpt: 'Typography is an art that involves more than just selecting fonts. It\'s about harmony, balance, and readability in a graphic representation. Whether you\'re making a poster, a website, or even a magazine.',
      image: typographyManualImg,
      category: 'Typography',
      author: 'VizTech Solutions',
      date: '2024-11-05',
      readTime: '7 min read',
      slug: 'typography-manual-5-golden-rules',
      tags: ['Typography', 'Design Rules', 'Font Selection'],
      externalUrl: 'https://typographymanual.blogspot.com/2024/11/typography-manual-5-golden-rules-for.html'
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
          <h2 className="grid-title">Recent Blogs</h2>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="blog-posts-grid">
          {blogPosts.map(post => (
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
                    {post.externalUrl ? (
                      <a href={post.externalUrl} target="_blank" rel="noopener noreferrer">{post.title}</a>
                    ) : (
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    )}
                  </h3>
                  
                  <p className="blog-post-excerpt">{post.excerpt}</p>
                  
                  <div className="blog-post-tags">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="post-tag">{tag}</span>
                    ))}
                  </div>
                  
                  {post.externalUrl ? (
                    <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="blog-read-more">
                      Read More <FaArrowRight />
                    </a>
                  ) : (
                    <Link to={`/blog/${post.slug}`} className="blog-read-more">
                      Read More <FaArrowRight />
                    </Link>
                  )}
                </div>
              </article>
            ))
        }

      </div>
      </div>
    </section>
  );
};

export default BlogGrid;