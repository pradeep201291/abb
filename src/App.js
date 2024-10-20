import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/signUp";
import Description from "./Components/Description/Description";
import Dashboard from "./Components/Dashboard/Dashboard";
import { Home } from "./Components/Home/home";
import React, { useEffect } from "react";

function App(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.parse(sessionStorage.getItem("isUserLoggedIn"))) {
      if (window.location.pathname === "/dashboard") {
        navigate("/dashboard");
      } else if (window.location.pathname === "/description") {
        navigate("/description");
      } else if (window.location.pathname === "/") {
        navigate("/dashboard");
      } else if (window.location.pathname === "") {
        navigate("/dashboard");
      } else {
        if (window.location.pathname === "/dashboard") {
          navigate("/");
        }
      }
    }
  });
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
