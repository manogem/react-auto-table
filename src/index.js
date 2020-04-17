import React, {Component} from 'react';

import Table from "./Table";
import './App.css';


class RequestsTableContainer extends Component {
    state = {
        tableHead: [],
        currentlyOpenedTruncatedString: {
            id: null,
            key: null
        }
    };

    render() {
        const { tableHead, currentlyOpenedTruncatedString } = this.state;
        const { data, currentPage, pages, search, sortBy, sortDirection, isFetching, error, colWidths } = this.props;

        return (
            <Table
                data={data}
                currentPage={currentPage}
                setCurrentPage={this.setCurrentPage}
                pages={pages}
                search={search}
                setSearch={this.setSearch}
                sortBy={sortBy}
                setSortBy={this.setSortBy}
                sortDirection={sortDirection}
                isFetching={isFetching}
                error={error}
                colWidths={colWidths}

                tableHead={tableHead}
                currentlyOpenedTd={currentlyOpenedTruncatedString}
                toggleTd={this.toggleCurrentlyOpenedTruncatedString}
            />
        );
    }

    toggleCurrentlyOpenedTruncatedString = (id, key) => {
        const {currentlyOpenedTruncatedString} = this.state;

        if (currentlyOpenedTruncatedString.id === id && currentlyOpenedTruncatedString.key === key) {
            this.setState({currentlyOpenedTruncatedString: {id: null, key: null}})
        } else {
            this.setState({currentlyOpenedTruncatedString: {id, key}})
        }
    };

    setCurrentPage = (changeBy) => {
        const {currentPage, setCurrentPage, pages} = this.props;

        let newCurrentPage = currentPage + changeBy;

        if (newCurrentPage > pages || newCurrentPage <= 0) {
            return;
        }

        setCurrentPage(newCurrentPage);
    };

    setSearch = (e) => {
        const { setSearch } = this.props;

        setSearch(e.target.value);
    };

    setSortBy = (value) => {
        const {tableHead, sortBy, setSortBy, sortDirection, setSortDirection} = this.props;

        if (value === tableHead[tableHead.length - 1]) {
            return;
        }

        let newSortDirection = sortDirection;

        if (value === sortBy) {
            newSortDirection = newSortDirection * -1;

            setSortDirection(newSortDirection)
        } else {
            newSortDirection = 1;

            setSortDirection(newSortDirection)
            setSortBy(value)
        }
    };
}

export default RequestsTableContainer;
