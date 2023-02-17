import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from '../MoviesList/moviesList.module.scss';

const MoviesList = ({ results }) => {
  const location = useLocation();
  const elements = results.map(({ id, title }) => (
    <li key={id} className={styles.item}>
      <Link
        className={styles.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <p>{title}</p>
      </Link>
    </li>
  ));

  return <div className={styles.container}>{elements}</div>;
};

export default MoviesList;

MoviesList.defaultProps = {
  results: [],
};

MoviesList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
