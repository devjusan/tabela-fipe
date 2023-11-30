import { render, cleanup, screen } from '@testing-library/react';
import Header from '.';

describe('Footer', () => {
  afterAll(() => {
    cleanup();
  });

  it('should match snapshot', () => {
    const footerText = 'Tabela Fipe';
    render(<Header />);

    expect(screen.getByText(footerText)).toMatchSnapshot();
  });
});
