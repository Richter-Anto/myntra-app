import React from 'react'
import Styles from "./navbar.module.css";
import { FaUser,FaHeart,FaShoppingBag} from 'react-icons/fa'
import ProfileMegaMenu from './ProfileMegaMenu';
import { Link } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <div className={Styles.authMenuBlock}>
      <ul>
        <li>
          <span>
            <FaUser />
          </span>
          <span>
            <Link to="/">Profile</Link>
            <div className={ Styles.profileDropDown}>
              <ProfileMegaMenu />
              </div>
          </span>
        </li>
        <li>
          <span>
            <FaHeart />
          </span>
          <span>
            <a href="#">wishlist</a>
          </span>
        </li>
        <li>
          <span>
            <FaShoppingBag />
          </span>
          <span>
            <Link to='/profile'>Bag</Link>
          </span>
        </li>
      </ul>
    </div>
  );
}

export default AuthMenu