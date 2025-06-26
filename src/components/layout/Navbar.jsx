import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { MotionDiv, fadeIn } from '../../styles/animations';
import { FaHome, FaProjectDiagram, FaUser, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled(MotionDiv)`
  background-color: ${theme.colors.white};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.primaryDark};
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.md}) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${theme.colors.primaryDark};
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.md}) {
    display: block;
  }
`;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 70%;
  height: 100vh;
  background: ${theme.colors.white};
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  transition: right 0.3s ease;
  padding: 2rem;
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const NavLink = styled(Link)`
  color: ${theme.colors.text};
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    color: ${theme.colors.primary};
  }

  &.active {
    color: ${theme.colors.primary};
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <NavContainer initial="hidden" animate="visible" variants={fadeIn}>
        <NavContent>
          <Logo to="/"><img src="/flowers.gif" alt="Logo" style={{ width: "32px", height: "32px" }} />Sabrina Aviana</Logo>
          <NavLinks>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
            <NavLink to="/projects">
              <FaProjectDiagram /> Projects
            </NavLink>
            <NavLink to="/about">
              <FaUser /> About
            </NavLink>
            <NavLink to="/contact">
              <FaEnvelope /> Contact
            </NavLink>
          </NavLinks>
          <MobileMenuButton onClick={toggleDrawer}>
            {isDrawerOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </NavContent>
      </NavContainer>

      <Overlay isOpen={isDrawerOpen} onClick={closeDrawer} />

      <Drawer isOpen={isDrawerOpen}>
        <DrawerHeader>
          <MobileMenuButton onClick={closeDrawer}>
            <FaTimes />
          </MobileMenuButton>
        </DrawerHeader>
        <MobileNavLinks>
          <NavLink to="/" onClick={closeDrawer}>
            <FaHome /> Home
          </NavLink>
          <NavLink to="/projects" onClick={closeDrawer}>
            <FaProjectDiagram /> Projects
          </NavLink>
          <NavLink to="/about" onClick={closeDrawer}>
            <FaUser /> About
          </NavLink>
          <NavLink to="/contact" onClick={closeDrawer}>
            <FaEnvelope /> Contact
          </NavLink>
        </MobileNavLinks>
      </Drawer>
    </>
  );
};

export default Navbar;