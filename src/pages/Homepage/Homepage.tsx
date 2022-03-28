import { Loading } from '@/components';
import { Table } from '@/components';
import { useEffect, useMemo, useState } from 'react';
import { useCountries } from '@/hooks';
import { CountryFragment } from '@/services/graphql';
import { Filters, List } from './components';
import { Link } from 'wouter';
import { LinkTo } from '@/styled-components';
import { WithLayout } from '@/hocs';

const headers: string[] = ['Code', 'Name', 'Continent', 'Currency', 'Actions'];

export const Homepage = () => {
  return (
    <>
      <Filters />
      <List />
    </>
  );
};

export default WithLayout(Homepage);
