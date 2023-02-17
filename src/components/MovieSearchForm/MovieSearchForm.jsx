import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

import { useState } from 'react';

import styles from '../MovieSearchForm/movieSearchForm.module.scss';

const MovieSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (search.trim().toLowerCase() === '') {
      return Notiflix.Notify.info('Enter correct search!');
    }

    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="search"
        value={search}
        onChange={handleChange}
        placeholder="Film name"
      />
      <button className={styles.searchBtn}>Search</button>
    </form>
  );
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
