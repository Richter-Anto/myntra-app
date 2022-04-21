//navigate and history.pushstate is explained
// import React, { useState } from 'react'
// import { useNavigate} from "react-router-dom"

// const Login = () => {
//   let Navigate = useNavigate();
//   let [auth, setAuth] = useState(true);

//   let profilePage = () => {
//     if (auth === true) {
//       // history.pushState("/")
//       Navigate("/");
//     }
//   }

//   return (
//     <div>
//       <button onClick={profilePage}>Login</button>
//     </div>
//   )
// }

// export default Login



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./auth.module.css";

const Login = () => {
  let Navigate = useNavigate();
  let [auth, setAuth] = useState(true);
  

  let profilePage = () => {
    if (auth === true) {
      // history.pushState("/")
      Navigate("/");
    }
  };

  return (
    <div>
      <section className={Styles.loginPage}>
        <article>
          <h2>Login or Signup</h2>
          <input type="number" placeholder="Mobile number" required />
          <p>
            By continuing, I agree to the <a href="#">Terms of Use</a> &{" "}
            <a href="#">Privacy Policy</a>
          </p>
          <button>CONTINUE</button>
          <p>
            Have troubble logging in? <a href="#">Get help</a>
          </p>
        </article>
      </section>
      <button onClick={profilePage}>Login</button>
    </div>
  );
};

export default Login;