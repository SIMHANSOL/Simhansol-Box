import styled from '@emotion/styled';
import { Box, Button, keyframes } from '@mui/material';
import theme from '../../../styles/theme';

export const gaugeKeyframe = keyframes`
  0% {
    width: 100%;
  }
  100% {
    width: 0%;
  }
`;

export const GameBox = styled(Box)`
  max-width: 900px;
  margin: 5rem 0;
`;

export const PreviewColorBox = styled(Box)`
  text-align: center;
  margin-bottom: 1rem;
`;

export const PreviewColor = styled(Box)`
  width: 100px;
  height: 100px;
  margin: auto;
  border: 1px solid ${theme.palette.grey[500]};
`;

export const ColorBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-height: 500px;
  overflow: auto;
`;

export const ListColor = styled(Button)<{ bgColor: string; highlight: string }>`
  width: 100px;
  height: 100px;
  border: 1px solid ${theme.palette.grey[500]};
  background-color: ${({ bgColor }) => bgColor};
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  ${({ highlight }) =>
    highlight === 'true'
      ? `
    transform: scale(.75);
    box-shadow: 0 0 10px 2px ${theme.palette.grey[900]};
  `
      : null}
`;

export const ImageWrapper = styled(Box)`
  position: relative;
  max-width: 31.25rem;
  height: 18.75rem;
  margin: auto;
`;

export const TimeoutGauge = styled(Box)<{ stop: string; duration: number }>`
  position: relative;
  width: 100%;
  height: 1rem;
  background-color: ${theme.palette.grey[500]};
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.primary.main};
    animation: ${gaugeKeyframe} ${({ duration }) => duration}s linear;

    ${({ stop }) =>
      stop === 'true'
        ? `
      animation-play-state: paused;
    `
        : null}
  }
`;
