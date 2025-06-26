import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { MotionDiv } from '../../styles/animations';

export const Card = styled(MotionDiv)`
  background: ${theme.colors.white};
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  padding: 1.5rem;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  .card-header {
    padding-bottom: 1rem;
    border-bottom: 1px solid ${theme.colors.secondary};
    margin-bottom: 1rem;
  }

  .card-footer {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`;