import React from 'react';

export interface TableNavigationProps {
    setCurrentPage: any;
    modifyCurrentPage: any;
    currentPage: number;
    pages: number;
}

export const TableNavigation = ({ setCurrentPage, modifyCurrentPage, currentPage, pages }: TableNavigationProps) => (
  <div className={'table-navigation-pages'}>
    <span data-testid="span">
      Page {currentPage} of {pages}.
    </span>
    <div className={'number-wrapper'}>
      <input data-testid="number-input" className={'input number-input'} value={currentPage} type={'number'} onChange={setCurrentPage} />
      <div data-testid="number-up" className={'number-up'} onClick={() => modifyCurrentPage(1)}></div>
      <div data-testid="number-down" className={'number-down'} onClick={() => modifyCurrentPage(-1)}></div>
    </div>
  </div>
);
