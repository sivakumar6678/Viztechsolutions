import { useEffect } from 'react';
import './Blog.css';
import BlogFeatured from '../components/blog/BlogFeatured';
import BlogGrid from '../components/blog/BlogGrid';

const Blog = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Blog | VizTech Solutions - Insights & Updates';
  }, []);

  return (
    <div className="blog-page">
      <BlogFeatured />
      <BlogGrid />
    </div>
  );
};

export default Blog;