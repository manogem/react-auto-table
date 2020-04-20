import React from "react";
import {render, fireEvent, waitForElement, getByText} from "@testing-library/react";
import  TruncatedString, { TruncatedStringProps } from "../TruncatedString";

function renderTruncatedString(props: Partial<TruncatedStringProps> = {}) {
    const defaultProps: TruncatedStringProps = {
        toggled: true,
        toggleTd() {
            return;
        },
        value: 'test'
    };

    return render(<TruncatedString {...defaultProps} {...props} />);
}



describe("<TruncatedString />", () => {
    test("should display a truncate value", async () => {
        const { findByTestId } = renderTruncatedString();

        const truncatedValue = await findByTestId("truncated-value");

        expect(truncatedValue).toHaveTextContent('test');
    });

    test("should display a full value", async () => {
        const value = 'test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test';
        const { findByTestId } = renderTruncatedString({value});

        const fullValue = await findByTestId("full-value");

        expect(fullValue).toHaveTextContent(value);
    });

    test("should toggle tooltip", async () => {
        const value = 'test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test, test';
        const toggleTd = jest.fn();
        const { findByTestId } = renderTruncatedString({ toggleTd, value });
        const expandTooltip = await findByTestId("expand-tooltip") as HTMLInputElement;

        fireEvent.click(expandTooltip);

        expect(toggleTd).toHaveBeenCalledTimes(1);
    });
});
