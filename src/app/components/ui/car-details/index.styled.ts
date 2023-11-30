import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '1rem',
  right: '4rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem'
}));
