import { render, cleanup, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  afterAll(() => {
    cleanup();
  });

  it('should match snapshot', () => {
    const footerText = 'Tabela Fipe';
    render(<Footer />);

    expect(screen.getByText(footerText)).toMatchSnapshot();
  });
});
