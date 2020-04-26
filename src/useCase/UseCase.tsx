import React, {Component} from 'react';
import {AutoTable} from "../index";
import fetchData, {fetchDataByValue} from "../api/__mocks__";

const tableHead = [
    "Id",
    "Name"
];

const colWidths = [
    130,
    80
];

class UseCase extends Component {
    state = {
        data: [],
        currentPage: 1,
        pages: 0,
        search: '',
        sortBy: 'Id',
        sortDirection: 1,
        isFetching: false,
        error: ''
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        const { data, currentPage, pages, search, sortBy, sortDirection, isFetching, error } = this.state;

        return (
            <AutoTable
                data={data}
                currentPage={currentPage}
                setCurrentPage={this.setCurrentPage}
                pages={pages}
                search={search}
                setSearch={this.setSearch}
                sortBy={sortBy}
                setSortBy={this.setSortBy}
                sortDirection={sortDirection}
                setSortDirection={this.setSortDirection}
                isFetching={isFetching}
                error={error}
                colWidths={colWidths}
            />
        );
    }

    getData = () => {
        const { search, currentPage, sortBy, sortDirection } = this.state;

        this.setState({isFetching: true});
        if (search.length > 0) {
            fetchDataByValue(search, currentPage, sortBy, sortDirection, 10)
                .then(
                    this.onFetchSuccess,
                    this.onFetchFailure
                )
        } else {
            fetchData(currentPage, sortBy, sortDirection, 10)
                .then(
                    this.onFetchSuccess,
                    this.onFetchFailure
                )
        }
    };

    onFetchSuccess = (data: any) => {
        this.setState({
            pages: data.pages,
            currentPage: data.currentPage,
            data: data.data,
            isFetching: false,
        })
    };

    onFetchFailure = () => {
        this.setState({
            isLoading: false,
            error: true,
        });
    };

    setSearch = (search: string) => {
        this.setState({search}, () => {
            this.getData();
        });
    };

    setCurrentPage = (currentPage: number) => {
        this.setState({currentPage}, () => {
            this.getData();
        });
    };

    setSortBy = (sortBy: string) => {
        this.setState({sortBy}, () => {
            this.getData();
        });
    };

    setSortDirection = (sortDirection: number) => {
        this.setState({sortDirection}, () => {
            this.getData();
        });
    };
}

export default UseCase;