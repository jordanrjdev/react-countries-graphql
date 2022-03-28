import { Continent } from '@/services/graphql';
import * as React from 'react';

export type ContinentContextI = {
  continents: Continent[];
  setContinents: React.Dispatch<React.SetStateAction<Continent[]>>;
};

const defaultState = {
  continents: [],
  setContinents: () => {}
};

export const ContinentContext = React.createContext<ContinentContextI>(defaultState);

const CountryProvider: React.FC = ({ children }) => {
  const [continents, setContinents] = React.useState<Continent[]>([]);

  return <ContinentContext.Provider value={{ continents, setContinents }}>{children}</ContinentContext.Provider>;
};

export default CountryProvider;
