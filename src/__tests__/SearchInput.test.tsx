import React from "react";
import {SearchInput, SearchInputProps} from "../SearchInput";
import renderer from 'react-test-renderer';
import {mount} from "enzyme";

function renderSearchInput(props: Partial<SearchInputProps> = {}) {
    const defaultProps: SearchInputProps = {
        search: 'ok',
        setSearch: () => {}
    };

    return <SearchInput {...defaultProps} {...props} />;
}

describe("<SearchInput />", () => {
    test('should render correctly search component', () => {
        const findByTestId = renderSearchInput(),
            SearchInputComponent = renderer.create(findByTestId).toJSON();
        expect(SearchInputComponent).toMatchSnapshot();
    });

    test('should render search input correctly with empty value', () => {
        const props = {
                search: ''
            };
        const findByTestId = renderSearchInput(props),
            SearchInputComponent = mount(findByTestId).find('input');
        expect(SearchInputComponent.props().value).toEqual('');
    });

    test('should check the onChange callback', () => {
        const setSearch = jest.fn(),

            findByTestId = renderSearchInput({setSearch}),
            SearchInputComponent = mount(findByTestId).find('input');

        SearchInputComponent.simulate('change', { target: { value: 'test' } });
        expect(setSearch).toHaveBeenCalledTimes(1);
    });
});
