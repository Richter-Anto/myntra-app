import React from 'react'
import MenMegaMenu from './MenMegaMenu';
import Styles from "./navbar.module.css";

const Menu = () => {
  return (
    <div className={Styles.menuBlock}>
      <nav>
        <ul>
          <li>
            <a href="#">MEN</a>
            <div className={ Styles.dropDown}>
              <MenMegaMenu />
            </div>
          </li>
          <li>
            <a href="#">WOMEN</a>
          </li>
          <li>
            <a href="#">KIDS</a>
          </li>
          <li>
            <a href="#">HOME & LIVING</a>
          </li>
          <li>
            <a href="#">BEAUTY</a>
          </li>
          <li>
            <a href="#">
              STUDIO <sup>NEW</sup>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu