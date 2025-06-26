import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { 
  slideInFromLeft, 
  slideInFromBottom, 
  scaleUp,
  staggerContainer,
  fadeIn
} from '../styles/animations';
import img1 from '../assets/images/Osbanas.jpeg';
import img2 from '../assets/images/UXA.jpeg';
import img3 from '../assets/images/HeySiri.jpeg';
import img4 from '../assets/images/Model.jpeg';
import img5 from '../assets/images/lembarpena.jpg';
import img6 from '../assets/images/mommyhood.jpg';
import { FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa';
import { SiJavascript, SiSpring, SiFigma, SiScikitlearn  } from 'react-icons/si';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const HeroSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 100px 0 80px;
  background: linear-gradient(135deg, ${theme.colors.background} 0%, #fff 100%);
  overflow-x: hidden;
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
  grid-template-columns: 1fr;
  grid-template-areas: 
    "content"
    "image";
  }
`;

const TextContent = styled(motion.div)`
  padding: 1rem;
  @media (max-width: ${theme.breakpoints.md}) {
    grid-area: content;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-top: ${theme.spacing.sm};
  color: ${theme.colors.primaryDark};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${theme.colors.textLight};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 1.25rem;
  }
`;

const Description = styled(motion.p)`
  margin-bottom: ${theme.spacing.lg};
  max-width: 500px;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xl};
`;

const StatsContainer = styled(motion.div)`
  display: flex;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${theme.colors.primary};
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.textLight};
`;

const SkillsContainer = styled(motion.div)`
  margin-bottom: ${theme.spacing.sm};
  max-width: 500px;
`;

const SkillsTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.textLight};
`;

const SkillsList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
`;

const CarouselGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
  max-width: 450px;

  @media (max-width: ${theme.breakpoints.md}) {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    gap: 0.75rem;
    padding-bottom: 1rem;
    max-width: 100%;
  }
`;


const ProjectThumbnail = styled(motion.div)`
  width: 200px;
  height: 120px;
  background-image: ${({ image }) => `url(${image})`};
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  box-shadow: ${theme.shadows.medium};
  scroll-snap-align: start;
  flex: 0 0 auto;

  @media (max-width: ${theme.breakpoints.md}) {
    width: 180px;
    height: 110px;
  }
`;

const rowVariants = (direction) => ({
  animate: {
    x: direction === 'right' ? [0, -30, 0] : [0, 30, 0],
    transition: {
      repeat: Infinity,
      duration: 5,
      ease: "easeInOut"
    }
  }
});

const ContactTeaser = styled(motion.div)`
  background: linear-gradient(135deg, ${theme.colors.secondary}, ${theme.colors.primaryLight});
  padding: ${theme.spacing.md};
  box-shadow: ${theme.shadows.large};
  border-radius: 1.5rem;
  text-align: center;
  max-width: 500px;
  margin: ${theme.spacing.xl} auto 0;

  h3 {
    color: ${theme.colors.text};
  }

  p {
    margin-bottom: ${theme.spacing.sm};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: ${theme.spacing.sm};
  }
`;

const Home = () => {
  const projectImages = [img1, img2, img3, img4, img5, img6];
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <PageContainer>
      <HeroSection id="home">
        <div className="container">
          <HeroContent>
            <TextContent>
              <Title variants={slideInFromLeft}>Hi, I'm Sabrina</Title>
              <Subtitle variants={slideInFromLeft}>Computer Science Student</Subtitle>
              <Description variants={fadeIn}>
                Interested and open to work in Data Science, UI/UX, and Web Development. Here's a glimpse of what I've worked on.
              </Description>
              
              <ButtonGroup variants={staggerContainer}>
                <Button as={Link} to="/projects" className="primary" variants={scaleUp}>View Projects</Button>
                <Button as={Link} to="/about" className="secondary" variants={scaleUp}>About Me</Button>
              </ButtonGroup>
              
              <StatsContainer variants={staggerContainer}>
                <StatItem variants={slideInFromBottom}>
                  <StatNumber>5+</StatNumber>
                  <StatLabel>Projects</StatLabel>
                </StatItem>
                <StatItem variants={slideInFromBottom}>
                  <StatNumber>3+</StatNumber>
                  <StatLabel>Years Coding</StatLabel>
                </StatItem>
                <StatItem variants={slideInFromBottom}>
                  <StatNumber>100%</StatNumber>
                  <StatLabel>A Learner</StatLabel>
                </StatItem>
              </StatsContainer>
              
              <SkillsContainer variants={slideInFromLeft}>
                <SkillsTitle>Key Skills:</SkillsTitle>
                <SkillsList variants={staggerContainer}>
                  <Badge variants={scaleUp}><FaReact /> React</Badge>
                  <Badge variants={scaleUp}><FaPython /> Python</Badge>
                  <Badge variants={scaleUp}><SiJavascript /> JavaScript</Badge>
                  <Badge variants={scaleUp}><FaNodeJs /> Node.js</Badge>
                  <Badge variants={scaleUp}><SiScikitlearn /> Machine Learning</Badge>
                  <Badge variants={scaleUp}><SiSpring /> Spring Boot</Badge>
                  <Badge variants={scaleUp}><FaDatabase /> Databases</Badge>
                  <Badge variants={scaleUp}><SiFigma /> Figma</Badge>
                </SkillsList>
              </SkillsContainer>
            </TextContent>
            
            <CarouselGrid>
              {projectImages.map((image, index) => {
                const row = Math.floor(index / 2);
                const direction = row % 2 === 0 ? 'right' : 'left';

                return (
                  <motion.div
                    key={index}
                    {...(isDesktop && {
                      variants: rowVariants(direction),
                      animate: "animate"
                    })}
                  >
                    <ProjectThumbnail image={image} />
                  </motion.div>
                );
              })}
            </CarouselGrid>
          </HeroContent>
          
          <ContactTeaser variants={slideInFromBottom}>
            <h3>Let's work together!💻</h3>
            <p>I'm excited to collaborate on new projects or works. Currently available for internship!</p>
            <Button small as={Link} to="/contact" className="primary">Contact Me</Button>
          </ContactTeaser>
        </div>
      </HeroSection>
    </PageContainer>
  );
};

export default Home;