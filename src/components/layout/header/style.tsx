import styled from '@emotion/styled';
import { AppBar as MuiAppBar, Typography } from '@mui/material';
import { Link as NextLink } from '../../shared';

export const AppBar = styled(MuiAppBar)`
  transition: 0.3s;

  &:not(.active) {
    background-color: rgba(0, 0, 0, 0.5) !important;
  }
`;

export const Link = styled(NextLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
`;

export const Headline = styled(Typography)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
