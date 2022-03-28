import { Loading } from '@/components';
import { Table } from '@/components';
import { useEffect, useMemo, useState } from 'react';
import { useCountries } from '@/hooks';
import { CountryFragment } from '@/services/graphql';
import { Link } from 'wouter';
import { LinkTo } from '@/styled-components';

const headers: string[] = ['Code', 'Name', 'Continent', 'Currency', 'Actions'];

const List = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<CountryFragment[]>([]);
  const { countries, getAllCountries } = useCountries();

  useEffect(() => {
    setLoading(true);
    getAllCountries().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setList(countries);
  }, [countries]);

  const renderLoading = useMemo(() => <Loading />, []);

  const renderEmpty = useMemo(() => <p className="text-center">No countries found</p>, []);

  const renderHeaders = useMemo(() => headers.map((header) => <Table.Header key={header}>{header}</Table.Header>), [headers]);

  const renderRows = useMemo(
    () =>
      list.map((row: CountryFragment, idRow) => (
        <Table.Row key={idRow}>
          <Table.Cell>{row.code}</Table.Cell>
          <Table.Cell>{row.name}</Table.Cell>
          <Table.Cell>{row.continent.name}</Table.Cell>
          <Table.Cell>{row.currency ?? '-'}</Table.Cell>
          <Table.Cell>
            <Link href={`/country/${row.code}`}>
              <LinkTo>View</LinkTo>
            </Link>
          </Table.Cell>
        </Table.Row>
      )),
    [list]
  );

  return (
    <Table.Table
      loading={loading}
      onLoading={renderLoading}
      renderHeaders={renderHeaders}
      renderRows={renderRows}
      empty={list.length < 1}
      onEmpty={renderEmpty}
    />
  );
};

export default List;
