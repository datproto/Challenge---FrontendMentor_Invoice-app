import React from 'react';
import {
  useTable,
  Column,
  useSortBy,
  usePagination,
} from '@pankod/refine-react-table';

export const TestList: React.FC = () => {
  const columns: Array<Column> = React.useMemo(
    () => [
      {
        id: 'id',
        Header: 'ID',
        accessor: 'id',
      },
      {
        id: 'uName',
        Header: 'Username',
        accessor: 'uName',
      },
      {
        id: 'email',
        Header: 'Email',
        accessor: 'email',
      },
      {
        id: 'phone',
        Header: 'Phone',
        accessor: 'phone',
      },
      {
        id: 'createdAt',
        Header: 'Created At',
        accessor: 'created_at',
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable({ columns }, useSortBy, usePagination);

  return (
    <div className="container pb-4 mx-auto">
      <table
        className="min-w-full border divide-y divide-gray-200 table-fixed"
        {...getTableProps()}
      >
        <thead className="bg-gray-100">
          {headerGroups.map(
            (headerGroup: {
              getHeaderGroupProps: () => JSX.IntrinsicAttributes &
                React.ClassAttributes<HTMLTableRowElement> &
                React.HTMLAttributes<HTMLTableRowElement>;
              headers: any[];
            }) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="text-left">
                {headerGroup.headers.map(
                  (column: {
                    getHeaderProps: (
                      arg0: any
                    ) => JSX.IntrinsicAttributes &
                      React.ClassAttributes<HTMLTableHeaderCellElement> &
                      React.ThHTMLAttributes<HTMLTableHeaderCellElement>;
                    getSortByToggleProps: () => any;
                    render: (
                      arg0: string
                    ) =>
                      | boolean
                      | React.ReactChild
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                    isSorted: any;
                    isSortedDesc: any;
                  }) => (
                    // Add the sorting props to control sorting. For this example
                    // we can add them into the header props
                    <th
                      className="px-6 py-2 text-gray-700"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render('Header')}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>
                    </th>
                  )
                )}
              </tr>
            )
          )}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {page.map(
            (row: {
              getRowProps: () => JSX.IntrinsicAttributes &
                React.ClassAttributes<HTMLTableRowElement> &
                React.HTMLAttributes<HTMLTableRowElement>;
              cells: any[];
            }) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className="transition hover:bg-gray-100"
                >
                  {row.cells.map(
                    (cell: {
                      getCellProps: () => JSX.IntrinsicAttributes &
                        React.ClassAttributes<HTMLTableDataCellElement> &
                        React.TdHTMLAttributes<HTMLTableDataCellElement>;
                      render: (
                        arg0: string
                      ) =>
                        | boolean
                        | React.ReactChild
                        | React.ReactFragment
                        | React.ReactPortal
                        | null
                        | undefined;
                    }) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-6 py-2 text-sm font-medium text-gray-900 whitespace-nowrap"
                        >
                          {cell.render('Cell')}
                        </td>
                      );
                    }
                  )}
                </tr>
              );
            }
          )}
        </tbody>
      </table>

      <div className="flex items-center gap-4 mt-4 pagination">
        <div className="flex gap-2 p-1.5 bg-gray-100 rounded-md">
          <button
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
            className={`px-3 py-2 text-sm font-medium rounded-md bg-white text-blue-600 ${
              canPreviousPage
                ? 'hover:bg-gray-100 cursor-pointer'
                : 'disabled:opacity-50'
            }`}
          >
            {'<<'}
          </button>
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
            className={`px-3 py-2 text-sm font-medium rounded-md bg-white text-blue-600 ${
              canPreviousPage
                ? 'hover:bg-gray-100 cursor-pointer'
                : 'disabled:opacity-50'
            }`}
          >
            {'<'}
          </button>
          <button
            onClick={() => nextPage()}
            disabled={!canNextPage}
            className={`px-3 py-2 text-sm font-medium rounded-md bg-white text-blue-600 ${
              canNextPage
                ? 'hover:bg-gray-100 cursor-pointer'
                : 'disabled:opacity-50'
            }`}
          >
            {'>'}
          </button>
          <button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
            className={`px-3 py-2 text-sm font-medium rounded-md bg-white text-blue-600 ${
              canNextPage
                ? 'hover:bg-gray-100 cursor-pointer'
                : 'disabled:opacity-50'
            }`}
          >
            {'>>'}
          </button>
        </div>
        <span className="flex items-center gap-2">
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span className="flex items-center gap-2">
          | Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            className="w-16 p-2 text-base border-2 border-gray-100 rounded-md focus:outline-blue-200 bg-gray-50"
          />
        </span>{' '}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
          className="p-2.5 text-base border-2 border-gray-100 rounded-md bg-gray-50 cursor-pointer hover:bg-gray-100 focus:outline-blue-200"
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
