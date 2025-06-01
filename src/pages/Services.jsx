import { useEffect } from 'react';
import './Services.css';
import ServicesList from '../components/services/ServicesList';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesTestimonials from '../components/services/ServicesTestimonials';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Our Services | VizTech Solutions';
  }, []);

  return (
    <div className="services-page">
      <ServicesList />
      <ServicesProcess />
      <ServicesTestimonials />
      <ServicesCTA />
    </div>
  );
};

export default Services;