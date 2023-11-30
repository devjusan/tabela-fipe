import { render, cleanup, screen } from '@testing-library/react';
import CarDetails from '.';

describe('CarDetails', () => {
  afterAll(() => {
    cleanup();
  });

  it('should show model, value and year of car', () => {
    render(<CarDetails Modelo='Ferrari' Valor='1000000' AnoModelo={1000} />);

    expect(screen.findByText('Ferrari')).toBeTruthy();
    expect(screen.findByText('1000000')).toBeTruthy();
    expect(screen.findByText('1000')).toBeTruthy();
  });

  it('should show a default message if props are not passed', () => {
    render(
      <CarDetails AnoModelo={undefined} Modelo={undefined} Valor={undefined} />
    );

    expect(
      screen.findByText('Selecione todos os campos para prosseguir')
    ).toBeTruthy();
  });
});
