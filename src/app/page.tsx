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
import { isValid } from 'zod';
import { colors } from '../styles/colors';
import Select from './components/ui/select';
import useFipeTable from './hooks/useFipeTable';
import { FormEvent, useMemo, useState } from 'react';
import { fipeSchema } from './schemas';
import urls from '../constants/urls';
import { ModelCurrentValue } from './types';

const SBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export default function Home() {
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [modelCurrentValue, setModelCurrentValue] =
    useState<ModelCurrentValue | null>(null);
  const [form, setForm] = useState({
    brandId: '',
    modelId: '',
    year: ''
  });
  const { data, isLoading, error } = useFipeTable(form);
  const isFormValid = useMemo(() => {
    try {
      fipeSchema.parse(form);

      return false;
    } catch (error) {
      return true;
    }
  }, [form]);

  if (error) {
    return (
      <Container typeof='primary'>
        <Typography variant='h1'>Ocorreu um erro</Typography>;{' '}
      </Container>
    );
  }

  if (!data || isLoading) {
    return (
      <Container typeof='primary'>
        <CircularProgress />
      </Container>
    );
  }

  const handleClick = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoadingBtn(true);

    const carDetails = (await fetch(
      urls.GET_CAR_DETAILS(form.brandId, form.modelId, form.year),
      {
        cache: 'no-cache'
      }
    )
      .then((res) => res.json())
      .then((r) => {
        setIsLoadingBtn(false);

        return r;
      })) as ModelCurrentValue;

    console.log(carDetails);
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
              <MenuItem key={brand.codigo} value={brand.codigo}>
                {brand.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {form.modelId && (
          <FormControl variant='outlined'>
            <InputLabel id='year'>Ano</InputLabel>
            <Select
              name='year'
              labelId='year'
              placeholder='Ano'
              label='Ano'
              autoComplete='nome'
              value={form.year}
              onChange={(e) =>
                setForm({ ...form, year: e.target.value as string })
              }
              required
            >
              {data?.brandModelYears?.map((brand) => (
                <MenuItem key={brand.codigo} value={brand.codigo}>
                  {brand.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}

        <Button
          variant='contained'
          onClick={handleClick}
          disabled={isFormValid}
          style={{
            pointerEvents: isLoadingBtn ? 'none' : 'auto',
            width: '200px'
          }}
        >
          {isLoadingBtn ? 'Carrengando...' : 'Consultar preço'}
        </Button>
      </SBox>
    </Container>
  );
}
