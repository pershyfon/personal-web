import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';
import { Button } from '../components/common/Button';
import { Card } from '../components/common/Card';
import { Badge } from '../components/common/Badge';
import { 
  slideInFromTop, 
  staggerContainer,
  scaleUp,
  fadeIn
} from '../styles/animations';
import projectsData from '../assets/data/projects.json';

const PageContainer = styled.div`
  padding-top: 70px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ProjectsContainer = styled.section`
  padding: 80px 0;
  background-color: ${theme.colors.white};
  flex: 1;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: ${theme.spacing.xl};
  color: ${theme.colors.primaryDark};
`;

const SectionDescription = styled(motion.p)`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${theme.spacing.xl};
  color: ${theme.colors.textLight};
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: auto; /* Baris akan menyesuaikan tinggi konten */
  gap: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
  align-items: start; /* Agar card tidak stretch vertikal */
`;

const ProjectCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: auto; /* Tinggi menyesuaikan konten */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* Tambahkan min-height jika diperlukan */
  min-height: 200px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.primaryDark};
`;

const ProjectDescription = styled.p`
  margin-bottom: ${theme.spacing.md};
  flex-grow: 1;
  color: ${theme.colors.textLight};
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.md};
  gap: ${theme.spacing.sm};
`;

const ProjectImageWrapper = styled.div`
  background: ${theme.colors.white};
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
  display: block;
`;

const ProjectsPage = () => {
  return (
    <PageContainer>
      <ProjectsContainer id="projects">
        <div className="container">
          <SectionTitle variants={slideInFromTop}>My Projects</SectionTitle>
          <SectionDescription variants={fadeIn}>
            Here are some of my recent works. Each project was built with attention to detail 
            and a focus on user experience.
          </SectionDescription>
          
          <ProjectsGrid 
            variants={staggerContainer} 
            initial="hidden" 
            animate="visible"
          >
            {projectsData.map((project) => (
              <ProjectCard 
                key={project.id}
                variants={scaleUp}
              >
                {project.image && (
                <ProjectImageWrapper>
                  <ProjectImage src={project.image} alt={project.title} />
                </ProjectImageWrapper>
                )}
                <Card>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="primary">{tag}</Badge>
                    ))}
                  </ProjectTags>
                  {project.demoUrl !== "" && (
                    <Button 
                      as="a" 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      small
                      className="primary"
                    >
                      Demo 🚀
                    </Button>
                  )}
                  {project.githubUrl !== "" && (
                    <Button 
                      as="a" 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      small
                      className="secondary"
                    >
                      GitHub
                    </Button>
                  )}
                </Card>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </div>
      </ProjectsContainer>
    </PageContainer>
  );
};

export default ProjectsPage;