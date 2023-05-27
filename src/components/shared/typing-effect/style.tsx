import styled from '@emotion/styled';
import { Box, Typography, keyframes } from '@mui/material';
import theme from '../../../styles/theme';

export const blink = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const TypingWrapper = styled(Typography)`
  display: inline-block;
`;

export const Cursor = styled(Box)`
  display: inline-block;
  animation: ${blink} 1s infinite;
  color: ${theme.palette.grey[900]};
  animation-timing-function: steps(2, jump-none);
`;
