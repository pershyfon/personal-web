import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MotionDiv, fadeIn } from '../../styles/animations';

const FooterContainer = styled(MotionDiv)`
  background-color: ${theme.colors.primaryDark};
  color: ${theme.colors.white};
  padding: 2rem 0;
  text-align: center;
  width: 100%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 1.5rem 0;
`;

const SocialLink = styled.a`
  color: ${theme.colors.white};
  font-size: 1.5rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    color: ${theme.colors.secondary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContainer initial="hidden" animate="visible" variants={fadeIn}>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://github.com/pershyfon" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/sabrinaavianadewi" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </SocialLink>
          <SocialLink href="https://mail.google.com/mail/?view=cm&fs=1&to=avianasabrina12@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        <Copyright>© {new Date().getFullYear()} Sabrina Aviana Dewi. All rights reserved.</Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;