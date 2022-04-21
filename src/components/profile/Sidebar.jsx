import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./profile.module.css"

const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <ul>
        <li>
          <Link to="/profile/update-profile">Update Profile</Link>
        </li>
        <li>
          <Link to="/profile/upload-photo">Upload Photo</Link>
        </li>
        <li>
          <Link to="/profile/settings">Settings</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar