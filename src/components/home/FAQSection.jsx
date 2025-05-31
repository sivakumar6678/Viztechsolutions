import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FAQSection.css';

const FAQSection = () => {
  const sectionRef = useRef(null);

  const faqs = [
    {
      id: 1,
      question: "What services does VizTech Solutions offer?",
      answer: "We offer a comprehensive range of digital services including UI/UX design, web development, brand identity, digital marketing, data dashboards, and business development consulting."
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer: "Project timelines vary depending on scope and complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      id: 3,
      question: "What is your design process like?",
      answer: "Our design process includes discovery (understanding your needs), research, wireframing, design concepts, revisions, and final delivery. We maintain open communication throughout to ensure your vision is realized."
    },
    {
      id: 4,
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally. We can discuss these options based on your specific needs."
    },
    {
      id: 5,
      question: "How do you price your services?",
      answer: "We provide customized quotes based on project requirements, complexity, and timeline. We believe in transparent pricing with no hidden costs. Contact us for a detailed quote for your specific project."
    },
    {
      id: 6,
      question: "Can you help with existing websites or only new ones?",
      answer: "We work with both new projects and existing websites. Whether you need a complete redesign, specific improvements, or ongoing maintenance, we can help enhance your digital presence."
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
    <section className="faq-section" ref={sectionRef}>
      <div className="faq-container">
        {/* FAQ Header */}
        <div className="faq-header">
          <div className="faq-heading">
            <h2>Frequently Asked Questions</h2>
            <p className="faq-subheading">Find answers to common questions about our services and process.</p>
          </div>
          <Link to="/contact" className="faq-contact-btn">Ask a Question</Link>
        </div>
        
        {/* FAQ List */}
        <div className="faq-list">
          {faqs.map(faq => (
            <div className="faq-item" key={faq.id}>
              <h3 className="faq-question">{faq.question}</h3>
              <p className="faq-answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;