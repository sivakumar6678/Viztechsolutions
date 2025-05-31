import { useEffect, useRef } from 'react';
import './ClientsSection.css';
import varadha from '../../assets/images/varada logo.png';
import rvCricketGears from '../../assets/images/RV Cricket Gears Final_page-0001.jpg';
import client3 from '../../assets/images/3.png';
import kidluv from '../../assets/images/KIDLUV.png';
import biteBliss from '../../assets/images/Bite Bliss.png';
import teaholic from '../../assets/images/Teaholic.png';
import mAndm from '../../assets/images/M&M.jpg';
import client from '../../assets/images/1.png';



const ClientsSection = () => {
  const clientLogos = [
    { id: 1, src: varadha , alt: 'Varada' },
    { id: 2, src: rvCricketGears, alt: 'RV Cricket Gears' },
    { id: 3, src: client3, alt: 'Client 3' },
    { id: 4, src: kidluv, alt: 'KIDLUV' },
    { id: 5, src: biteBliss, alt: 'Bite Bliss' },
    { id: 6, src: teaholic, alt: 'Teaholic' },
    { id: 7, src: client, alt: 'Client 7' },
    { id: 8, src: mAndm, alt: 'M&M' },
    // Duplicate logos to create continuous scrolling effect
    { id: 11, src: varadha , alt: 'Varada' },
    { id: 12, src: rvCricketGears, alt: 'RV Cricket Gears' },
    { id: 13, src: client3, alt: 'Client 3' },
    { id: 14, src: kidluv, alt: 'KIDLUV' },
    { id: 15, src: biteBliss, alt: 'Bite Bliss' },
    { id: 16, src: teaholic, alt: 'Teaholic' },
    { id: 17, src: client, alt: 'Client 7' },
    { id: 18, src: mAndm, alt: 'M&M' },
    { id: 21, src: varadha , alt: 'Varada' },
    { id: 22, src: rvCricketGears, alt: 'RV Cricket Gears' },
    { id: 23, src: client3, alt: 'Client 3' },
    { id: 24, src: kidluv, alt: 'KIDLUV' },
    { id: 25, src: biteBliss, alt: 'Bite Bliss' },
    { id: 26, src: teaholic, alt: 'Teaholic' },
    { id: 27, src: client, alt: 'Client 7' },
    { id: 28, src: mAndm, alt: 'M&M' },
  ];

  return (
    <section className="clients-section">
      <div className="marquee-container">
        <div className="marquee-content">
          {clientLogos.map(logo => (
            <img 
              key={logo.id} 
              src={logo.src} 
              alt={logo.alt} 
              className="client-logo" 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;