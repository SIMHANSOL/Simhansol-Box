import styled from '@emotion/styled';
import { Box, Button, Input, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import theme from '../../../styles/theme';

export const CalculatorBox = styled('section')`
  display: flex;
  justify-content: center;
  align-items: top;
  gap: 0.75rem;
`;

export const CalculatorContainer = styled(Box)`
  position: relative;
  width: 20rem;
  background-color: ${theme.palette.grey[900]};
  color: ${theme.palette.grey[50]};
  padding: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const CalculatorExtension = styled(Box)<{ open: boolean }>`
  position: absolute;
  top: 0;
  left: ${({ open }) => (open ? '50%' : '100%')};
  width: 50%;
  height: 100%;
  background-color: ${theme.palette.grey[900]};
  border-left: 2px solid ${blueGrey[900]};
  padding: 0.75rem 0.5rem;
  overflow-y: auto;
  transition: 0.5s;
`;

export const CalculatorExtensionButtonWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 0.75rem;
  flex-direction: column;
  flex-wrap: wrap;
`;

export const CalculatorHistory = styled(Box)<{ open: boolean }>`
  position: absolute;
  top: ${({ open }) => (open ? '23%' : '100%')};
  left: 0;
  width: 100%;
  height: calc(100% - 23%);
  background-color: ${theme.palette.grey[900]};
  border-top: 2px solid ${blueGrey[900]};
  padding: 0.5rem 1rem;
  overflow-y: auto;
  transition: 0.5s;
`;

export const CalculatorHistoryButtonWrapper = styled(Box)`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 0.25rem;
`;

export const CalculatorHistoryCloseButton = styled(Button)`
  background-color: ${blueGrey[900]};
  margin-bottom: 1rem;
`;

export const CalculatorHistoryTypographyWrapper = styled(Button)`
  display: flex;
  flex-wrap: wrap;
  color: ${theme.palette.grey[50]};
  background-color: ${blueGrey[900]};
  border-radius: 0 0.25rem 0.25rem 0;
  border-left: 2px solid ${blueGrey[400]};
  gap: 0.75rem;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

export const CalculatorHistoryTypography = styled(Typography)`
  display: block;
  color: ${theme.palette.grey[50]};
  margin-bottom: 0.5rem;
  border-bottom: 2px solid ${blueGrey[100]};
`;

export const CalculatorPrevInput = styled(Box)`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: ${theme.palette.grey[500]};
  border-bottom: 2px solid ${blueGrey[900]};
`;

export const CalculatorInput = styled(Input)`
  color: ${theme.palette.grey[50]};
  background-color: ${theme.palette.grey[800]};
  font-size: 1.25rem;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  margin-bottom: 1rem;

  & > input {
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export const CalculatorBodyContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.25rem;
  margin-bottom: 1rem;

  & > button {
    height: 4rem;
    font-size: 1.25rem;
    background-color: ${blueGrey[900]};
  }
`;

export const CalculatorExtendedContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.25rem;
  text-transform: ;

  & > button {
    min-height: 2.5rem;
    font-size: 1rem;
    background-color: ${blueGrey[900]};
    text-transform: none;
  }
`;

export const ExtensionButton = styled(Button)`
  display: block;
  width: 100%;
  text-align: start;
  color: ${theme.palette.grey[50]};
`;

export const CalculatorExtendedContainerEmpty = styled(Box)`
  min-height: 4rem;
`;
