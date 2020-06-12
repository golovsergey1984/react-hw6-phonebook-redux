import React from 'react';
import styles from './searchForm.module.css';
import PropTypes from 'prop-types';

const SearchForm = ({ filter, onChangeInputFilter }) => (
    <div className={styles['searchForm-box']}>
        <div className={styles['searchForm-wrapper']}>
            <p className={styles['searchForm-input-title']}>Find contacts by name</p>
            <input
                type="text"
                className={styles['searchForm-input']}
                placeholder="Type to filter names..."
                value={filter}
                onChange={(e) => onChangeInputFilter(e)}
            ></input>
        </div>
    </div>
);

export default SearchForm;

SearchForm.propTypes = {
    filter: PropTypes.string,
    onChangeInputFilter: PropTypes.func.isRequired,
};