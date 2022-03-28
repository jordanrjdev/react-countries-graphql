import { useEffect, useMemo, useState } from 'react';
import { Loading, Select } from '@/components';
import { useContinents, useFilters, useCountries, useCurrencies } from '@/hooks';
import { Continent } from '@/services/graphql';
import { FilterType } from '@/hooks/useFilters';
import Search from './Search';

interface FiltersProps {
  getCountriesByContinent: (continents: string[]) => void;
  getCountriesByName: (name: string) => void;
  getCountriesByCurrencies: (currencies: string[]) => void;
}

let timeOutId: any;

const Filters = () => {
  const { getCountriesByContinent, getAllCountries, applyChangeFilters } = useCountries();
  const { getAllContinents, continents, loading } = useContinents();
  const { getAllCurrencies, currencies } = useCurrencies();
  const { setFilter, search, selectContinent, selectCurrency } = useFilters();

  const renderLoading = useMemo(() => <Loading />, []);

  useEffect(() => {
    applyChangeFilters();
  }, [search]);

  const filterByContinents = () => {
    const codesContinents = continents.filter((continent) => selectContinent.includes(continent.name)).map((continent) => continent.code);
    if (codesContinents.length < 1) {
      getAllCountries();
      return;
    }
    getCountriesByContinent(codesContinents);
  };

  const filterByCurrencies = () => {
    applyChangeFilters();
  };

  const selectContinentChange = (continents: string[]) => {
    setFilter(FilterType.CONTINENT, continents);
  };

  const selectCurrencyChange = (currencies: string[]) => {
    setFilter(FilterType.CURRENCY, currencies);
  };

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (timeOutId) {
      clearTimeout(timeOutId);
    }
    timeOutId = setTimeout(() => {
      setFilter(FilterType.SEARCH, event.target.value);
    }, 500);
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between">
      <Search placeholder="Search" onChange={onHandleChange} value={search} />

      <div className="flex justfy-start space-x-4">
        <Select
          onFocus={() => {
            if (currencies.length < 1) {
              getAllCurrencies();
            }
          }}
          loading={false}
          onLoading={renderLoading}
          onblur={filterByCurrencies}
          selectItems={selectCurrencyChange}
          selectedItems={selectCurrency}
          list={currencies.map((currency: string) => currency)}
          placeholder="Currencies"
        />

        <Select
          onFocus={() => {
            if (continents.length < 1) {
              getAllContinents();
            }
          }}
          loading={loading}
          onLoading={renderLoading}
          onblur={filterByContinents}
          selectItems={selectContinentChange}
          selectedItems={selectContinent}
          list={continents.map((continent: Continent) => continent.name)}
          placeholder="Continents"
        />
      </div>
    </div>
  );
};

export default Filters;
