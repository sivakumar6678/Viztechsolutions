import { useState, useEffect, useRef } from 'react';
import { FaPlus, FaMinus, FaQuestionCircle } from 'react-icons/fa';
import './ContactFAQ.css';

const ContactFAQ = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How long does it take to complete a website project?',
      answer: 'Project timelines vary depending on complexity and requirements. A simple website typically takes 2-4 weeks, while complex e-commerce or custom applications can take 6-12 weeks. We provide detailed timelines during our initial consultation.'
    },
    {
      id: 2,
      question: 'What is included in your web design packages?',
      answer: 'Our packages include custom design, responsive development, content management system, basic SEO optimization, contact forms, social media integration, and 3 months of free support. We also provide training on how to manage your website.'
    },
    {
      id: 3,
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! We offer comprehensive support packages including regular updates, security monitoring, backup services, performance optimization, and technical support. Our support plans start from ₹5,000 per month.'
    },
    {
      id: 4,
      question: 'Can you help with digital marketing and SEO?',
      answer: 'Absolutely! We provide complete digital marketing services including SEO optimization, social media marketing, Google Ads management, content marketing, and analytics reporting to help grow your online presence.'
    },
    {
      id: 5,
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods including bank transfers, UPI, credit/debit cards, and digital wallets. We typically work with a 50% advance payment and 50% upon project completion.'
    },
    {
      id: 6,
      question: 'Do you work with clients outside Chennai?',
      answer: 'Yes, we work with clients across India and internationally. We conduct virtual meetings and use collaborative tools to ensure smooth communication throughout the project, regardless of location.'
    },
    {
      id: 7,
      question: 'Can you redesign my existing website?',
      answer: 'Certainly! We specialize in website redesigns to improve user experience, modernize design, enhance performance, and add new functionality. We can work with your existing content or help create new content.'
    },
    {
      id: 8,
      question: 'What if I need changes after the project is completed?',
      answer: 'We provide 3 months of free minor changes and support after project completion. For major changes or additional features, we offer competitive rates and quick turnaround times.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
          sr.reveal('.faq-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.faq-item', {
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
  }, []);

  return (
    <section className="contact-faq-section" ref={sectionRef}>
      <div className="contact-faq-container">
        {/* FAQ Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <FaQuestionCircle /> FAQ
          </div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <p className="faq-description">
            Find answers to common questions about our services, process, and policies. 
            If you don't find what you're looking for, feel free to contact us directly.
          </p>
        </div>
        
        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
              key={faq.id}
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>
              <div className={`faq-answer ${activeIndex === index ? 'expanded' : ''}`}>
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* FAQ Footer */}
        <div className="faq-footer">
          <h3>Still have questions?</h3>
          <p>
            Can't find the answer you're looking for? Our team is here to help you with 
            any questions or concerns you may have.
          </p>
          <div className="faq-contact-buttons">
            <a href="tel:+918331994495" className="faq-contact-btn primary">
              Call Us Now
            </a>
            <a href="mailto:info@viztechsolutions.in" className="faq-contact-btn secondary">
              Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFAQ;