import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from 'components/api/api';

import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

import styles from '../Movies/movies.module.scss';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await fetchSearchMovies(search);
        setItems(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (search) {
      fetchMovie();
    }
  }, [search]);

  const changeSearch = search => {
    setSearchParams({ search });
  };

  return (
    <div className={styles.searchContainer}>
      <MovieSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MoviesList results={items} />}
    </div>
  );
};

export default Movies;
