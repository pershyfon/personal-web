import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 50px;
  background-color: ${({ variant }) => 
    variant === 'primary' ? theme.colors.primaryLight : '#f0f0f0'};
  color: ${({ variant }) => 
    variant === 'primary' ? theme.colors.primaryDark : theme.colors.text};
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;