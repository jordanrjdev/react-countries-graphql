import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Select } from '../../components';

describe('<Select /> Component', () => {
  let allClass = 'max-h-80 max-width-300 border-2 border rounded-lg overflow-y-scroll p-0.5 absolute z-10 bg-white w-full';
  let continentList: string[] = [];

  let onFocused = jest.fn(() => {
    if (continentList.length < 1) {
      continentList.push('Africa', 'Asia');
    }
  });

  let onBlurred = jest.fn();
  let selectItem = jest.fn((arr: string[]) => (selectedItems = arr));
  let onLoadin = <p>Loading...</p>;
  let list = ['opcion1', 'opcion2'];
  let selectedItems: string[] = [];

  beforeEach(() => {
    render(
      <Select
        list={list}
        loading={false}
        onFocus={onFocused}
        onLoading={onLoadin}
        selectItems={selectItem}
        selectedItems={selectedItems}
        onblur={onBlurred}
      />
    );
  });

  it('Render select component', () => {
    let select = screen.getByRole('select');
    expect(select).toBeInTheDocument();
    expect(select).toHaveAttribute('aria-expanded', 'false');
  });

  it('Focus on the component only fills the list the first time', () => {
    let selectContainer = screen.getByRole('select-container');
    fireEvent.focus(selectContainer);
    expect(onFocused).toHaveBeenCalledTimes(1);
    fireEvent.focus(selectContainer);
    expect(continentList).toHaveLength(2);
  });

  it('Show list of options', () => {
    let listContainer = screen.getByRole('listbox');
    let select = screen.getByRole('select');
    let toggleButton = screen.getByRole('button');
    expect(listContainer).toBeInTheDocument();
    expect(listContainer).toHaveAttribute('class', `${allClass} hidden`);
    fireEvent.click(toggleButton);
    expect(select).toHaveAttribute('aria-expanded', 'true');
    expect(listContainer).toHaveAttribute('class', allClass);
  });

  it('Select an option', () => {
    let toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    let options = screen.getAllByRole('option');
    fireEvent.click(options[0]);
    expect(selectedItems).toEqual(['opcion1']);
  });

  it('Deselect an option', () => {
    let toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    let options = screen.getAllByRole('option');
    fireEvent.click(options[0]);
    fireEvent.click(options[0]);
    expect(selectedItems).toEqual([]);
  });
});
