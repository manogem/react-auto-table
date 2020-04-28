# @avezen/react-auto-table

[![npm (scoped)](https://img.shields.io/npm/v/@avezen/react-auto-table.svg)](https://www.npmjs.com/package/@avezen/react-auto-table)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@avezen/react-auto-table.svg)](https://www.npmjs.com/package/@avezen/react-auto-table)

Fast and easy customizable table built on json data for React apps.

## Install

```
$ npm install @avezen/react-auto-table
```

## Config


You can choose values to render in table.
Order matters.

While getting json response with data as:

```js
Request: {
   requestName: string;
   description: string;
   createDate: number(timestamp);
   endDate: number(timestamp);
   status: boolean;
   id: number;
}
```

And initializing table with this config:


```js
const config = {
    id: {
        name: 'Id',
    },
    requestName: {
        name: 'Request name'
    },
    description: {
        name: 'Description'
    },
    createDate: {
        name: 'Create date',
        type: 'timestamp'
    },
    endDate: {
        name: 'End date',
        type: 'timestamp'
    },
    status: {
        name: 'Status',
        type: 'boolean',
    }
};
```

You will get table:

Id | Request name | Description | Create date | End date | Status
(photos soon)

## Usage

```js
import React, {Component} from 'react';
import {fetchRequests, fetchRequestsByValue} from "../../service/FakeApiService";
import {AutoTable} from "@avezen/react-auto-table";

const colWidths = [
    140,
    80,
    110,
    200,
    120,
    80,
    140
];

const config = {
    id: {
        name: 'Id',
    },
    requestName: {
        name: 'Request name'
    },
    description: {
        name: 'Description'
    },
    createDate: {
        name: 'Create date',
        type: 'timestamp'
    },
    endDate: {
        name: 'End date',
        type: 'timestamp'
    },
    status: {
        name: 'Status',
        type: 'boolean',
    }
};

class RequestsTableContainer extends Component {
    state = {
        requests: [],
        currentPage: 1,
        pages: 0,
        search: '',
        sortBy: 'Id',
        sortDirection: 1,
        isFetching: false,
        error: ''
    };

    componentDidMount() {
        this.getRequests();
    }

    render() {
        const { requests, currentPage, pages, search, sortBy, sortDirection, isFetching, error } = this.state;
        return (
            <AutoTable
                data={requests}
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
                config={config}
                colWidths={colWidths}
            />
        );
    }

    getRequests = () => {
        const { search, currentPage, sortBy, sortDirection } = this.state;

        this.setState({isFetching: true});
        if (search.length > 0) {
            fetchRequestsByValue(search, currentPage, sortBy, sortDirection)
                .then(
                    this.onFetchSuccess,
                    this.onFetchFailure
                )
        } else {
            fetchRequests(currentPage, sortBy, sortDirection)
                .then(
                    this.onFetchSuccess,
                    this.onFetchFailure
                )
        }
    };

    onFetchSuccess = (data) => {
        this.setState({
            pages: data.pages,
            currentPage: data.currentPage,
            requests: data.requests,
            isFetching: false,
        })
    };

    onFetchFailure = () => {
        this.setState({
            isLoading: false,
            error: true,
        });
    };

    setSearch = (search) => {
        this.setState({search}, () => {
            this.getRequests();
        });
    };

    setPage = (currentPage) => {
        this.setState({currentPage}, () => {
            this.getRequests();
        });
    };

    setSortBy = (sortBy) => {
        this.setState({sortBy}, () => {
            this.getRequests();
        });
    };

    setSortDirection = (sortDirection) => {
        this.setState({sortDirection}, () => {
            this.getRequests();
        });
    };
}

export default RequestsTableContainer;
```
