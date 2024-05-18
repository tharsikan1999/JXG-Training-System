declare module "react-table" {
  import { ReactNode } from "react";

  export interface Column<D extends object = {}> {
    Header?: string | ReactNode;
    accessor?: keyof D | ((row: D) => any);
    id?: string;
    Cell?: (props: CellProps<D>) => ReactNode;
    columns?: Column<D>[];
  }

  export interface CellProps<D extends object = {}> {
    value: any;
    row: Row<D>;
    column: Column<D>;
  }

  export interface Row<D extends object = {}> {
    original: D;
  }

  export interface TableOptions<D extends object = {}> {
    columns: Column<D>[];
    data: D[];
    initialState?: Partial<TableState<D>>;
  }

  export function useTable<D extends object = {}>(
    options: TableOptions<D>,
    ...plugins: any[]
  ): TableInstance<D>;

  export function useSortBy<D extends object = {}>(hooks: any[]): void;
  export function usePagination<D extends object = {}>(hooks: any[]): void;

  export interface TableInstance<D extends object = {}> {
    getTableProps: () => any;
    getTableBodyProps: () => any;
    headerGroups: HeaderGroup<D>[];
    prepareRow: (row: Row<D>) => void;
    page: Row<D>[];
    canPreviousPage: boolean;
    canNextPage: boolean;
    pageOptions: number[];
    gotoPage: (updater: number | ((pageIndex: number) => number)) => void;
    nextPage: () => void;
    previousPage: () => void;
    setPageSize: (pageSize: number) => void;
    state: TableState<D>;
  }

  export interface HeaderGroup<D extends object = {}> {
    getHeaderGroupProps: () => any;
    headers: Column<D>[];
  }

  export interface TableState<D extends object = {}> {
    pageIndex: number;
    pageSize: number;
  }
}
