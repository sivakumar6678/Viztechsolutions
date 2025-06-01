import { useEffect } from 'react';
import './About.css';
import PageHeader from '../components/common/PageHeader';
import AboutIntro from '../components/about/AboutIntro';
import AboutMission from '../components/about/AboutMission';
import AboutTeam from '../components/about/AboutTeam';
import AboutProcess from '../components/about/AboutProcess';
import AboutTestimonials from '../components/about/AboutTestimonials';
import AboutPartners from '../components/about/AboutPartners';
import AboutCTA from '../components/about/AboutCTA';

const About = () => {
  // Set page title
  useEffect(() => {
    document.title = 'About Us | VizTech Solutions';
  }, []);

  return (
    <>
      <PageHeader 
        title="About Us" 
        subtitle="Learn more about our team, mission, and values"
        background="/images/about-bg.jpg"
      />
      <AboutIntro />
      <AboutMission />
      <AboutTeam />
      <AboutProcess />
      <AboutTestimonials />
      <AboutPartners />
      <AboutCTA />
    </>
  );
};

export default About;