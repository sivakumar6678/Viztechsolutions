import { useEffect } from 'react';
import './Portfolio.css';
import PageHeader from '../components/common/PageHeader';
import PortfolioOverview from '../components/portfolio/PortfolioOverview';
import PortfolioFilter from '../components/portfolio/PortfolioFilter';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import PortfolioStats from '../components/portfolio/PortfolioStats';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';

const Portfolio = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Our Portfolio | VizTech Solutions';
  }, []);

  return (
    <>
      <PageHeader 
        title="Our Portfolio" 
        subtitle="Showcasing our creative projects and successful client collaborations"
        background="/images/portfolio-bg.jpg"
      />
      <PortfolioOverview />
      <PortfolioFilter />
      <PortfolioGrid />
      <PortfolioStats />
      <PortfolioCTA />
    </>
  );
};

export default Portfolio;