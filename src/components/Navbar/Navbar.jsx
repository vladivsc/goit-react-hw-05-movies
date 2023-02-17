import { NavLink } from 'react-router-dom';

import styles from '../Navbar/navbar.module.scss';

import items from "./items";

const Navbar = ()=> {
  const elements = items.map(({id, text, link})=> <li key={id} className={styles.item}>
    <NavLink className={styles.link} to={link}>{text}</NavLink>
  </li>)

  return(
    <div className={styles.menu}>
      <ul className={styles.menuList}>
    {elements}
  </ul></div>
  )
}

export default Navbar;