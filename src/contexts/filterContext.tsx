import * as React from 'react';

export type FilterContextI = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectContinent: string[];
  setSelectContinent: React.Dispatch<React.SetStateAction<string[]>>;
  selectCurrency: string[];
  setSelectCurrency: React.Dispatch<React.SetStateAction<string[]>>;
};

const defaultState = {
  search: '',
  setSearch: () => {},
  selectContinent: [],
  setSelectContinent: () => {},
  selectCurrency: [],
  setSelectCurrency: () => {}
};

export const FilterContext = React.createContext<FilterContextI>(defaultState);

const FilterProvider: React.FC = ({ children }) => {
  const [search, setSearch] = React.useState<string>('');
  const [selectContinent, setSelectContinent] = React.useState<string[]>([]);
  const [selectCurrency, setSelectCurrency] = React.useState<string[]>([]);
  return (
    <FilterContext.Provider value={{ search, setSearch, selectContinent, setSelectContinent, selectCurrency, setSelectCurrency }}>
      {' '}
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
