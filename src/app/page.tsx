'use client';
import {
  Box,
  Button,
  Container,
  Switch,
  Typography,
  styled
} from '@mui/material';
import { useColorMode } from './contexts/color-mode';
import { colors } from '../styles/colors';
import Select from './components/ui/select';

const SBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export default function Home() {
  const { toggleColorMode } = useColorMode();

  const onClick = () => {
    toggleColorMode();
  };

  return (
    <Container
      typeof='primary'
      style={{
        position: 'relative'
      }}
    >
      <Box
        style={{
          position: 'absolute',
          top: '1rem',
          right: '4rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}
      >
        <Switch onChange={toggleColorMode} />
        <Typography variant='caption'>Dark mode</Typography>
      </Box>
      <SBox>
        <Typography variant='h1'>Tabela Fipe</Typography>
        <Typography variant='h4'>
          Consulte o valor de um veículo de forma gratuita
        </Typography>
      </SBox>
      <SBox
        sx={{
          width: 'max-content',
          marginTop: '2rem',
          gap: '1.5rem',
          background: colors.white,
          borderRadius: '5px',
          padding: '2rem'
        }}
      >
        <Select placeholder='Marca' />
        <Select placeholder='Modelo' />

        <Button variant='contained'>Consultar preço</Button>
      </SBox>
    </Container>
  );
}
