interface TableProps {
  renderHeaders: JSX.Element[];
  renderRows: JSX.Element[];
  loading: boolean;
  onLoading: JSX.Element;
  empty: boolean;
  onEmpty: JSX.Element;
}

export const Table = ({ renderHeaders, renderRows, loading, onLoading, empty, onEmpty }: TableProps) => {
  return (
    <>
      <div className="overflow-auto h-[calc(100vh_-_180px)]">
        <table className="table-auto w-full" role={'table'}>
          <thead className="text-xs font-semibold uppercase text-indigo-400 bg-indigo-100 sticky top-0">
            <tr>{renderHeaders}</tr>
          </thead>
          {!loading && <tbody className="text-sm divide-y divide-indigo-100">{renderRows}</tbody>}
        </table>
        {empty && !loading && <div className="w-full h-full flex justify-center my-10 font-black">{onEmpty}</div>}
        {loading && <div className="w-full h-full flex items-center justify-center">{onLoading}</div>}
      </div>
    </>
  );
};

export const Row = ({ children }: { children: JSX.Element[] }) => {
  return <tr role={'table-row'}>{children}</tr>;
};

export const Header = ({ children }: { children: string }) => {
  return (
    <th role={'table-header'} className="p-2 whitespace-nowrap text-left font-semibold">
      {children}
    </th>
  );
};

export const Cell = ({ children }: { children: string | JSX.Element }) => {
  return <td className="p-2 whitespace-nowrap">{children}</td>;
};

export default {
  Table,
  Row,
  Header,
  Cell
};
