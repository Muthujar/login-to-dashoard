import "./App.css";
import { Main } from "./components/login-api/main";
import { Route, Routes } from "react-router";
// import { redirect } from "react-router-dom";
import { Dashboard } from "./components/login-api/dashboard/dashboard";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import cookie from "react-cookies";
import { PrivateRoute } from "./privateroute";
import { PublicRoute } from "./publicRoute";
import { isLoogedIn } from "./components/utils";

function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      {isLoogedIn() ? <PrivateRoute /> : <PublicRoute />}
    </div>
  );
}

export default App;
