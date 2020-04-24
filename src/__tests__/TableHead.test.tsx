import React from "react";
import {render, fireEvent} from "@testing-library/react";
import {TableHead, TableHeadProps} from "../TableHead";
import renderer from 'react-test-renderer';
import {mount} from "enzyme";

function renderTableHead(props: Partial<TableHeadProps> = {}) {
    const defaultProps: TableHeadProps = {
        sortBy: 'Id',
        setSortBy() {
            return;
        },
        sortDirection: 1,
        tableHead: ['Id', 'Name'],
    };

    return <TableHead {...defaultProps} {...props} />;
}

describe("<TableHead />", () => {
    test("should render component", async () => {
        const findByTestId = renderTableHead(),
            TableHeadComponent = renderer.create(findByTestId).toJSON();

        expect(TableHeadComponent).toMatchSnapshot();
    });

    test("should click to change direction", async () => {
        const setSortBy = jest.fn(),
            findByTestId = renderTableHead({setSortBy}),
            TableHeadComponent = mount(findByTestId).find('th').first();

        TableHeadComponent.simulate('click');
        expect(setSortBy).toHaveBeenCalledTimes(1);
    });

    test("should click to change sort by", async () => {
        const setSortBy = jest.fn(),
            findByTestId = renderTableHead({setSortBy}),
            TableHeadComponent = mount(findByTestId).find('th').at(1);

        TableHeadComponent.simulate('click');
        expect(setSortBy).toHaveBeenCalledTimes(1);
    });

    test("should not click on actions column", async () => {
        const setSortBy = jest.fn(),
            findByTestId = renderTableHead({setSortBy}),
            TableHeadComponent = mount(findByTestId).find('th').at(2);

        TableHeadComponent.simulate('click');
        expect(setSortBy).toHaveBeenCalledTimes(0);
    });
});
