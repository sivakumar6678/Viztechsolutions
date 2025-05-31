import { useEffect, useRef } from 'react';
import { FaLinkedin, FaTwitter, FaBehance } from 'react-icons/fa';
import './AboutTeam.css';

const AboutTeam = () => {
  const sectionRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Tadimarda Peer',
      role: 'Founder & Creative Director',
      image: '/images/team-1.jpg',
      bio: 'With over 5 years of experience in UI/UX design and digital strategy, Tadimarda leads our creative vision and ensures every project meets the highest standards of design excellence.',
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        behance: 'https://www.behance.net/'
      }
    },
    {
      id: 2,
      name: 'Sivakumar C',
      role: 'Lead Developer',
      image: '/images/team-2.jpg',
      bio: 'Sivakumar brings 5+ years of expertise in full-stack development, specializing in creating robust, scalable web applications that combine cutting-edge technology with exceptional user experiences.',
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        behance: 'https://www.behance.net/'
      }
    },
    {
      id: 3,
      name: 'Sai Teja',
      role: 'UI/UX Designer',
      image: '/images/team-3.jpg',
      bio: 'Sai is passionate about creating intuitive, user-centered designs that solve real problems. With a keen eye for detail and a user-first approach, he crafts experiences that delight and engage.',
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        behance: 'https://www.behance.net/'
      }
    },
    {
      id: 4,
      name: 'Sai Kiran',
      role: 'Marketing Specialist',
      image: '/images/team-4.jpg',
      bio: 'Sai Kiran develops strategic marketing campaigns that drive results. With expertise in digital marketing and analytics, he helps our clients increase visibility and connect with their target audience.',
      social: {
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        behance: 'https://www.behance.net/'
      }
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
          sr.reveal('.team-header', {
            origin: 'top',
            distance: '30px',
            duration: 1000,
            delay: 100
          });
          
          sr.reveal('.team-member', {
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
    <section className="team-section" ref={sectionRef}>
      <div className="team-container">
        {/* Team Header */}
        <div className="team-header">
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-description">
            Our talented team of designers, developers, and strategists work together to bring your vision to life.
            With diverse skills and a shared passion for excellence, we're committed to delivering exceptional results.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map(member => (
            <div className="team-member" key={member.id}>
              <div className="team-member-image">
                <img src={member.image} alt={member.name} />
                <div className="team-member-social">
                  <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                  <a href={member.social.behance} target="_blank" rel="noopener noreferrer">
                    <FaBehance />
                  </a>
                </div>
              </div>
              <div className="team-member-info">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;