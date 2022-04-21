import React from 'react'
import { Link } from 'react-router-dom';
import Styles from "./navbar.module.css";

 
const Logo = () => {
  return <div className={Styles.logoBlock}>
    <Link to='/'>walmart</Link>
  </div>;
}

export default Logo