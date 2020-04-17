import React, {Component} from 'react';

class TableNavigation extends Component {
    render() {
        const {setCurrentPage, currentPage, pages} = this.props;
        return (
            <div
                className={'table-navigation-pages'}
            >
                Page {currentPage} of {pages}.
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
                    >

                    </div>
                    <div
                        className={'number-down'}
                        onClick={() => setCurrentPage(-1)}
                    >

                    </div>
                </div>
            </div>
        );
    }
}

export default TableNavigation;