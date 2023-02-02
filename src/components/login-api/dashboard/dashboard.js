import React from "react";
import "../dashboard/dashboard.css";
import { Content } from "./content/content";
import { Navbar } from "./navbar/navbar";
import { Sidebar } from "./sidebar/sidebar";

export const Dashboard = () => {
  return (
    <div className="flex-dash">
      <div className="sidebar-layout">
        <Sidebar />
      </div>
      <div className="next-side">
        <div>
          <Navbar />
        </div>
        <br></br>
        <Content />
      </div>
    </div>
  );
};
