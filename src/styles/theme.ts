import { Roboto } from 'next/font/google';
import { ThemeOptions } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { colors } from './colors';
import { PaletteMode } from '@mui/material';

declare module '@mui/material/styles' {
  interface Components {}
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap'
});

export const getDesignTokens = (mode: PaletteMode) =>
  ({
    palette: {
      mode,
      primary: {
        main: colors.primary,
        light: colors.primary,
        dark: colors.primary_hover
      },
      secondary: {
        main: colors.secondary,
        light: colors.secondary,
        dark: colors.secondary_hover
      },
      divider: colors.divider,
      error: {
        main: colors.danger
      },
      warning: {
        main: colors.warning
      },
      success: {
        main: colors.line_green
      },
      text: {
        primary: colors.dark,
        secondary: colors.dark,
        disabled: colors.divider
      }
    },
    typography: {
      fontFamily: roboto.style.fontFamily
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            '&.Mui-disabled': {
              backgroundColor: colors.disabled,
              color: colors.divider
            }
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontWeight: 500,
            color: mode === 'dark' ? colors.light : colors.dark
          }
        }
      },
      MuiButtonBase: {
        styleOverrides: {
          root: {
            color: colors.grey
          }
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: colors.divider + ' !important'
          }
        }
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            background: colors.white,
            width: '340px'
          },
          icon: {
            color: colors.dark
          }
        }
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',

            height: '100% !important',
            width: '100% !important',
            maxWidth: '100vw !important'
          }
        },
        variants: [
          {
            props: { typeof: 'primary' },
            style: {
              backgroundColor:
                mode === 'dark' ? colors.dark : colors.primary_bg,
              color: mode === 'dark' ? colors.light : colors.dark
            }
          },
          {
            props: { typeof: 'secondary' },
            style: {
              backgroundColor:
                mode === 'dark' ? colors.dark : colors.secondary_bg,
              color: mode === 'dark' ? colors.light : colors.dark
            }
          }
        ]
      }
    }
  }) as ThemeOptions;
