import React from 'react'
import { Outlet } from 'react-router-dom';
import Styles from "./profile.module.css";


const MainContent = () => {
  return (
    <div className={Styles.mainContent}>
      <Outlet />
    </div>
  )
}

export default MainContent