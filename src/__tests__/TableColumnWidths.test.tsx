import React from "react";
import {TableColumnWidths, TableColumnWidthsProps} from "../TableColumnWidths";
import renderer from 'react-test-renderer';

function renderTableColumnWidths(props: Partial<TableColumnWidthsProps> = {}) {
    const defaultProps: TableColumnWidthsProps = {
        colWidths: [12, 23]
    };

    return <TableColumnWidths {...defaultProps} {...props} />;
}

describe("<TableColumnWidths />", () => {
    test("should render component", async () => {
        const findByTestId = renderTableColumnWidths(),
            TableColumnWidthsComponent = renderer.create(findByTestId).toJSON();

        expect(TableColumnWidthsComponent).toMatchSnapshot();
    });
});
