import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCastMovies } from 'components/api/api';

import styles from '../Cast/cast.module.scss';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const { data } = await fetchCastMovies(id);
        setCast(data.cast);
      } catch ({ response }) {
        console.log(response.data.massage);
      }
    };
    fetchCast(id);
  }, [id]);

  const castList = cast.map(({ cast_id, profile_path, name, character }) => {
    return (
      <li key={cast_id}>
        <img
          className={styles.castImg}
          src={
            profile_path === null
              ? 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png'
              : `https://image.tmdb.org/t/p/w500${profile_path}`
          }
          alt=""
        />
        <p>Name: {name}</p>
        <p>Character: {character}</p>
      </li>
    );
  });

  return (
    <div className={styles.castContainer}>
      <ul className={styles.castList}>{castList}</ul>
    </div>
  );
};

export default Cast;
