import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';
import { Button } from '../components/common/Button';
import { Badge } from '../components/common/Badge';
import { Card } from '../components/common/Card';
import { experiences } from '../assets/data/experiences';
import { achievements } from '../assets/data/achievements';
import { MotionDiv, fadeIn, slideInFromLeft, scaleUp } from '../styles/animations';
import profileImage from '../assets/images/Profile_Sabrina.jpg';
import { FaReact, FaPython, FaNodeJs, FaDatabase, FaGitAlt, FaEnvelope, FaMapMarkerAlt, FaDownload, FaCircle } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiSpring, SiDjango, SiScikitlearn, SiNextdotjs, SiTailwindcss, SiFigma, SiJira, SiJupyter, SiGithubactions, SiTestinglibrary} from 'react-icons/si';

const AboutContainer = styled.div`
  padding-top: 70px;
`;

const AboutHeader = styled.section`
  padding: 4rem 1rem;
  background: linear-gradient(135deg, ${theme.colors.background} 0%, ${theme.colors.secondary} 100%);
  margin-bottom: 2rem;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const ProfileImage = styled(MotionDiv)`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: ${theme.colors.primaryLight};
  overflow: hidden;
  border: 5px solid ${theme.colors.white};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primaryDark};
  margin-bottom: 0.5rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${theme.colors.text};
  margin-bottom: 1.5rem;
  font-weight: 400;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.textLight};
`;

const Bio = styled.p`
  margin-bottom: 2rem;
  line-height: 1.8;
`;

const Section = styled.section`
  padding: 1rem 0;
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.primaryDark};
  margin-bottom: 1rem;
  text-align: center;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
`;

const ExperienceCard = styled(Card)`
  margin-bottom: 0.75rem;

  .experience-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    align-items: flex-start;

    @media (max-width: ${theme.breakpoints.sm}) {
      flex-direction: column;
      gap: 0.2rem;
    }
  }

  .experience-title {
    margin-top: 0.5rem;
    margin-botton: 0.2rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: ${theme.colors.primaryDark};
    line-height: 1.2;
  }

  .experience-company {
    color: ${theme.colors.text};
    font-size: 0.9rem;
  }

  .experience-duration {
    color: ${theme.colors.textLight};
    font-size: 0.85rem;
    white-space: nowrap;
    margin-left: 0.5rem;
    margin-right:0.5rem;
    margin-top: 0.5rem;
  }

  .experience-location {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    color: ${theme.colors.textLight};
    margin-bottom: 0.25rem;
    font-size: 0.85rem;
  }

  .experience-description {
    margin-left: 1.5rem;
    font-size: 0.9rem;

    li {
      margin-bottom: 0.25rem;
      position: relative;
      padding-left: 0.5rem;
    }
  }

  .experience-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-top: 0.5rem;
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  padding-left: 20px;
  margin: 1rem 0;
`;

const TimelineLine = styled.div`
  position: absolute;
  left: 5px;
  top: 10px;
  bottom: 10px;
  width: 1.5px;
  background: ${theme.colors.primaryLight};
`;

const TimelineItem = styled.div`
  position: relative;
  padding-bottom: 1rem;
  padding-left: 1.5rem;

  &:last-child {
    padding-bottom: 0;
  }
`;

const TimelineDot = styled(FaCircle)`
  position: absolute;
  left: -4px;
  top: 5px;
  color: ${theme.colors.primary};
  font-size: 0.8rem;
  background: ${theme.colors.background};
  border-radius: 50%;
`;

const ExperienceCardWithTimeline = styled(ExperienceCard)`
  margin-left: 0.5rem;
  padding: 0.75rem;
