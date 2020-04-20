import React from 'react';

interface TableHeadProps {
    sortBy: string;
    setSortBy: any;
    sortDirection: number;
    tableHead: string[];
}

export const TableHead = ({
                              sortBy,
                              setSortBy,
                              sortDirection,
                              tableHead,
                          }: TableHeadProps) => (
    <thead>
    <tr>
        {tableHead.length > 0 && (
            <React.Fragment>
                {tableHead.map((item: string, key: number) => (
                    <th key={key} onClick={() => setSortBy(item.replace(/\s/g, ''))}>
                        {item}
                        {item.replace(/\s/g, '') === sortBy &&
                        (sortDirection === 1 ? <i className={'arrow down'}></i> : <i className={'arrow up'}></i>)}
                    </th>
                ))}
                <th>Actions</th>
            </React.Fragment>
        )}
    </tr>
    </thead>
);
