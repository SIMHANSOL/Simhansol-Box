import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { Link as NextLink } from '../../shared';

export const Link = styled(NextLink)`
  color: ${theme.palette.grey[400]};
  text-decoration: none;
  transition: 0.3s;

  &:hover,
  &:focus,
  &:active,
  &.active {
    color: ${theme.palette.grey[100]};
  }
`;
