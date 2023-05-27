import styled from '@emotion/styled';
import { Image, ShakeEffect } from '../../../shared';

export const BackgroundImage = styled(Image)`
  object-fit: cover;
  object-position: top;
  filter: brightness(0.6);
  z-index: -1;
`;

export const Headline = styled(ShakeEffect)`
  font-family: 'TiquiTaca', sans-serif;
`;
