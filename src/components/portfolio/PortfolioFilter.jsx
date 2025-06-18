import { useState, useEffect, useRef } from 'react';
import './PortfolioFilter.css';

const PortfolioFilter = ({ onFilterChange }) => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'web-design', label: 'Web Design', count: 5 },
    { id: 'web-development', label: 'Web Development', count: 4 },
    { id: 'branding', label: 'Branding', count: 2 },
    { id: 'ecommerce', label: 'E-commerce', count: 3 },
    { id: 'mobile-app', label: 'Mobile Apps', count: 1 }
  ];

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    if (onFilterChange) {
      onFilterChange(filterId);
    }
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
          sr.reveal('.portfolio-filter-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.filter-buttons', {
            origin: 'bottom',
            distance: '30px',
            duration: 1000,
            delay: 200
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
  }, []);

  return (
    <section className="portfolio-filter-section" ref={sectionRef}>
      <div className="portfolio-filter-container">
        {/* Filter Header */}
        <div className="portfolio-filter-header">
          <h2 className="filter-title">Explore Our Work</h2>
          <p className="filter-description">
            Browse through our diverse portfolio of projects. Use the filters below to view 
            specific categories or see all our work at once.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {filterCategories.map(category => (
            <button
              key={category.id}
              className={`filter-button ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => handleFilterChange(category.id)}
            >
              <span className="filter-label">{category.label}</span>
              <span className="filter-count">({category.count})</span>
            </button>
          ))}
        </div>
        
        {/* Filter Info */}
        <div className="filter-info">
          <p className="filter-result-text">
            {activeFilter === 'all' 
              ? `Showing all ${filterCategories[0].count} projects` 
              : `Showing ${filterCategories.find(cat => cat.id === activeFilter)?.count || 0} ${filterCategories.find(cat => cat.id === activeFilter)?.label.toLowerCase()} projects`
            }
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioFilter;