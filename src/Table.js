import React, {Component} from 'react';
import TruncatedString from "./TruncatedString";
import loader from "./assets/images/loader.svg";
import TableNavigation from "./TableNavigation";

class Table extends Component {

    render() {
        const { data, currentPage, setCurrentPage, pages, search, setSearch, sortBy, setSortBy, sortDirection, isFetching, error, colWidths, tableHead, currentlyOpenedTd, toggleTd } = this.props;

        return (
            <React.Fragment>
                <div
                    className={'table-nav--top'}
                >
                    <TableNavigation
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        pages={pages}
                    />
                    <input
                        className={'input'}
                        value={search}
                        type={'text'}
                        placeholder={'Search...'}
                        onChange={setSearch}
                    />
                </div>
                <table>
                    {colWidths && colWidths.length > 0 && (
                        <colgroup>
                            {colWidths.map((item, key) => (
                                <col
                                    key={key}
                                    width={item}
                                />
                            ))}
                        </colgroup>
                    )}

                    <thead>
                    <tr>
                        {tableHead.length > 0 && tableHead.map((item, key) => (
                            <th
                                key={key}
                                onClick={() => setSortBy(item.replace(/\s/g, ''))}
                            >
                                {item}
                                {item.replace(/\s/g, '') === sortBy && (
                                    sortDirection === 1 ? (
                                        <i className={'arrow down'}></i>
                                    ) : (
                                        <i className={'arrow up'}></i>
                                    )
                                )}
                            </th>
                        ))}
                        <th
                        >
                            Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !data ? (
                            <React.Fragment/>
                        ) : isFetching ? (
                            <tr>
                                <td colSpan={tableHead.length === 0 ? 1 : tableHead.length}>
                                    <div
                                        className={'fetch-info'}
                                    >
                                        <img
                                            src={loader}
                                            alt={'loader'}
                                            width={30}
                                        />
                                    </div>
                                </td>
                            </tr>
                        ) : error ? (
                            <tr>
                                <td colSpan={tableHead.length}>
                                    <div
                                        className={'fetch-info'}
                                    >
                                        Error while fetching data
                                    </div>
                                </td>
                            </tr>
                        ) : data.length > 0 ? (
                            data.map((item, key) => {
                                let dateString = (new Date(item.Deadline)).toLocaleString('pl-PL', {hour12: false});
                                dateString = dateString.substr(0, dateString.indexOf(','));

                                return (
                                    <tr key={key}>
                                        {Object.entries(item).map(([key, value]) => {
                                            return (
                                                <td>
                                                    <TruncatedString
                                                        toggled={item.Id === currentlyOpenedTd.id && key === currentlyOpenedTd.key}
                                                        toggleTd={() => toggleTd(item.Id, key)}
                                                        string={value}
                                                    />
                                                </td>
                                            );
                                        })}

                                        <td>
                                            <button>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan={tableHead.length}>
                                    <div
                                        className={'fetch-info'}
                                    >
                                        Not found
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
                <div
                    className={'table-nav--bottom'}
                >
                    <TableNavigation
                        setPage={setCurrentPage}
                        currentPage={currentPage}
                        pages={pages}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default Table;
