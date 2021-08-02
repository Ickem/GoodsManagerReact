import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../SearchBar/SearchBar';

export default function Header({
    modalActive,
    showModalForm,
    getValueSearch,
    valueSearchInput
    }){
    return(
        <div className="dashboard-header">
            <h2>Dashboard</h2>
            <button
                className="button-modal"
                onClick={()=>showModalForm() }
            > +
            </button>
            <SearchBar
                onChange={getValueSearch}
                value={valueSearchInput}
            />
        </div>
    );
}

Header.propTypes = {
    modalActive: PropTypes.bool,
    showModalForm: PropTypes.func,
    getValueSearch: PropTypes.func,
    valueSearchInput: PropTypes.string
};