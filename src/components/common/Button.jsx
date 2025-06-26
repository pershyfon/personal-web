import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: ${theme.fonts.primary};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &.primary {
    background-color: ${theme.colors.primary};
    color: white;

    &:hover {
      background-color: ${theme.colors.primaryDark};
      transform: translateY(-2px);
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.primary};

    &:hover {
      background-color: ${theme.colors.primary};
      color: white;
      transform: translateY(-2px);
    }
  }
`;