import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Typography } from '@mui/material';

export const ShakeKeyframe = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(2px, 2px) rotate(2deg); }
  50% { transform: translate(0, 0) rotate(0eg); }
  75% { transform: translate(-2px, 2px) rotate(-2deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`;

export const ShakeWrapper = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Shake = styled(Typography)`
  font-size: inherit;
  font-family: inherit;
  animation: ${ShakeKeyframe} 1s infinite;

  &:nth-of-type(odd) {
    animation-direction: reverse;
  }
`;
