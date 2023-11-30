'use client';
import { Box, Button, Container, Typography, styled } from '@mui/material';
import { colors } from '../styles/colors';
import Select from './components/ui/select';
import useFipeTable from './hooks/useFipeTable';

const SBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export default function Home() {
  const { data } = useFipeTable({
    brandId: null,
    modelId: null,
    year: null
  });

  console.log(data);

  return (
    <Container typeof='primary'>
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
        {/* <Select placeholder='Marca' />
        <Select placeholder='Modelo' /> */}

        <Button variant='contained'>Consultar preço</Button>
      </SBox>
    </Container>
  );
}
