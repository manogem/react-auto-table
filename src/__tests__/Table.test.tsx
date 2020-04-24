import React from "react";
import {Table, TableProps} from "../Table";
import renderer from 'react-test-renderer';

function renderTable(props: Partial<TableProps> = {}) {
    const defaultProps: TableProps = {
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
        sortBy: 'Id',
        setSortBy() {
            return;
        },
        sortDirection: 1,
        isFetching: false,
        error: false,
        colWidths: [50, 25],
        tableHead: ['Id', 'Name'],
        currentlyOpenedTd: {
            id: null,
            key: null,
        },
        toggleTd() {
            return;
        }
    };

    return <Table {...defaultProps} {...props} />;
}

describe("<Table />", () => {
    test("should render component with data, with tableHead, with colWidths, sorted ASC by Id", async () => {
        const findByTestId = renderTable(),
            TableComponent = renderer.create(findByTestId).toJSON();

        expect(TableComponent).toMatchSnapshot();
    });

    test("should render component with data, with tableHead, with colWidths, sorted DESC by Id", async () => {
        const props = {
            sortBy: 'Id',
            sortDirection: -1,
        };
        const findByTestId = renderTable(props),
            TableComponent = renderer.create(findByTestId).toJSON();

        expect(TableComponent).toMatchSnapshot();
    });

    test("should render component with data, with tableHead, with colWidths, sorted ASC by Name", async () => {
        const props = {
            sortBy: 'Name',
            sortDirection: 1,
        };
        const findByTestId = renderTable(props),
            TableComponent = renderer.create(findByTestId).toJSON();

        expect(TableComponent).toMatchSnapshot();
    });
});
