import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../../pages/Homepage/components/Search';

describe('<Search /> Component', () => {
  let state = '';
  let onHandleChange = jest.fn((event: React.ChangeEvent<HTMLInputElement>) => {
    state = event.target.value;
  });

  beforeEach(() => {
    render(<Search onChange={onHandleChange} value="default" />);
  });

  it('Render search component', () => {
    const input = screen.getByRole('search');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Search');
    expect(input).toHaveAttribute('value', 'default');
  });

  it('Should match the state', () => {
    const input = screen.getByRole('search');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onHandleChange).toHaveBeenCalledTimes(1);
    expect(state).toBe('test');
  });
});
