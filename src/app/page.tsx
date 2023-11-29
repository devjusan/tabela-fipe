'use client';
import { Box, Button, Container, Typography } from '@mui/material';
import { useColorMode } from './contexts/color-mode';

export default function Home() {
  const { toggleColorMode } = useColorMode();

  const onClick = () => {
    toggleColorMode();
  };

  return (
    <Container typeof='primary'>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant='h1'>Tabela Fipe</Typography>
        <Typography variant='h4'>
          Consulte o valor de um veículo de forma gratuita
        </Typography>
      </Box>
    </Container>
  );
}
