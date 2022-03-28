import { CountryContext } from '@/contexts/countryContext';
import { useContext } from 'react';

const useCurrencies = () => {
  const { currencies, setCurrencies } = useContext(CountryContext);
  const { countries } = useContext(CountryContext);

  const getAllCurrencies = () => {
    let allCurrencies: Set<string> = new Set();
    countries.forEach((country) => {
      if (country.currency) {
        let currencySplit = country.currency.split(',');
        currencySplit.forEach((currency) => {
          allCurrencies.add(currency);
        });
      }
    });
    setCurrencies(Array.from(allCurrencies));
  };

  return {
    getAllCurrencies,
    currencies
  };
};

export default useCurrencies;
