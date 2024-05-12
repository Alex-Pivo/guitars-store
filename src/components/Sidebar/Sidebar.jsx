import React from "react";
import styles from "../../styles/sideBar.module.scss"
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return <>
        <div className={styles.sidebar}>
          <div className={styles.title}>CATEGORIES</div>
          <nav>
            <ul className={styles.menu}>
              <li>
                <NavLink
                //  to={`/guitars/{${id}}`} 
                 className={styles.link}>Link</NavLink>
              </li>
              <li>
                <NavLink className={styles.link}>Link</NavLink>
              </li>
              <li>
                <NavLink className={styles.link}>Link</NavLink>
              </li>
            </ul>
          </nav>
        </div>
  </>;
};

export default Sidebar;
