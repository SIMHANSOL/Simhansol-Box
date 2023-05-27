import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const ImageWrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 8rem;
  overflow: hidden;

  img {
    object-fit: contain;
  }
`;
