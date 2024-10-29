import styled from '@emotion/styled';
import theme from '../../../../styles/theme';

export const Dialog = styled('dialog')`
  display: block;
  width: 100%;
  height: auto;
  max-width: none;
  max-height: none;
  padding: 0;
  margin: 0;
  border: 0;
  overflow: hidden;
  background-color: transparent;
  user-select: none;
  pointer-events: none;
  z-index: ${theme.zIndex.modal};
  transition: 0.3s;

  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
    z-index: ${theme.zIndex.drawer};
  }

  &[open] {
    user-select: auto;
    pointer-events: auto;

    & > div {
      transform: translateX(0);
      z-index: ${theme.zIndex.modal + 1};
    }
  }

  & > div {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    transition: 0.3s;
    width: 16rem;
    height: 100%;
    background-color: ${theme.palette.grey[50]};
  }
`;