`;

const AchievementCard = styled(Card)`
  margin-bottom: 0.75rem;
  padding: 0.75rem;

  .achievement-title {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }

  .achievement-meta {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    margin-bottom: 0.25rem;
    margin-right: 0.5rem;
  }

  .achievement-description {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutHeader>
        <div className="container">
          <HeaderContent>
            <ProfileImage variants={slideInFromLeft} initial="hidden" animate="visible">
              <img 
                src={profileImage} 
                alt="Profile" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '50%'
                }} 
              />
            </ProfileImage>
            <ProfileInfo>
              <Name variants={fadeIn}>Sabrina Aviana Dewi</Name>
              <Title variants={fadeIn}>Computer Science Student</Title>
              <ContactInfo>
                <ContactItem variants={fadeIn}>
                  <FaMapMarkerAlt /> Location: Bogor, Indonesia
                </ContactItem>
                <ContactItem variants={fadeIn}>
                  <FaEnvelope /> Email: avianasabrina12@gmail.com
                </ContactItem>
              </ContactInfo>
              <Bio variants={fadeIn}>
                I'm a Computer Science undergraduate, passionate about Data Science, UX Research, and Software Development. Experienced in leading teams and collaborating with external stakeholders. Motivated, reliable, and eager to grow in dynamic environments.
              </Bio>
              <Button className="primary" variants={fadeIn} as={Link} to="/contact">
                Contact Me
              </Button>
            </ProfileInfo>
          </HeaderContent>
        </div>
      </AboutHeader>

      <Section>
        <div className="container">
          <SectionTitle>Skills & Expertise</SectionTitle>
          <SkillsContainer>
            <Badge variants={scaleUp}><FaReact /> React</Badge>
            <Badge variants={scaleUp}><SiNextdotjs /> Next.js</Badge>
            <Badge variants={scaleUp}><SiTailwindcss /> Tailwind CSS</Badge>
            <Badge variants={scaleUp}><SiJavascript /> JavaScript</Badge>
            <Badge variants={scaleUp}><SiTypescript /> TypeScript</Badge>
            <Badge variants={scaleUp}><FaPython /> Python</Badge>
            <Badge variants={scaleUp}><SiSpring /> Spring Boot</Badge>
            <Badge variants={scaleUp}><FaNodeJs /> Node.js</Badge>
            <Badge variants={scaleUp}><FaDatabase /> SQL</Badge>
            <Badge variants={scaleUp}><SiDjango /> Django</Badge>
            <Badge variants={scaleUp}><SiScikitlearn /> Machine Learning</Badge>
            <Badge variants={scaleUp}><SiJupyter /> Jupyter</Badge>
            <Badge variants={scaleUp}><SiFigma /> Figma</Badge>
            <Badge variants={scaleUp}><FaGitAlt /> Git</Badge>
            <Badge variants={scaleUp}><SiJira /> Jira</Badge>
            <Badge variants={scaleUp}><SiGithubactions /> CI/CD</Badge>
            <Badge variants={scaleUp}><SiTestinglibrary /> TDD</Badge>
            <Badge variants={scaleUp}>📊 Scrum</Badge>
            <Badge variants={scaleUp}>🤝 Teamwork</Badge>
            <Badge variants={scaleUp}>🎯 Leadership</Badge>
            <Badge variants={scaleUp}>💡 Problem Solving</Badge>
            <Badge variants={scaleUp}>🗣️ Communication</Badge>
            <Badge variants={scaleUp}>📈 Growth Mindset</Badge>
            <Badge variants={scaleUp}>🧠 Critical Thinking</Badge>
            <Badge variants={scaleUp}>📋 Project Management</Badge>
            <Badge variants={scaleUp}>🕒 Time Management</Badge>
            <Badge variants={scaleUp}>🔍 Attention to Detail</Badge>
            <Badge variants={scaleUp}>🌱 Adaptability</Badge>
            <Badge variants={scaleUp}>📣 Marketing</Badge>
          </SkillsContainer>
        </div>
      </Section>

      <Section style={{ backgroundColor: theme.colors.background }}>
        <div className="container">
          <SectionTitle>Experience</SectionTitle>
          <TimelineContainer>
            <TimelineLine />
            
            {experiences
              .sort((a, b) => new Date(b.startDate) - new Date(a.startDate)) // Urutkan dari terbaru
              .map((exp) => (
                <TimelineItem key={exp.id}>
                  <TimelineDot />
                  <ExperienceCardWithTimeline variants={fadeIn} initial="hidden" animate="visible">
                    <div className="experience-header">
                      <div>
                        <h3 className="experience-title">{exp.title}</h3>
                        <div className="experience-company">{exp.company}</div>
                      </div>
                      <div className="experience-duration">{exp.duration}</div>
                    </div>
                    <div className="experience-location">
                      <FaMapMarkerAlt /> {exp.location}
                    </div>
                    <ul className="experience-description">
                      {exp.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                    <div className="experience-tags">
                      {exp.tags.map((tag, index) => (
                        <Badge key={index} className="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </ExperienceCardWithTimeline>
                </TimelineItem>
              ))}
          </TimelineContainer>
        </div>
      </Section>

      <Section>
        <div className="container">
          <SectionTitle>Achievements</SectionTitle>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} variants={fadeIn} initial="hidden" animate="visible">
              <h3 className="achievement-title">{achievement.title}</h3>
              <div className="achievement-meta">
                <span>{achievement.organizer}</span>
                <span>{achievement.date}</span>
              </div>
              <p className="achievement-description">{achievement.description}</p>
            </AchievementCard>
          ))}
        </div>
      </Section>

      <Section style={{ textAlign: 'center' }}>
        <div className="container">
          <Button as="a" href="https://drive.google.com/file/d/1uIZ9gq5euFkeBomE4urXDKp8Bo1TQ-Cb/view?usp=sharing" className="primary" variants={fadeIn} initial="hidden" animate="visible" target="_blank" rel="noopener noreferrer">
            <FaDownload /> Download CV
          </Button>
        </div>
      </Section>
    </AboutContainer>
  );
};

export default About;