import styled from '@emotion/styled';
import { Box } from '@mui/material';
import theme from '../../../../styles/theme';
import { Link } from '../../../shared';

export const ItemWrapper = styled(Link)`
  position: relative;
  display: block;
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 0.3s;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -20px;
    width: 4px;
    height: 0%;
    background-color: ${theme.palette.primary.main};
    border-radius: 0 1em 1em 0;
    transition: 0.3s;
  }

  &:hover {
    transform: scale(1.05);

    &::after {
      height: 100%;
    }
  }
`;

export const ItemImageWrapper = styled(Box)<{ empty: 'true' | null }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.625rem 0 ${theme.palette.grey[200]};
  padding: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;

  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ empty }) => (empty ? theme.palette.danger.main : theme.palette.primary.main)};
  }
`;
