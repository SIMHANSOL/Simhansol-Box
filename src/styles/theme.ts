/* eslint-disable no-unused-vars */

import type { PaletteColor, PaletteColorOptions } from '@mui/material';
import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import type { CSSProperties } from 'react';

interface Typography {
  h7: CSSProperties;
  h7bold: CSSProperties;
  body1bold: CSSProperties;
  body3: CSSProperties;
  body4: CSSProperties;
  body5: CSSProperties;
  subtitle1bold: CSSProperties;
}

declare module '@mui/material/styles' {
  interface Palette {
    danger: PaletteColor;
  }

  interface PaletteOptions {
    danger: PaletteColorOptions;
  }

  interface TypographyVariants extends Typography {}

  interface TypographyVariantsOptions extends Typography {}
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h7bold: true;
    body1bold: true;
    body3: true;
    body4: true;
    body5: true;
    subtitle1bold: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff',
    },
    secondary: {
      main: '#0080a8',
    },
    success: {
      main: '#00ff00',
    },
    warning: {
      main: '#ffff00',
    },
    info: {
      main: '#00ffff',
    },
    danger: {
      main: '#ff0000',
    },
  },

  typography: {
    fontFamily: 'pretendard',

    h1: {
      fontSize: '2.5rem',
    },

    h2: {
      fontSize: '2rem',
    },

    h3: {
      fontSize: '1.75rem',
    },

    h4: {
      fontSize: '1.5rem',
    },

    h5: {
      fontSize: '1.25rem',
    },

    h6: {
      fontSize: '1.125rem',
    },

    h7: {
      fontSize: '1.05rem',
    },

    h7bold: {
      fontSize: '1.05rem',
      fontVariationSettings: "'wght' 700",
    },

    subtitle1: {
      color: grey[600],
    },

    subtitle2: {
      color: grey[600],
    },

    body1: {
      fontSize: '1rem',
    },

    body1bold: {
      fontSize: '1rem',
      fontVariationSettings: "'wght' 700",
    },

    body2: {
      fontSize: '0.9375rem',
    },

    body3: {
      fontSize: '0.875rem',
    },

    body4: {
      fontSize: '0.75rem',
    },

    body5: {
      fontSize: '0.625rem',
    },

    subtitle1bold: {
      color: grey[600],
      fontVariationSettings: "'wght' 700",
    },

    allVariants: {
      fontVariationSettings: "'wght' 400",
    },
  },
});

export default theme;
