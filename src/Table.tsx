import React from 'react';
import {TableHead} from "./TableHead";
import {TableBody} from "./TableBody";
import {TableColumnWidths} from "./TableColumnWidths";

export interface TableProps {
  data?: any[];
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
  config: any;
}

export const Table = ({
  data,
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
}: TableProps) => (
    <table>
      <TableColumnWidths
          colWidths={colWidths}
      />
      <TableHead
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortDirection={sortDirection}
          tableHead={tableHead}
          config={config}
      />
      <TableBody
          data={data}
          isFetching={isFetching}
          tableHead={tableHead}
          colWidths={colWidths}
          currentlyOpenedTd={currentlyOpenedTd}
          toggleTd={toggleTd}
          config={config}
      />
    </table>
);
