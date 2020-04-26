import React from "react";
import UseCase from "../useCase/UseCase";
import renderer from 'react-test-renderer';
import {mount} from "enzyme";
import fetchData from "../api/__mocks__";

function renderUseCase() {
    return <UseCase/>;
}

describe("<UseCase />", () => {
    let wrapper: any;
    beforeEach(() => {
        wrapper = mount(renderUseCase());
    });

    it('should render correctly search component', () => {
        const findByTestId = renderUseCase(),
            SearchInputComponent = renderer.create(findByTestId).toJSON();
        expect(SearchInputComponent).toMatchSnapshot();
    });

    it('should change search state', () => {
        const SearchInputComponent = wrapper.find('input[name="search"]');
        SearchInputComponent.simulate("change", {target: {value: 'test search'}});

        expect(wrapper.state("search")).toEqual('test search');
    });

    it('should change page', () => {
        const PageInputComponent = wrapper.find('input[name="page"]').first();
        PageInputComponent.simulate("change", {target: {value: 1}});

        expect(wrapper.state("currentPage")).toEqual(1);
    });

    it('shouldnt change page', () => {
        const PageInputComponent = wrapper.find('input[name="page"]').first();
        PageInputComponent.simulate("change", {target: {value: 2}});

        expect(wrapper.state("currentPage")).toEqual(1);
    });

    it('should fetch the data', () => {
        let expectedData = {
            currentPage: 1,
            data: [
                {id: 1, name: "Test use case 1"},
                {id: 2, name: "Test use case 2"},
                {id: 3, name: "Test use case 3"}
            ],
            itemsPerPage: 10,
            pages: 1
        };
        return expect(fetchData(1, 'id', 1, 10)).resolves.toEqual(expectedData);
    });
});
