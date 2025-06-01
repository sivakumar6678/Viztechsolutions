import { useEffect } from 'react';
import './Blog.css';
import PageHeader from '../components/common/PageHeader';
import BlogFeatured from '../components/blog/BlogFeatured';
import BlogGrid from '../components/blog/BlogGrid';
import BlogNewsletter from '../components/blog/BlogNewsletter';
import BlogCTA from '../components/blog/BlogCTA';

const Blog = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Blog | VizTech Solutions - Insights & Updates';
  }, []);

  return (
    <>
      <PageHeader 
        title="Our Blog" 
        subtitle="Stay updated with the latest trends, insights, and expert tips from the digital world"
        background="/images/blog-bg.jpg"
      />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
      <BlogCTA />
    </>
  );
};

export default Blog;