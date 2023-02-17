import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchSearchMovies } from 'components/api/themoviedb';

import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';

import styles from '../Movies/movies.module.scss';

const Movies = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      try {
        const { data } = await fetchSearchMovies(search);
        setItems(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
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
      {loading && <Loader />}
      <MovieSearchForm onSubmit={changeSearch} />
      {items.length > 0 && <MoviesList results={items} />}
    </div>
  );
};

export default Movies;
