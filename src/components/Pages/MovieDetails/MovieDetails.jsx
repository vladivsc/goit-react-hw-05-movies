import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Link,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { fetchMovieById } from 'components/api/themoviedb';

import Loader from 'components/Loader/Loader';
import styles from '../MovieDetails/movieDetails.module.scss';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);

      try {
        const { data } = await fetchMovieById(id);
        setMovies(data);
      } catch ({ response }) {
        console.log(response.data.massage);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const { title, poster_path, overview, genres, vote_average } = movies;

  const genresList = genres?.map(genre => genre.name).join(', ');

  const userScore = () => {
    return Math.round(vote_average * 10);
  };

  const userScorePercentage = userScore();

  return (
    <>
      <button className={styles.btn} onClick={() => navigate(from)}>
        Go back
      </button>
      {loading && <Loader />}
      <div className={styles.details}>
        <div className={styles.poster}>
          <img
            src={
              poster_path === null
                ? 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
                : `https://image.tmdb.org/t/p/w500${poster_path}`
            }
            alt=""
          />
        </div>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>User Score: {userScorePercentage}%</p>
          <p className={styles.subtitle}>Overview</p>
          {overview !== '' ? overview : 'Description is not specified'}
          <p className={styles.subtitle}>Genres</p>
          {genresList !== '' ? genresList : 'Genre is not specified'}
        </div>
      </div>
      <div className={styles.info}>
        <h3>Additional information</h3>
        <Link state={{ from }} to={`cast`} className={styles.link}>
          Cast
        </Link>
        <Link state={{ from }} to={`reviews`} className={styles.link}>
          Reviews
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
