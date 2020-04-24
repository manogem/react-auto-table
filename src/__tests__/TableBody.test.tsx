import React from "react";
import {TableBody, TableBodyProps} from "../TableBody";
import renderer from 'react-test-renderer';

function renderTableBody(props: Partial<TableBodyProps> = {}) {
    const defaultProps: TableBodyProps = {
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
        isFetching: false,
        error: false,
        colWidths: [50, 100],
        tableHead: ['Id', 'Name'],
        currentlyOpenedTd: {
            id: 1,
            key: 'Name',
        },
        toggleTd() {
            return;
        }
    };

    return <TableBody {...defaultProps} {...props} />;
}

describe("<TableBody />", () => {
    test("should render component with data", async () => {
        const findByTestId = renderTableBody(),
            TableBodyComponent = renderer.create(findByTestId).toJSON();

        expect(TableBodyComponent).toMatchSnapshot();
    });

    test("should render component with data, with toggled tooltip", async () => {
        const props = {
            data: [
                {
                    Id: 1,
                    Name: 'Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, Test 1, '
                },
                {
                    Id: 2,
                    Name: 'Test 2'
                }
            ],
        };
        const findByTestId = renderTableBody(props),
            TableBodyComponent = renderer.create(findByTestId).toJSON();

        expect(TableBodyComponent).toMatchSnapshot();
    });

    test("should render component with data", async () => {
        const findByTestId = renderTableBody(),
            TableBodyComponent = renderer.create(findByTestId).toJSON();

        expect(TableBodyComponent).toMatchSnapshot();
    });

    test("should render component with error", async () => {
        const props = {
            data: [],
            error: true
        };
        const findByTestId = renderTableBody(props),
            TableBodyComponent = renderer.create(findByTestId).toJSON();

        expect(TableBodyComponent).toMatchSnapshot();
    });

    test("should render component while fetching", async () => {
        const props = {
            data: [],
            isFetching: true,
            error: true
        };
        const findByTestId = renderTableBody(props),
            TableBodyComponent = renderer.create(findByTestId).toJSON();

        expect(TableBodyComponent).toMatchSnapshot();
    });

    test("should render component with no data", async () => {
        const props = {
            data: []
        };
        const findByTestId = renderTableBody(props),
            TableBodyComponent = renderer.create(findByTestId).toJSON();

        expect(TableBodyComponent).toMatchSnapshot();
    });
});
