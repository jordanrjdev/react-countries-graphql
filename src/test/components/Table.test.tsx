import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Table } from '../../components';

describe('<Table.Table /> Component', () => {
  let renderHeaders: JSX.Element[] = [];
  let renderRows: JSX.Element[] = [];
  let onLoading: JSX.Element = <>Loading</>;
  let onEmpty: JSX.Element = <>Empty</>;

  it('Render Table component', () => {
    render(
      <Table.Table
        loading={false}
        onLoading={onLoading}
        renderHeaders={renderHeaders}
        renderRows={renderRows}
        empty={false}
        onEmpty={onEmpty}
      />
    );
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('Show loading when loading is true', () => {
    render(
      <Table.Table
        loading={true}
        onLoading={onLoading}
        renderHeaders={renderHeaders}
        renderRows={renderRows}
        empty={false}
        onEmpty={onEmpty}
      />
    );
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('Show empty when empty is true', () => {
    render(
      <Table.Table
        loading={false}
        onLoading={onLoading}
        renderHeaders={renderHeaders}
        renderRows={renderRows}
        empty={true}
        onEmpty={onEmpty}
      />
    );
    expect(screen.getByText('Empty')).toBeInTheDocument();
  });
});

describe('<Table.Row /> Component', () => {
  let children: JSX.Element[] = [<Table.Cell key="code">Code</Table.Cell>];

  it('Render Table.Row component', () => {
    render(
      <table>
        <tbody>
          <Table.Row>{children}</Table.Row>
        </tbody>
      </table>
    );
    expect(screen.getByRole('table-row')).toBeInTheDocument();
    expect(screen.getByText('Code')).toBeInTheDocument();
  });
});

describe('<Table.Header /> Component', () => {
  it('Render Table.Header component', () => {
    render(
      <table>
        <thead>
          <tr>
            <Table.Header>Header</Table.Header>
          </tr>
        </thead>
      </table>
    );
    expect(screen.getByRole('table-header')).toBeInTheDocument();
    expect(screen.getByText('Header')).toBeInTheDocument();
  });
});
