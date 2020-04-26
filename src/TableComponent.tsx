import React from 'react';
// @ts-ignore
import { TableNavigation } from './TableNavigation';
import {Table} from "./Table";
import {SearchInput} from "./SearchInput";

export interface TableComponentProps {
  data?: any[];
  currentPage: number;
  setCurrentPage: any;
  modifyCurrentPage: any;
  pages: number;
  search: string;
  setSearch: any;
  sortBy: string;
  setSortBy: any;
  sortDirection: number;
  isFetching: boolean;
  error?: boolean;
  colWidths?: number[];
  tableHead: string[];
  currentlyOpenedTd: {
    id: null,
    key: null,
  };
  toggleTd: any;
  config?: any;
}

export const TableComponent = ({
  data,
  currentPage,
  setCurrentPage,
  modifyCurrentPage,
  pages,
  search,
  setSearch,
  sortBy,
  setSortBy,
  sortDirection,
  isFetching,
  error,
  colWidths,
  tableHead,
  currentlyOpenedTd,
  toggleTd,
  config
}: TableComponentProps) => (
  <React.Fragment>
    <div className={'table-nav--top'}>
      <TableNavigation setCurrentPage={setCurrentPage} modifyCurrentPage={modifyCurrentPage} currentPage={currentPage} pages={pages} />
      <SearchInput search={search} setSearch={setSearch}/>
    </div>
    <Table
        data={data}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortDirection={sortDirection}
        isFetching={isFetching}
        tableHead={tableHead}
        colWidths={colWidths}
        currentlyOpenedTd={currentlyOpenedTd}
        toggleTd={toggleTd}
        error={error}
        config={config}
    />
    <div className={'table-nav--bottom'}>
      <TableNavigation setCurrentPage={setCurrentPage} modifyCurrentPage={modifyCurrentPage} currentPage={currentPage} pages={pages} />
    </div>
  </React.Fragment>
);
