import styled from '@emotion/styled';
import { Box } from '@mui/material';
import image from 'next/image';
import theme from '../../../../styles/theme';

export const ProfileWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem;
  margin-bottom: 4rem;
  gap: 2rem;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    justify-content: flex-start;
    margin-bottom: 2.5rem;
  }
`;

export const ProfileAvatar = styled(Box)`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 9999px;
  overflow: hidden;
`;

export const Avatar = styled(image)`
  object-position: center;
  object-fit: cover;
`;
