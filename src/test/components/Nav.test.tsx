import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Nav } from '../../components';

describe('<Nav /> Component', () => {
  it('Render nav component', () => {
    render(<Nav />);
    const anchors = screen.getAllByRole('links');
    expect(anchors.length).toBe(2);
    expect(anchors[0]).toHaveTextContent('Portfolio');
    expect(anchors[0]).toHaveAttribute('href', 'https://jordanjaramillo.co');
    expect(anchors[1]).toHaveTextContent('Github');
    expect(anchors[1]).toHaveAttribute('href', 'https://github.com/jordanrjdev');
  });
});

describe('<Nav /> Snapshot', () => {
  it('Should match the snapshot', () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});
