import { fetchTrendingMovies } from 'components/api/api';
import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList/MoviesList';

import styles from '../Home/home.module.scss';

const Home = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const { data } = await fetchTrendingMovies();
        setItems(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Trending movies</h1>
      <MoviesList results={items} />
    </>
  );
};

export default Home;
