import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaCheckCircle, FaHome, FaArrowRight } from 'react-icons/fa';

const ThankYou = () => {
  // Set page title
  useEffect(() => {
    document.title = 'VizTech Solutions | Thank You';
  }, []);

  return (
    <main className="container-fluid">
      <section className="thank-you-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <div className="thank-you-card">
                <div className="thank-you-icon">
                  <FaCheckCircle />
                </div>
                <h1 className="thank-you-title">Thank You!</h1>
                <p className="thank-you-message">
                  Your message has been successfully sent. We appreciate your interest in VizTech Solutions.
                  Our team will review your message and get back to you as soon as possible.
                </p>
                <div className="thank-you-actions">
                  <Link to="/" className="thank-you-btn home-btn">
                    <FaHome /> Back to Home
                  </Link>
                  <Link to="/services" className="thank-you-btn services-btn">
                    Explore Our Services <FaArrowRight />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default ThankYou;