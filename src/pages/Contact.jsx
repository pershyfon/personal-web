import React from 'react';
import styled from 'styled-components';
import { theme } from '../styles/theme';
import { Card } from '../components/common/Card';
import { MotionDiv, fadeIn, staggerContainer } from '../styles/animations';
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding-top: 70px; /* For navbar */
`;

const ContactHeader = styled.section`
  padding: 4rem 0;
  text-align: center;
  background: linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.secondary} 100%);

  h1 {
    font-size: 2.5rem;
    color: ${theme.colors.primaryDark};
    margin-bottom: 1rem;
  }

  p {
    max-width: 700px;
    margin: 0 auto;
    color: ${theme.colors.textLight};
  }
`;

const ContactCards = styled.section`
  padding: 4rem 0;
`;

const CardsGrid = styled(MotionDiv)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const ContactCard = styled(Card)`
  text-align: center;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  .contact-icon {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
  }

  .contact-title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: ${theme.colors.primaryDark};
  }

  .contact-info {
    color: ${theme.colors.textLight};
    margin-bottom: 1.5rem;
  }

  .contact-link {
    display: inline-block;
    color: ${theme.colors.primary};
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${theme.colors.primaryDark};
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <ContactHeader>
        <div className="container">
          <h1>Get In Touch</h1>
          <p>
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out through any of these channels. I'm always
            open to new connections and collaborations.
          </p>
        </div>
      </ContactHeader>

      <ContactCards>
        <div className="container">
          <CardsGrid variants={staggerContainer} initial="hidden" animate="visible">
            <ContactCard variants={fadeIn}>
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <h3 className="contact-title">Location</h3>
              <p className="contact-info">Bogor, Indonesia</p>
            </ContactCard>

            <ContactCard variants={fadeIn}>
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3 className="contact-title">Email</h3>
              <p className="contact-info">avianasabrina12@gmail.com.com</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=avianasabrina12@gmail.com" target="_blank" rel="noopener noreferrer">
                Send Message
              </a>
            </ContactCard>

            <ContactCard variants={fadeIn}>
              <div className="contact-icon">
                <FaGithub />
              </div>
              <h3 className="contact-title">GitHub</h3>
              <p className="contact-info">github.com/pershyfon</p>
              <a href="https://github.com/pershyfon" target="_blank" rel="noopener noreferrer" className="contact-link">
                Visit Profile
              </a>
            </ContactCard>

            <ContactCard variants={fadeIn}>
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <h3 className="contact-title">LinkedIn</h3>
              <p className="contact-info">linkedin.com/in/sabrinaavianadewi</p>
              <a href="https://linkedin.com/in/sabrinaavianadewi" target="_blank" rel="noopener noreferrer" className="contact-link">
                Connect
              </a>
            </ContactCard>

            <ContactCard variants={fadeIn}>
              <div className="contact-icon">
                <FaInstagram />
              </div>
              <h3 className="contact-title">Personal Instagram</h3>
              <p className="contact-info">@avianasabrina</p>
              <a href="https://instagram.com/avianasabrina" target="_blank" rel="noopener noreferrer" className="contact-link">
                Follow
              </a>
            </ContactCard>
            <ContactCard variants={fadeIn}>
              <div className="contact-icon">
                <FaInstagram />
              </div>
              <h3 className="contact-title">College Instagram</h3>
              <p className="contact-info">@sbrnaviana</p>
              <a href="https://instagram.com/sbrnaviana" target="_blank" rel="noopener noreferrer" className="contact-link">
                Follow
              </a>
            </ContactCard>
          </CardsGrid>
        </div>
      </ContactCards>
    </ContactContainer>
  );
};

export default Contact;