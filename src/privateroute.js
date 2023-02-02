import React from "react";
import { Navigate, Route, Routes } from "react-router";
import { Dashboard } from "./components/login-api/dashboard/dashboard";

export const PrivateRoute = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to={"/dashboard"} />}></Route>
        <Route path="/login" element={<Navigate to={"/dashboard"} />}></Route>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/property" element={<Property />} */}
      </Routes>
    </div>
  );
};
