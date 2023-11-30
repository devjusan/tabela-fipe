'use client';
import { Typography } from '@mui/material';
import { Container } from './index.styled';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container>
      <Typography>Tabela Fipe </Typography>
      <Typography variant='caption'> @{year} </Typography>
    </Container>
  );
}

export default Footer;
