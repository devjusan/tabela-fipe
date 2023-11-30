import { colors } from '@/src/styles/colors';
import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  width: '100vw',

  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  gap: '1rem',

  padding: '1.5rem',
  background: theme.palette.mode === 'dark' ? colors.dark : colors.secondary_bg,
  overflow: 'hidden'
}));
