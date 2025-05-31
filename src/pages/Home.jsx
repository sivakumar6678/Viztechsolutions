import { useEffect } from 'react';
import './Home.css';
import HeroSection from '../components/home/HeroSection';
import ClientsSection from '../components/home/ClientsSection';
import StatsCTASection from '../components/home/StatsCTASection';
import IntroSection from '../components/home/IntroSection';
import ServicesSection from '../components/home/ServicesSection';
import ExpertSection from '../components/home/ExpertSection';
import FAQSection from '../components/home/FAQSection';
import ChatSection from '../components/home/ChatSection';
import BlogSection from '../components/home/BlogSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  // Set page title
  useEffect(() => {
    document.title = 'VizTech Solutions | Digital Excellence';
  }, []);

  return (
    <>
      <HeroSection />
      <ClientsSection />
      <IntroSection />
      <ServicesSection />
      <StatsCTASection />
      <ExpertSection />
      <FAQSection />
      <ChatSection />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;