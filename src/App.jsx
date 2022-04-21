import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NetworkProvider from "./components/api/ContextApi";
import Login from "./components/auth/Login";
import Home from "./Pages/Home";
import Navbar from "./Pages/navbar/Navbar";
import CustomRoutes from "./routes/CustomRoutes";

const App = () => {
  return (
    <NetworkProvider>
      <BrowserRouter>
        <Navbar />
        {/* one way */}
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes> */}
        {/* other way */}
        <CustomRoutes />
      </BrowserRouter>
      
    </NetworkProvider>
  );
};

export default App;
 