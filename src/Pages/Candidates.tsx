import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination, Column } from "react-table";
import ReactPaginate from "react-paginate";

interface Data {
  name: string;
  age: number;
  address: string;
}

interface TableProps {
  columns: Column<Data>[];
  data: Data[];
}

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useSortBy,
    usePagination
  );

  return (
    <>
      <table {...getTableProps()} className="table">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>
        <button
          onClick={() => gotoPage(pageOptions.length - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span>
          | Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: "100px" }}
          />
        </span>{" "}
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageOptions.length}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={(page) => {
          gotoPage(page.selected);
        }}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </>
  );
};

const App: React.FC = () => {
  const columns: Column<Data>[] = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Address",
        accessor: "address",
      },
    ],
    []
  );

  const data: Data[] = useMemo(
    () => [
      { name: "John", age: 30, address: "123 Main St" },
      { name: "Jane", age: 40, address: "456 Maple Ave" },
      { name: "Jim", age: 20, address: "789 Elm St" },
      { name: "Jill", age: 25, address: "101 Oak St" },
      { name: "Jack", age: 35, address: "202 Pine Blvd" },
      { name: "Jenny", age: 30, address: "345 Cedar Dr" },
      { name: "Jerry", age: 45, address: "678 Ocean Pkwy" },
      { name: "Jeremy", age: 50, address: "753 Lake Rd" },
      { name: "Jeff", age: 55, address: "963 Stream Cir" },
      { name: "Jesse", age: 60, address: "123 River Rd" },
      { name: "Jamie", age: 65, address: "456 Brookside Ave" },
      { name: "Jordan", age: 70, address: "789 Hillside St" },
      { name: "Jocelyn", age: 75, address: "101 Valley Rd" },
      { name: "Jared", age: 80, address: "202 Mountain Blvd" },
      { name: "Jasmine", age: 85, address: "345 Skyline Dr" },
      { name: "Jill", age: 90, address: "678 Lakeview Pkwy" },
      { name: "Jenna", age: 95, address: "753 Oceanview Rd" },
      { name: "Jared", age: 100, address: "963 Beach Blvd" },
      { name: "Jolene", age: 105, address: "123 Seashore Ave" },
      { name: "Jude", age: 110, address: "456 Boardwalk St" },
      { name: "Jasper", age: 115, address: "789 Lighthouse Cir" },
      { name: "Jett", age: 120, address: "101 Palm Blvd" },
      { name: "Jagger", age: 125, address: "202 Sand Dr" },
      { name: "Jax", age: 130, address: "345 Wave Ave" },
      { name: "Jude", age: 135, address: "678 Oceanfront Pkwy" },
      { name: "Jagger", age: 140, address: "753 Beachside Rd" },
      { name: "Jett", age: 145, address: "963 Shoreline Blvd" },
      { name: "Jasper", age: 150, address: "123 Coast Rd" },
      { name: "Jolene", age: 155, address: "456 Bay Blvd" },
      { name: "Jared", age: 160, address: "789 Harbor St" },
      { name: "Jenna", age: 165, address: "101 Marina Ave" },
      { name: "Jill", age: 170, address: "202 Dock Dr" },
      { name: "Jasmine", age: 175, address: "345 Wharf Cir" },
      // Add more data as needed
    ],
    []
  );

  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;
