// SearchBar.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getByName, getById } from '../../redux/actions/actions';
import styles from '../SEARCH BAR/SearchBar.module.css';

function SearchBar() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    const search = searchTerm.trim();

    // Validar que se ingresó un valor correcto.
    if (!search) {
      alert('Please enter a valid search term.');
      return;
    }

    // Intentar buscar por ID
    const isNumeric = !isNaN(search);
    if (isNumeric) {
      dispatch(getById(search));
    } else {
      dispatch(getByName(search));
    }
  };

  return (
    <div className={styles.SearchBarContainer}>
      <input
        className={styles.SearchInput}
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Search...'
      />
      <button className={styles.SearchButton} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
