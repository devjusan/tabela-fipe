'use client';
import { Typography } from '@mui/material';
import { Container } from './index.styled';
import { ModelCurrentValue } from '@/src/app/types';
import { colors } from '@/src/styles/colors';

function CarDetails(currentCar: ModelCurrentValue) {
  if (!currentCar?.Modelo || !currentCar?.Valor || !currentCar?.AnoModelo) {
    return (
      <Container>
        <Typography variant='caption'>
          Selecione todos os campos para prosseguir
        </Typography>
      </Container>
    );
  }

  return (
    <Container typeof='secondary'>
      <Typography variant='h4'>
        Tabela Fipe: {currentCar.Modelo} {currentCar.AnoModelo}{' '}
      </Typography>
      <Typography
        variant='h4'
        style={{
          alignSelf: 'center',

          color: colors.white,
          background: colors.line_green,
          maxWidth: 'fit-content',
          padding: '0.5rem 2rem',
          borderRadius: '40px'
        }}
      >
        {currentCar.Valor}
      </Typography>
      <Typography
        variant='caption'
        style={{
          color: colors.disabled
        }}
      >
        Este é o preço de compra do veículo
      </Typography>
    </Container>
  );
}

export default CarDetails;
