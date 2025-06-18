import { useEffect, useRef, useState } from 'react';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ServicesTestimonials.css';

const ServicesTestimonials = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO, Varada Jewellers',
      company: 'Varada Jewellers',
      image: '/images/testimonials/client-1.jpg',
      quote: 'VizTech Solutions transformed our online presence completely. Their attention to detail and understanding of our brand was exceptional. The website they created has significantly increased our online sales.',
      rating: 5,
      service: 'Web Development'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      position: 'Marketing Director, RV Cricket Gears',
      company: 'RV Cricket Gears',
      image: '/images/testimonials/client-2.jpg',
      quote: 'Working with VizTech was a game-changer for our business. They delivered a stunning website that perfectly captures our brand essence and has helped us reach a wider audience.',
      rating: 5,
      service: 'UI/UX Design'
    },
    {
      id: 3,
      name: 'Amit Patel',
      position: 'Founder, Bite Bliss',
      company: 'Bite Bliss',
      image: '/images/testimonials/client-3.jpg',
      quote: 'The team at VizTech Solutions exceeded our expectations. Their creative approach and technical expertise resulted in a website that not only looks great but also performs exceptionally well.',
      rating: 5,
      service: 'Logos & Mockups'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      position: 'Owner, Teaholic',
      company: 'Teaholic',
      image: '/images/testimonials/client-4.jpg',
      quote: 'VizTech Solutions understood our vision from day one. Their collaborative approach and attention to detail made the entire process smooth and enjoyable. Highly recommended!',
      rating: 5,
      service: 'Data Dashboards'
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle manual navigation
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
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
          sr.reveal('.testimonials-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.testimonials-carousel', {
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
    <section className="services-testimonials-section" ref={sectionRef}>
      <div className="services-testimonials-container">
        {/* Testimonials Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-description">
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with VizTech Solutions.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="testimonials-carousel">
          <div className="testimonials-wrapper">
            <button className="carousel-button prev" onClick={goToPrevious}>
              <FaChevronLeft />
            </button>
            
            <div className="testimonials-slides">
              {testimonials.map((testimonial, index) => (
                <div 
                  className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`} 
                  key={testimonial.id}
                >
                  <div className="testimonial-content">
                    <div className="testimonial-quote-icon">
                      <FaQuoteLeft />
                    </div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                    <div className="testimonial-service">
                      Service: {testimonial.service}
                    </div>
                  </div>
                  
                  <div className="testimonial-author">
                    <div className="testimonial-author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-author-info">
                      <h4 className="testimonial-author-name">{testimonial.name}</h4>
                      <p className="testimonial-author-position">{testimonial.position}</p>
                      <p className="testimonial-author-company">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="carousel-button next" onClick={goToNext}>
              <FaChevronRight />
            </button>
          </div>
          
          {/* Testimonials Navigation */}
          <div className="testimonials-nav">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`testimonial-nav-dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesTestimonials;