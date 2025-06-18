import { useEffect, useRef, useState } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import './AboutTestimonials.css';

const AboutTestimonials = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Varada Jewellers',
      position: 'Jewelry Store',
      image: '/images/varada logo.png',
      quote: 'VizTech Solutions transformed our online presence with a stunning website that perfectly captures our brand essence. Their attention to detail and commitment to quality exceeded our expectations.',
      rating: 5
    },
    {
      id: 2,
      name: 'RV Cricket Gears',
      position: 'Sports Equipment Store',
      image: '/images/RV Cricket Gears Final_page-0001.jpg',
      quote: 'Working with VizTech Solutions was a game-changer for our business. Their team created a user-friendly e-commerce platform that has significantly increased our online sales and customer engagement.',
      rating: 5
    },
    {
      id: 3,
      name: 'Bite Bliss',
      position: 'Restaurant Chain',
      image: '/images/Bite Bliss.png',
      quote: 'The team at VizTech Solutions delivered a website that not only looks great but also performs exceptionally well. Their strategic approach to design and development has helped us attract more customers.',
      rating: 5
    },
    {
      id: 4,
      name: 'Teaholic',
      position: 'Tea Shop',
      image: '/images/Teaholic.png',
      quote: 'VizTech Solutions understood our vision from day one and brought it to life beautifully. Their creativity, technical expertise, and responsive communication made the entire process smooth and enjoyable.',
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Handle manual navigation
  const goToTestimonial = (index) => {
    setActiveIndex(index);
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
    <section className="testimonials-section" ref={sectionRef}>
      <div className="testimonials-container">
        {/* Testimonials Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">What Our Clients Say</h2>
          <p className="testimonials-description">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
        
        {/* Testimonials Carousel */}
        <div className="testimonials-carousel">
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
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-author-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="testimonial-author-info">
                    <h4 className="testimonial-author-name">{testimonial.name}</h4>
                    <p className="testimonial-author-position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
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

export default AboutTestimonials;