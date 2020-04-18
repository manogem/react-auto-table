import React from 'react';

export const TableNavigation = ({ setCurrentPage, currentPage, pages }) => (
    <div
        className={'table-navigation-pages'}
    >
        <span>
            Page {currentPage} of {pages}.
        </span>
        <div
            className={'number-wrapper'}
        >
            <input
                className={'input number-input'}
                value={currentPage}
                type={'number'}
                onChange={setCurrentPage}
            />
            <div
                className={'number-up'}
                onClick={() => setCurrentPage(1)}
            ></div>
            <div
                className={'number-down'}
                onClick={() => setCurrentPage(-1)}
            ></div>
        </div>
    </div>
);
