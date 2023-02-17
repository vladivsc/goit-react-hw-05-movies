import { Link } from 'react-router-dom';
import styles from '../NotFound/notFound.module.scss';

const NotFound = () => {
  return (
    <>
      <h2 className={styles.notFound}>Page Not Found</h2>
      <Link className={styles.linkNotFound} to="/">
        To Home page
      </Link>
    </>
  );
};

export default NotFound;
