import React from 'react';

export interface TableHeadProps {
    sortBy: string;
    setSortBy: any;
    sortDirection: number;
    tableHead: string[];
    config: any;
}

export const TableHead = ({
                              sortBy,
                              setSortBy,
                              sortDirection,
                              tableHead,
                              config
                          }: TableHeadProps) => {

    return (
        <thead>
        <tr>
            {tableHead.length > 0 && (
                <React.Fragment>
                    {config ?
                        (
                            Object.entries(config).map(([objectKey, value]: [string, any]) => (
                                    <th key={objectKey} onClick={() => setSortBy(objectKey.replace(/\s/g, ''))}>
                                        {value.name}
                                        {objectKey.replace(/\s/g, '') === sortBy &&
                                        (sortDirection === 1 ? <i className={'arrow down'}></i> :
                                            <i className={'arrow up'}></i>)}
                                    </th>
                                )
                            )
                        ) : (
                            tableHead.map((item: string, key: number) => (
                                    <th key={key} onClick={() => setSortBy(item.replace(/\s/g, ''))}>
                                        {item}
                                        {item.replace(/\s/g, '') === sortBy &&
                                        (sortDirection === 1 ? <i className={'arrow down'}></i> :
                                            <i className={'arrow up'}></i>)}
                                    </th>
                                )
                            )
                        )
                    }
                    <th>Actions</th>
                </React.Fragment>
            )}
        </tr>
        </thead>
    )
};
