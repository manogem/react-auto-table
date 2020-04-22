import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { TableNavigation, TableNavigationProps } from "../TableNavigation";
import {shallow} from "enzyme";
import {Hello} from "../Hello";

function renderTableNavigation(props: Partial<TableNavigationProps> = {}) {
    const defaultProps: TableNavigationProps = {
        setCurrentPage() {
            return;
        },
        modifyCurrentPage() {
            return;
        },
        currentPage: 1,
        pages: 3
    };

    return render(<TableNavigation {...defaultProps} {...props} />);
}

describe("<TableNavigation />", () => {
    test("should display a table navigation", async () => {
        const { findByTestId } = renderTableNavigation({});

        const numberInput = await findByTestId("number-input");
        const span = await findByTestId("span");

        expect(numberInput).toHaveValue(1);
        expect(span).toHaveTextContent('Page 1 of 3.');
    });

    test("should click to increase a page number", async () => {
        const modifyCurrentPage = jest.fn();
        const { findByTestId } = renderTableNavigation({ modifyCurrentPage });
        const numberUp = await findByTestId("number-up");

        fireEvent.click(numberUp);

        expect(modifyCurrentPage).toHaveBeenCalledWith(1);
    });

    test("should click to decrease a page number", async () => {
        const modifyCurrentPage = jest.fn();
        const { findByTestId } = renderTableNavigation({ modifyCurrentPage });
        const numberUp = await findByTestId("number-down");

        fireEvent.click(numberUp);

        expect(modifyCurrentPage).toHaveBeenCalledWith(-1);
    });

    test("should allow entering a page number", async () => {
        const setCurrentPage = jest.fn();
        const { findByTestId } = renderTableNavigation({ setCurrentPage });
        const numberInput = await findByTestId("number-input") as HTMLInputElement;

        fireEvent.change(numberInput, {target: {value: '3'}});

        expect(setCurrentPage).toHaveBeenCalledTimes(1);
    });

    test("hello", async () => {
        const result = shallow(<Hello />).contains(<div>hello</div>);
        expect(result).toBeTruthy();
    });
});
