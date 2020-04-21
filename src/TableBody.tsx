import React from 'react';
import TruncatedString from './TruncatedString';
// @ts-ignore
import loader from './assets/images/loader.svg'

interface TableBodyProps {
    data?: any[];
    isFetching: boolean;
    error?: boolean;
    colWidths?: number[];
    tableHead: string[];
    currentlyOpenedTd: {
        id: null,
        key: null,
    };
    toggleTd: any;
}

export const TableBody = ({
                          data,
                          isFetching,
                          error,
                          colWidths,
                          tableHead,
                          currentlyOpenedTd,
                          toggleTd,
                      }: TableBodyProps) => (
    <tbody>
    {isFetching ? (
        <tr>
            <td colSpan={100}>
                <div className={'fetch-info'}>
                    <img src={loader} alt={'loader'} width={30}/>
                </div>
            </td>
        </tr>
    ) : data && data.length > 0 ? (
        data.map((item: any, key: number) => {
            // let dateString = new Date(item.Deadline).toLocaleString('pl-PL', { hour12: false });
            // dateString = dateString.substr(0, dateString.indexOf(','));

            return (
                <tr key={key}>
                    {Object.entries(item).map(([objectKey, value]: [string, any]) => {
                        return (
                            <td key={objectKey}>
                                <TruncatedString
                                    toggled={item.Id === currentlyOpenedTd.id && key === currentlyOpenedTd.key}
                                    toggleTd={() => toggleTd(item.Id, key)}
                                    value={value}
                                />
                            </td>
                        );
                    })}

                    <td>
                        <button>Edit</button>
                    </td>
                </tr>
            );
        })
    ) : error ? (
        <tr>
            <td colSpan={100}>
                <div className={'fetch-info'}>Error while fetching data</div>
            </td>
        </tr>
    ) : (
        <tr>
            <td colSpan={100}>
                <div className={'fetch-info'}>Not found</div>
            </td>
        </tr>
    )}
    </tbody>
);
