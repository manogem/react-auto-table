import React from 'react';
import TruncatedString from './TruncatedString';
// @ts-ignore
import loader from './assets/images/loader.svg'

export interface TableBodyProps {
    data?: any[];
    isFetching: boolean;
    error?: boolean;
    colWidths?: number[];
    tableHead: string[];
    currentlyOpenedTd: {
        id: any,
        key: any,
    };
    toggleTd: any;
    config: any;
}

export const TableBody = ({
                          data,
                          isFetching,
                          error,
                          colWidths,
                          tableHead,
                          currentlyOpenedTd,
                          toggleTd,
                          config
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
        data.map((item: any) => {
            Object.entries(item).map(([objectKey, value]: [string, any]) => {
                if(config && config[objectKey]){
                    config[objectKey].value = value
                }
            });
            return (
                <tr key={item.id}>
                    {config && Object.entries(config).map(([objectKey, value]: [string, any]) => {
                        return (
                                <td key={objectKey}>
                                    <TruncatedString
                                        toggled={item.Id === currentlyOpenedTd.id && objectKey === currentlyOpenedTd.key}
                                        toggleTd={() => toggleTd(item.Id, objectKey)}
                                        value={value.value}
                                        type={value.type}
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
