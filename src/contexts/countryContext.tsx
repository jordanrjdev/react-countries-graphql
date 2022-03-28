import { Continent, CountryFragment } from '@/services/graphql';
import * as React from 'react';

export type CountryContextI = {
  countries: CountryFragment[];
  setCountries: React.Dispatch<React.SetStateAction<CountryFragment[]>>;
  countriesFiltered: CountryFragment[];
  setCountriesFiltered: React.Dispatch<React.SetStateAction<CountryFragment[]>>;
  currencies: string[];
  setCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
  continents: Continent[];
  setContinents: React.Dispatch<React.SetStateAction<Continent[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectContinent: string[];
  setSelectContinent: React.Dispatch<React.SetStateAction<string[]>>;
  selectCurrency: string[];
  setSelectCurrency: React.Dispatch<React.SetStateAction<string[]>>;
};

const defaultState = {
  countries: [],
  setCountries: () => {},
  countriesFiltered: [],
  setCountriesFiltered: () => {},
  continents: [],
  setContinents: () => {},
  currencies: [],
  setCurrencies: () => {},
  search: '',
  setSearch: () => {},
  selectContinent: [],
  setSelectContinent: () => {},
  selectCurrency: [],
  setSelectCurrency: () => {}
};

export const CountryContext = React.createContext<CountryContextI>(defaultState);

const CountryProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = React.useState<CountryFragment[]>([]);
  const [countriesFiltered, setCountriesFiltered] = React.useState<CountryFragment[]>([]);
  const [currencies, setCurrencies] = React.useState<string[]>([]);
  const [continents, setContinents] = React.useState<Continent[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const [selectContinent, setSelectContinent] = React.useState<string[]>([]);
  const [selectCurrency, setSelectCurrency] = React.useState<string[]>([]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        countriesFiltered,
        setCountries,
        setCountriesFiltered,
        currencies,
        continents,
        setContinents,
        setCurrencies,
        search,
        setSearch,
        selectContinent,
        setSelectContinent,
        selectCurrency,
        setSelectCurrency
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
