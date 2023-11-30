'use client';
import { Typography } from '@mui/material';
import { Container } from './index.styled';

function CarDetails({
  model,
  value,
  year
}: {
  model: string;
  value: number;
  year: number;
}) {
  return (
    <Container typeof='secondary'>
      <Typography variant='h2'>
        Tabela Fipe: {model} {year}{' '}
      </Typography>
      <Typography variant='h2'>{value}</Typography>
      <Typography variant='caption'>
        Este é o preço de compra do veículo
      </Typography>
    </Container>
  );
}

export default CarDetails;
