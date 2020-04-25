import React from "react";
import {AutoTable, AutoTableProps} from "../index";
import renderer from 'react-test-renderer';

function renderAutoTable(props: Partial<AutoTableProps> = {}) {
    const defaultProps: AutoTableProps = {
        data: [
            {
                Id: 1,
                Name: 'Test 1'
            },
            {
                Id: 2,
                Name: 'Test 2'
            }
        ],
        currentPage: 1,
        setCurrentPage: () => {},
        pages: 2,
        search: '',
        setSearch: () => {},
        sortBy: 'Id',
        setSortBy: () => {},
        sortDirection: 1,
        setSortDirection: () => {},
        isFetching: false,
        error: false,
        colWidths: [50, 25],
        tableHead: ['Id', 'Name'],
    };

    return <AutoTable {...defaultProps} {...props} />;
}

describe("<AutoTable />", () => {


});
