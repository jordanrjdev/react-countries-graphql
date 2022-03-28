import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Loading } from '../../components';

describe('<Loading /> Component', () => {
  it('Render loading component', () => {
    render(<Loading />);
    const loading = screen.getByRole('status');
    expect(loading).toBeInTheDocument();
  });
});

describe('<Loading /> snapshot', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment()).toMatchSnapshot();
  });
});
