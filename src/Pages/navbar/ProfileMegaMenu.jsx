import React from "react";
import { Link } from "react-router-dom";
import Styles from "./navbar.module.css";

const ProfileMegaMenu = () => {
  return (
    <div className={Styles.ProfileMenu}>
      <h4>Welcome</h4>
      <p>To access account and manage orders</p>
      <button>
        <Link to="/login" style={{ color: "#ee5f73" }}>
          LOGIN/SIGNUP
        </Link>
      </button>
      <ul>
        <li>Orders</li>
        <li>Wishlist </li>
        <li>Gift Cards</li>
        <li> Contact Us </li>
        <li>
          Myntra Insider <sup>NEW</sup>
        </li>
      </ul>
      <ul>
        <li>Myntra Credit </li>
        <li>Coupons</li>
        <li> Saved Cards </li>
        <li>Saved Addresses</li>
      </ul>
    </div>
  );
};

export default ProfileMegaMenu;
