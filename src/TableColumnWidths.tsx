import React from 'react';

interface TableColumnWidthsProps {
    colWidths?: number[];
}

export const TableColumnWidths = ({
                          colWidths,
                      }: TableColumnWidthsProps) => (
    <React.Fragment>
        {colWidths && colWidths.length > 0 && (
            <colgroup>
                {colWidths.map((item, key) => (
                    <col key={key} width={item}/>
                ))}
            </colgroup>
        )}
    </React.Fragment>
);
