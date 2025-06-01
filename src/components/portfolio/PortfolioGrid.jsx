import { useState, useEffect, useRef } from 'react';
import { FaExternalLinkAlt, FaEye, FaCode, FaPalette } from 'react-icons/fa';
import './PortfolioGrid.css';

const PortfolioGrid = () => {
  const sectionRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState([]);

  const projects = [
    {
      id: 1,
      title: 'Varada Jewellers',
      category: 'ecommerce',
      description: 'Premium jewelry e-commerce platform with elegant design and seamless shopping experience',
      image: '/images/portfolio/varada-jewellers.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://varadajewellers.com',
      features: ['E-commerce', 'Payment Integration', 'Responsive Design', 'SEO Optimized']
    },
    {
      id: 2,
      title: 'RV Cricket Gears',
      category: 'ecommerce',
      description: 'Sports equipment e-commerce store with advanced filtering and product showcase',
      image: '/images/portfolio/rv-cricket-gears.jpg',
      technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL'],
      liveUrl: 'https://rvcricketgears.com',
      features: ['Product Catalog', 'Inventory Management', 'Mobile Responsive', 'Fast Loading']
    },
    {
      id: 3,
      title: 'Bite Bliss Restaurant',
      category: 'web-design',
      description: 'Modern restaurant website with online menu and reservation system',
      image: '/images/portfolio/bite-bliss.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      liveUrl: 'https://bitebliss.in',
      features: ['Online Menu', 'Reservation System', 'Gallery', 'Contact Forms']
    },
    {
      id: 4,
      title: 'Teaholic Cafe',
      category: 'web-design',
      description: 'Cozy cafe website with warm design and online ordering capabilities',
      image: '/images/portfolio/teaholic.jpg',
      technologies: ['React', 'CSS3', 'Node.js', 'Express'],
      liveUrl: 'https://teaholic.in',
      features: ['Online Ordering', 'Menu Display', 'Location Info', 'Social Integration']
    },
    {
      id: 5,
      title: 'TechStart Solutions',
      category: 'web-development',
      description: 'Corporate website for IT consulting firm with service showcase',
      image: '/images/portfolio/techstart.jpg',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Bootstrap'],
      liveUrl: '#',
      features: ['Service Portfolio', 'Team Showcase', 'Blog System', 'Contact Management']
    },
    {
      id: 6,
      title: 'Green Earth NGO',
      category: 'web-design',
      description: 'Environmental NGO website with donation system and volunteer registration',
      image: '/images/portfolio/green-earth.jpg',
      technologies: ['WordPress', 'Custom Theme', 'PayPal', 'MailChimp'],
      liveUrl: '#',
      features: ['Donation System', 'Volunteer Portal', 'Event Management', 'Newsletter']
    },
    {
      id: 7,
      title: 'FitLife Gym',
      category: 'web-development',
      description: 'Fitness center website with membership management and class booking',
      image: '/images/portfolio/fitlife.jpg',
      technologies: ['React', 'Firebase', 'Stripe', 'Material-UI'],
      liveUrl: '#',
      features: ['Membership Portal', 'Class Booking', 'Trainer Profiles', 'Progress Tracking']
    },
    {
      id: 8,
      title: 'Artisan Crafts',
      category: 'ecommerce',
      description: 'Handmade crafts marketplace with artist profiles and custom orders',
      image: '/images/portfolio/artisan-crafts.jpg',
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS3'],
      liveUrl: '#',
      features: ['Artist Profiles', 'Custom Orders', 'Review System', 'Wishlist']
    },
    {
      id: 9,
      title: 'EduTech Platform',
      category: 'web-development',
      description: 'Online learning platform with course management and video streaming',
      image: '/images/portfolio/edutech.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'AWS'],
      liveUrl: '#',
      features: ['Course Management', 'Video Streaming', 'Progress Tracking', 'Certificates']
    },
    {
      id: 10,
      title: 'Brand Identity - StartupX',
      category: 'branding',
      description: 'Complete brand identity design for tech startup including logo and guidelines',
      image: '/images/portfolio/startupx-brand.jpg',
      technologies: ['Adobe Illustrator', 'Photoshop', 'Figma'],
      liveUrl: '#',
      features: ['Logo Design', 'Brand Guidelines', 'Business Cards', 'Letterhead']
    },
    {
      id: 11,
      title: 'HealthCare Plus',
      category: 'web-design',
      description: 'Medical clinic website with appointment booking and patient portal',
      image: '/images/portfolio/healthcare.jpg',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      liveUrl: '#',
      features: ['Appointment Booking', 'Patient Portal', 'Doctor Profiles', 'Health Tips']
    },
    {
      id: 12,
      title: 'Mobile App - FoodieGo',
      category: 'mobile-app',
      description: 'Food delivery mobile app design with intuitive user interface',
      image: '/images/portfolio/foodie-app.jpg',
      technologies: ['Figma', 'Adobe XD', 'Principle'],
      liveUrl: '#',
      features: ['UI/UX Design', 'Prototyping', 'User Flow', 'Icon Design']
    }
  ];

  // Filter projects based on active filter
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
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
          {['all', 'web-design', 'web-development', 'ecommerce', 'branding', 'mobile-app'].map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter === 'all' ? 'All Projects' : filter.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map(project => (
            <div className="portfolio-item" key={project.id}>
              <div className="portfolio-image">
                <img src={project.image} alt={project.title} />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <div className="project-category">
                      {getCategoryIcon(project.category)}
                      <span>{project.category.replace('-', ' ').toUpperCase()}</span>
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    {project.liveUrl !== '#' && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <FaExternalLinkAlt /> View Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="portfolio-content">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-features">
                  {project.features.slice(0, 2).map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
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