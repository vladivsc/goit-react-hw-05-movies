import { fetchTrendingMovies } from 'components/api/themoviedb';
import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';

import Loader from 'components/Loader/Loader';
import styles from '../Home/home.module.scss';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTrendingMovies = async () => {
      setLoading(true);

      try {
        const { data } = await fetchTrendingMovies();
        setItems(data.results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <h1 className={styles.title}>Trending movies</h1>
      {items.length > 0 && <MoviesList results={items} />}
    </>
  );
};

export default Home;
