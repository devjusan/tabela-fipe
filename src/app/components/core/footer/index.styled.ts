import { colors } from '@/src/styles/colors';
import { styled } from '@mui/material';

export const Container = styled('footer')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  letterSpacing: '1px',
  textTransform: 'uppercase',
  background:
    theme.palette.mode === 'light'
      ? colors.footer_bg_light
      : colors.footer_bg_dark,
  color: theme.palette.mode === 'light' ? colors.dark : colors.light,
  '@media (max-width: 768px)': {
    fontSize: '1rem'
  },
  '@media (max-width: 576px)': {
    fontSize: '.8rem'
  }
}));
