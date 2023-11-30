'use client';
import {
  Box,
  Button,
  CircularProgress,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Typography,
  styled
} from '@mui/material';
import { useSWRConfig } from 'swr';
import { colors } from '../styles/colors';
import Select from './components/ui/select';
import useFipeTable from './hooks/useFipeTable';
import { FormEvent, useMemo, useState } from 'react';
import { fipeSchema } from './schemas';

const SBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export default function Home() {
  const [form, setForm] = useState({
    brandId: '',
    modelId: '',
    year: ''
  });
  const { data, isLoading, error } = useFipeTable(form);
  const { mutate } = useSWRConfig();
  const isFormValid = useMemo(() => {
    try {
      fipeSchema.parse(form);
      return true;
    } catch (err) {
      return false;
    }
  }, [form]);

  if (error) {
    return <Typography variant='h1'>Ocorreu um erro</Typography>;
  }

  if (!data || isLoading) {
    return (
      <Container typeof='primary'>
        <CircularProgress />
      </Container>
    );
  }
  console.log(data);

  const handleClick = (e: FormEvent) => {
    e.preventDefault();
  };

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
        <FormControl variant='outlined'>
          <InputLabel id='brandId'>Marca</InputLabel>
          <Select
            name='brandId'
            labelId='brandId'
            placeholder='Marca'
            label='Marca'
            autoComplete='nome'
            value={form.brandId}
            onChange={(e) => {
              setForm({ ...form, brandId: e.target.value as string });

              const details = `${form.brandId ?? ''}@${form.modelId ?? ''}@${
                form.year ?? ''
              }`;
              console.log(details);

              mutate(`/api/fipe/${details}`);
            }}
            required
          >
            {data?.brands?.map((brand) => (
              <MenuItem key={brand.codigo} value={brand.codigo}>
                {brand.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant='outlined'>
          <InputLabel id='modelId'>Modelo</InputLabel>
          <Select
            name='modelId'
            labelId='modelId'
            placeholder='Modelo'
            label='Modelo'
            autoComplete='nome'
            value={form.modelId}
            onChange={(e) =>
              setForm({ ...form, modelId: e.target.value as string })
            }
            required
          >
            {data?.brandModels?.modelos.map((brand) => (
              <MenuItem key={brand.codigo} value={brand.nome}>
                {brand.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant='contained'
          onClick={handleClick}
          disabled={!isFormValid}
        >
          Consultar preço
        </Button>
      </SBox>
    </Container>
  );
}
