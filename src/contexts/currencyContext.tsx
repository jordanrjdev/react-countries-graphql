import { CountryFragment } from '@/services/graphql';
import * as React from 'react';

export type CurrencyContextI = {
  currencies: string[];
  setCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
};

const defaultState = {
  currencies: [],
  setCurrencies: () => {}
};

export const CurrencyContext = React.createContext<CurrencyContextI>(defaultState);

const CurrencyProvider: React.FC = ({ children }) => {
  const [currencies, setCurrencies] = React.useState<string[]>([]);

  return <CurrencyContext.Provider value={{ currencies, setCurrencies }}>{children}</CurrencyContext.Provider>;
};

export default CurrencyProvider;
