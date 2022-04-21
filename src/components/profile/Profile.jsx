import React from 'react'
import Sidebar from './Sidebar'
import Styles from "./profile.module.css";
import MainContent from './MainContent';

const Profile = () => {
  return (
      <section id={Styles.profileBlock}>
          <article>
              <Sidebar />
              <MainContent />
          </article>
    </section>
  )
}

export default Profile