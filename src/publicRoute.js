import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Dashboard } from "./components/login-api/dashboard/dashboard";
import { Main } from "./components/login-api/main";

export const PublicRoute = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />

        <Route exact path="/login" element={<Main />} />
        <Route
          exact
          path="/dashboard"
          element={<Navigate to={"/login"} />}
        ></Route>
      </Routes>
    </div>
  );
};
