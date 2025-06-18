import { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaEye, FaCode, FaPalette, FaFilter, FaTimes } from 'react-icons/fa';
import './PortfolioGrid.css';
import Alpha from '../../assets/images/portfolio/alalpha fitness-3.PNG';
import Teaholic from '../../assets/images/portfolio/teaholic-2.JPG';
import DessertDay from '../../assets/images/portfolio/dessert-1.PNG';
import Kidluv from '../../assets/images/portfolio/kidluv-2.jpeg';
import CraveNow from '../../assets/images/portfolio/crave now-2.PNG';
import RentWheels from '../../assets/images/portfolio/Rent wheels.png';
const PortfolioGrid = () => {
  // Refs
  const sectionRef = useRef(null);
  
  // State management
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
  /**
   * Handle responsive behavior
   * Detects screen size changes and updates the isMobile state
   */
  useEffect(() => {
    // Debounced resize handler for better performance
    let resizeTimer;
    
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setIsMobile(window.innerWidth <= 768);
      }, 100);
    };
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimer);
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Alpha Fitness Pro App',
      category: 'ui-ux',
      categories: ['ui-ux', 'app'],
      description: 'A fitness tracking application designed to help users monitor their workouts, nutrition, and progress.',
      image: Alpha,
      liveUrl: 'https://www.behance.net/gallery/209206527/ALPHA-FITNESS-PRO-APP-UNFINISHED-UI',
      categoryLabel: 'UI/UX Design'
    },
    {
      id: 2,
      title: 'Teaholic - The Logo Story',
      category: 'branding',
      categories: ['branding'],
      description: 'Brand identity design for a premium tea company, focusing on creating a memorable and distinctive logo.',
      image: Teaholic,
      liveUrl: 'https://www.behance.net/gallery/209301847/Teaholic-The-Logo-Story',
      categoryLabel: 'Branding'
    },
    {
      id: 3,
      title: 'Dessert Day Food & Drink',
      category: 'ui-ux',
      categories: ['ui-ux', 'branding'],
      description: 'A delightful brand and interface design for a dessert shop, creating a sweet and inviting digital experience.',
      image: DessertDay,
      liveUrl: 'https://www.behance.net/gallery/209093845/Dessert-Day-Food-Drink',
      categoryLabel: 'UI/UX Design & Branding'
    },
    {
      id: 4,
      title: 'KIDLUV Baby Care Spa',
      category: 'branding',
      categories: ['branding', 'web'],
      description: 'A warm and nurturing brand identity for a baby care spa, designed to appeal to parents seeking premium care.',
      image: Kidluv,
      liveUrl: 'https://www.behance.net/gallery/209106769/KIDLUV-BABY-CARE-SPA',
      categoryLabel: 'Branding & Web Design'
    },
    {
      id: 5,
      title: 'Crave Now Food Delivery App',
      category: 'ui-ux',
      categories: ['ui-ux', 'app'],
      description: 'A user-friendly food delivery application designed to provide easy access to users\' favorite meals.',
      image: CraveNow,
      liveUrl: 'https://www.behance.net/gallery/209093545/Crave-Now-Easy-Access-to-your-Cravings',
      categoryLabel: 'UI/UX Design'
    },
    {
      id: 6,
      title: 'Rent Wheels Car Rental App',
      category: 'ui-ux',
      categories: ['ui-ux', 'app'],
      description: 'A sleek and efficient car rental application that simplifies the process of finding and booking vehicles.',
      image: RentWheels,
      liveUrl: 'https://www.behance.net/gallery/209850037/RENT-WHEELS-Car-Rental-App',
      categoryLabel: 'UI/UX Design'
    }
  ];

  /**
   * Filter projects based on active filter
   * Uses memoization for better performance
   */
  useEffect(() => {
    // Apply filter with a small delay for smoother transitions
    const applyFilter = () => {
      if (activeFilter === 'all') {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(projects.filter(project => 
          project.categories.includes(activeFilter)
        ));
      }
    };
    
    // Small delay for better UX when filtering
    const filterTimer = setTimeout(applyFilter, 50);
    
    // Cleanup
    return () => clearTimeout(filterTimer);
  }, [activeFilter]);

  /**
   * Initialize with all projects on component mount
   */
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  /**
   * Initialize ScrollReveal animations
   * Optimized for performance and reusability
   */
  useEffect(() => {
    // Using dynamic import for ScrollReveal
    const initScrollReveal = async () => {
      try {
        const ScrollRevealModule = await import('scrollreveal');
        const ScrollReveal = ScrollRevealModule.default;
        
        // Base configuration
        const sr = ScrollReveal({
          origin: 'bottom',
          distance: '50px',
          duration: 1000,
          delay: 100,
          easing: 'cubic-bezier(0.5, 0, 0, 1)',
          mobile: true,
          reset: false,
          useDelay: 'always', // Ensures animations run on filter change
          viewFactor: 0.1 // Triggers animation when 10% of element is visible
        });

        // Apply animations if section is available
        if (sectionRef.current) {
          // Portfolio items animation
          sr.reveal('.portfolio-item', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200,
            interval: 100,
            opacity: 0,
            scale: 0.95,
            cleanup: true // Clean up previous animations
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    // Initialize animations with a small delay to ensure DOM is ready
    const animationTimer = setTimeout(initScrollReveal, 100);
    
    // Cleanup
    return () => clearTimeout(animationTimer);
  }, [filteredProjects]);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'web-design':
        return <FaPalette />;
      case 'web-development':
        return <FaCode />;
      case 'ecommerce':
        return <FaExternalLinkAlt />;
      case 'branding':
        return <FaPalette />;
      case 'mobile-app':
        return <FaCode />;
      default:
        return <FaEye />;
    }
  };

  /**
   * Toggle mobile filter drawer
   */
  const toggleMobileFilter = () => {
    setMobileFilterOpen(!mobileFilterOpen);
  };
  
  /**
   * Filter options configuration
   */
  const filterOptions = [
    { key: 'all', label: 'All Projects' },
    { key: 'ui-ux', label: 'UI/UX Design' },
    { key: 'branding', label: 'Branding' },
    { key: 'web', label: 'Web Development' },
    { key: 'app', label: 'App Design' }
  ];
  
  /**
   * Get the active filter label
   */
  const getActiveFilterLabel = () => {
    return activeFilter === 'all' 
      ? 'All Projects' 
      : filterOptions.find(f => f.key === activeFilter)?.label;
  };
  
  /**
   * Mobile Filter Toggle Button Component
   */
  const MobileFilterToggle = () => (
    <div className="mobile-filter-toggle">
      <button 
        className="mobile-filter-btn"
        onClick={toggleMobileFilter}
        aria-label="Toggle filter menu"
      >
        <FaFilter /> <span>Filter Projects</span> ({getActiveFilterLabel()})
      </button>
    </div>
  );
  
  /**
   * Filter Buttons Component
   */
  const FilterButtons = () => (
    <div className={`portfolio-filter-buttons ${isMobile ? 'mobile' : ''} ${mobileFilterOpen ? 'open' : ''}`}>
      {isMobile && (
        <div className="mobile-filter-header">
          <h3>Filter Projects</h3>
          <button 
            className="mobile-filter-close" 
            onClick={toggleMobileFilter}
            aria-label="Close filter menu"
          >
            <FaTimes />
          </button>
        </div>
      )}
      
      <div className="filter-buttons-container">
        {filterOptions.map(filter => (
          <button
            key={filter.key}
            className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
            onClick={() => {
              setActiveFilter(filter.key);
              if (isMobile) setMobileFilterOpen(false);
            }}
            aria-pressed={activeFilter === filter.key}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
  
  /**
   * Portfolio Card Component
   */
  const PortfolioCard = ({ project }) => (
    <div className="portfolio-item" key={project.id}>
      <div className="portfolio-card">
        <div className="portfolio-card-image">
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy" 
            width="100%" 
            height="auto"
          />
          <div className="portfolio-card-overlay">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="portfolio-card-link"
              aria-label={`View ${project.title} project`}
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
        <div className="portfolio-card-content">
          <span className="portfolio-card-category">{project.categoryLabel}</span>
          <h3 className="portfolio-card-title">{project.title}</h3>
          <p className="portfolio-card-description">{project.description}</p>
          
          {/* Mobile View Button */}
          {isMobile && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mobile-view-project"
              aria-label={`View ${project.title} project`}
            >
              <FaEye /> View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
  
  /**
   * No Projects Message Component
   */
  const NoProjectsMessage = () => (
    <div className="no-projects">
      <p>No projects found for the selected category.</p>
      <button 
        className="reset-filter-btn"
        onClick={() => setActiveFilter('all')}
        aria-label="Show all projects"
      >
        Show All Projects
      </button>
    </div>
  );
  
  return (
    <section className="portfolio-grid-section" ref={sectionRef}>
      <div className="portfolio-grid-container">
        {/* Mobile Filter Toggle Button */}
        {isMobile && <MobileFilterToggle />}
        
        {/* Filter Buttons - Desktop or Mobile Drawer */}
        <FilterButtons />
        
        {/* Mobile Filter Overlay */}
        {isMobile && mobileFilterOpen && (
          <div 
            className="mobile-filter-overlay" 
            onClick={toggleMobileFilter}
            aria-hidden="true"
          ></div>
        )}

        {/* Active Filter Indicator for Mobile */}
        {isMobile && (
          <div className="mobile-active-filter">
            <span>Showing: </span>
            <strong>{getActiveFilterLabel()}</strong>
          </div>
        )}

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && <NoProjectsMessage />}
      </div>
    </section>
  );
};

export default PortfolioGrid;