import React from 'react'
import { useRoutes } from "react-router-dom"
import Login from '../components/auth/Login';
import Profile from '../components/profile/Profile';
import Settings from '../components/profile/Settings';
import UpdateProfile from '../components/profile/UpdateProfile';
import UploadPhoto from '../components/profile/UploadPhoto';
import Home from '../Pages/Home';


const CustomRoutes = () => {
    let routes = useRoutes([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
        children: [
          {
            path: "update-profile",
            element: <UpdateProfile />,
          },
          {
            path: "upload-photo",
            element: <UploadPhoto />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ]);
    return routes;
}

export default CustomRoutes;