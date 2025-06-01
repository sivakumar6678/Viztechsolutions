import { useEffect } from 'react';
import './About.css';

import AboutIntro from '../components/about/AboutIntro';
import AboutMission from '../components/about/AboutMission';

import AboutProcess from '../components/about/AboutProcess';

import AboutCTA from '../components/about/AboutCTA';

const About = () => {
  // Set page title
  useEffect(() => {
    document.title = 'About Us | VizTech Solutions';
  }, []);

  return (
    <>
      <AboutIntro />
      <AboutMission />
      <AboutProcess />
      <AboutCTA />
    </>
  );
};

export default About;