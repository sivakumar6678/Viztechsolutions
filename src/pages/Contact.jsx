import { useEffect } from 'react';
import './Contact.css';
import PageHeader from '../components/common/PageHeader';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';
import ContactMap from '../components/contact/ContactMap';
import ContactFAQ from '../components/contact/ContactFAQ';

const Contact = () => {
  // Set page title
  useEffect(() => {
    document.title = 'Contact Us | VizTech Solutions';
  }, []);

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Let's discuss your project and bring your vision to life"
        background="/images/contact-bg.jpg"
      />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactFAQ />
    </>
  );
};

export default Contact;