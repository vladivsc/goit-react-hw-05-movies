import { NavLink } from 'react-router-dom';

import styles from '../Navbar/navbar.module.scss';

const Navbar = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/movies">
          Movies
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
