import { CountryContext } from '@/contexts/countryContext';
import { CountryFragment } from '@/services/graphql';
import { useContext } from 'react';

export enum FilterType {
  CONTINENT = 'continent',
  CURRENCY = 'currency',
  SEARCH = 'search'
}

const useFilters = () => {
  const { search, selectContinent, setSearch, setSelectContinent, setSelectCurrency, selectCurrency } = useContext(CountryContext);

  const setFilter = (type: FilterType, value: string | string[]) => {
    switch (type) {
      case FilterType.CONTINENT:
        setSelectContinent(value as string[]);
        break;
      case FilterType.SEARCH:
        setSearch(value as string);
        break;
      case FilterType.CURRENCY:
        setSelectCurrency(value as string[]);
        break;
    }
  };

  const applyFilters = (countries: CountryFragment[]): CountryFragment[] => {
    let countriesFiltered: CountryFragment[] = [...countries];
    if (search.length > 0) {
      countriesFiltered = countries.filter((country: CountryFragment) => country.name.toLowerCase().startsWith(search.toLowerCase()));
    }
    if (selectCurrency.length > 0) {
      countriesFiltered = countriesFiltered.filter((country: CountryFragment) => selectCurrency.includes(country.currency ?? ''));
    }
    return countriesFiltered;
  };

  return { search, selectContinent, setFilter, applyFilters, selectCurrency };
};

export default useFilters;
