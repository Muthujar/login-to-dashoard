import React from "react";
// import "../dashboard/dashboard.css";
import "../navbar/navbar.css";
import search from "../../../../assets/icons/iconsearch.svg";
import person1 from "../../../../assets/IMG/person1.jpg";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import cookie from "react-cookies";

export const Navbar = () => {
  // const Logout = () => {
  //   const [showPopup, setShowPopup] = useState(false);
  // let navigate = useNavigate;

  const handleLogout = () => {
    cookie.remove("Tokeeen");
    window.location.reload();

    Navigate("/");
  };
  const Auth = () => {
    const cookieValue = cookie.load("Tokeeen");
    console.log(cookieValue, "ddj");
    return cookieValue === undefined && false;
  };

  return (
    <div className="navbar-full">
      <div className="nav-flex-class1">
        <div className="nav-flex-class2">
          <div className="dash-square">
            <button className="nav-align-1 dash-square-1">Dashboards</button>
          </div>
          <p className="nav-align-1">Pages</p>
          <p className="nav-align-1">Apps</p>
          <p className="nav-align-1">Layouts</p>
          <p className="nav-align-1">Help</p>
        </div>
        <div className="nav-flex-class3">
          <img className="search-icon" src={search} alt="" />

          <div className="signout-hid">
            <div className="person-div">
              <img className="person1" src={person1} alt="" />{" "}
            </div>

            <div className="logout">
              <div className="logout-2">
                <div className="flex-signout">
                  <img className="person10" src={person1} alt="" />
                  <div className="padd-bottom">
                    <p className="default sout-t1">Max Smith</p>
                    <p className="default sout-t2">max@kt.com</p>
                  </div>
                  <p className="  pro-al">Pro</p>
                </div>

                <p className="default sout-t3 " onClick={handleLogout}>
                  Sign Out
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
