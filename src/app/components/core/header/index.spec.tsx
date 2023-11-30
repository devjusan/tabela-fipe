import { render, cleanup, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  afterAll(() => {
    cleanup();
  });

  it('should match snapshot', () => {
    const headerText = 'Dark mode';
    render(<Header />);

    expect(screen.getByText(headerText)).toMatchSnapshot();
  });
});
