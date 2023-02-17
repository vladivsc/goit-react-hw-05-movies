import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, Outlet } from 'react-router-dom';

import { fetchMovieById } from 'components/api/api';

import styles from '../MovieDetails/movieDetails.module.scss';

const MovieDetails = () => {
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { data } = await fetchMovieById(id);
        setMovies(data);
      } catch ({ response }) {
        console.log(response.data.massage);
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
      <button className={styles.btn} onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className={styles.details}>
        <div className={styles.poster}>
          <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
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
        <Link to={`cast`} className={styles.link}>
          Cast
        </Link>
        <Link to={`reviews`} className={styles.link}>
          Reviews
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetails;
