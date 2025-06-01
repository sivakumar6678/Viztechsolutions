import { useEffect } from 'react';
import './Portfolio.css';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioShowcase from '../components/portfolio/PortfolioShowcase';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';

const Portfolio = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Our Portfolio | VizTech Solutions';
  }, []);

  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <PortfolioShowcase />
      <PortfolioCTA />
    </>
  );
};

export default Portfolio;