import React from 'react';

export interface SearchInputProps {
    search?: string;
    setSearch: any;
}

export const SearchInput = ({search, setSearch}: SearchInputProps) => (
    <input className={'input'} name={'search'} value={search} type={'text'} placeholder={'Search...'} onChange={setSearch} />
);