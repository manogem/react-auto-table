import React from "react";
import {TableComponent, TableComponentProps} from "../TableComponent";
import renderer from 'react-test-renderer';

function renderTableComponent(props: Partial<TableComponentProps> = {}) {
    const defaultProps: TableComponentProps = {
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
        modifyCurrentPage: () => {},
        pages: 2,
        search: '',
        setSearch: () => {},
        sortBy: 'Id',
        setSortBy: () => {},
        sortDirection: 1,
        isFetching: false,
        error: false,
        colWidths: [50, 25],
        tableHead: ['Id', 'Name'],
        currentlyOpenedTd: {
            id: null,
            key: null,
        },
        toggleTd: () => {},
        config: {}
    };

    return <TableComponent {...defaultProps} {...props} />;
}

describe("<TableComponent />", () => {
    test("should render component with data, with tableHead, with colWidths, sorted ASC by Id, with 2 pages on page 1", async () => {
        const findByTestId = renderTableComponent(),
            TableComponent = renderer.create(findByTestId).toJSON();

        expect(TableComponent).toMatchSnapshot();
    });
});
