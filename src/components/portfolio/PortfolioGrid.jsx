import { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaEye, FaCode, FaPalette } from 'react-icons/fa';
import './PortfolioGrid.css';
import Alpha from '../../assets/images/portfolio/alalpha fitness-3.PNG';
import Teaholic from '../../assets/images/portfolio/teaholic-2.JPG';
import DessertDay from '../../assets/images/portfolio/dessert-1.PNG';
import Kidluv from '../../assets/images/portfolio/kidluv-2.jpeg';
import CraveNow from '../../assets/images/portfolio/crave now-2.PNG';
import RentWheels from '../../assets/images/portfolio/Rent wheels.png';
const PortfolioGrid = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

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

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => 
        project.categories.includes(activeFilter)
      ));
    }
  }, [activeFilter]);

  // Initialize with all projects
  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

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
          sr.reveal('.portfolio-item', {
            origin: 'bottom',
            distance: '30px',
            duration: 800,
            delay: 200,
            interval: 100
          });
        }
      } catch (error) {
        console.error('Failed to load ScrollReveal:', error);
      }
    };

    initScrollReveal();
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

  return (
    <section className="portfolio-grid-section" ref={sectionRef}>
      <div className="portfolio-grid-container">
        {/* Filter Buttons */}
        <div className="portfolio-filter-buttons">
          {[
            { key: 'all', label: 'All Projects' },
            { key: 'ui-ux', label: 'UI/UX Design' },
            { key: 'branding', label: 'Branding' },
            { key: 'web', label: 'Web Development' },
            { key: 'app', label: 'App Design' }
          ].map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-card">
                <div className="portfolio-card-image">
                  <img src={project.image} alt={project.title} />
                  <div className="portfolio-card-overlay">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="portfolio-card-link"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <div className="portfolio-card-content">
                  <span className="portfolio-card-category">{project.categoryLabel}</span>
                  <h3 className="portfolio-card-title">{project.title}</h3>
                  <p className="portfolio-card-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;