import { useEffect } from 'react';
import './Services.css';
import PageHeader from '../components/common/PageHeader';
import ServicesOverview from '../components/services/ServicesOverview';
import ServicesList from '../components/services/ServicesList';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesPricing from '../components/services/ServicesPricing';
import ServicesTestimonials from '../components/services/ServicesTestimonials';
import ServicesCTA from '../components/services/ServicesCTA';

const Services = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Our Services | VizTech Solutions';
  }, []);

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive digital solutions to transform your business"
        background="/images/services-bg.jpg"
      />
      <ServicesOverview />
      <ServicesList />
      <ServicesProcess />
      <ServicesPricing />
      <ServicesTestimonials />
      <ServicesCTA />
    </>
  );
};

export default Services;