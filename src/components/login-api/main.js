import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import cookie from "react-cookies";
// import { useCookies } from "react-cookie";
// import bgimage from "./img/bgimage.jpg";
import "./main.css";
import { DisplayPrice } from "../utils";
// import Cookies from "universal-cookie";

export const Main = ({ setCookie, cookies }) => {
  // const [cookies, setCookie, getCookie] = useCookies(["cookie-name"]);
  let navigate = useNavigate();

  const [loginDetails, setLoginDetails] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
    console.log(loginDetails, "ggogog");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(handleErr(loginDetails));
    Axios.post(`http://3.16.194.5:8000/api/v1/auth/host/signin`, {
      email: loginDetails.userName,
      password: loginDetails.password,
    }).then((res) => {
      console.log(res, "ddd");
      if (!res.data.success) {
        alert(res.data.message);
        // setError(handleErr(loginDetails));
      } else {
        const cookieStore = cookie.save(
          "Tokeeen",
          JSON.stringify(res.data.data.token)
        );
        window.location.reload();

        // navigate("/dashboard");
        console.log(cookieStore, "Tokeeen");
      }
    });
  };

  const handleErr = (loginDetails) => {
    let error = {};
    if (!loginDetails.userName) {
      error.userName = "*Enter Valid Username";
    }
    if (!loginDetails.password) {
      error.password = "*Enter valid password";
    }

    return error;
  };

  //   useEffect(() => {
  //     if (
  //       Object.keys(error).length === 0 &&
  //       error.userName !== "" &&
  //       error.password !== ""
  //     ) {
  //         alert("log in done");
  //       navigate("/login");
  //     }
  //   }, [error]);

  return (
    <div className="wrapper">
      <div className="container">
        <div className="loginbox">
          <div className="firstbox">
            <h1 className="text1">Sign In</h1>
            <div className="icon_box">
              {" "}
              <i className="fa fa-facebook-square topicon1" />
              <i className="fa fa-google-plus-square topicon2" />
              <i className="fa fa-twitter-square topicon3" />
            </div>
          </div>
          <div className="p-20">
            <div className="relative">
              <i className="fa fa-user icon1" />
              <input
                className="put1"
                type="email"
                placeholder="username"
                name="userName"
                value={loginDetails.userName}
                onChange={handleChange}
              />
              {error.userName && <p className="errormsg1">{error.userName}</p>}
            </div>
            <br />
            <div className="relative">
              <i className="fa fa-key icon1" />
              <input
                className="put2"
                type="password"
                placeholder="password"
                name="password"
                value={loginDetails.password}
                onChange={handleChange}
              />
            </div>
            {error.password && <p className="errormsg2">{error.password}</p>}
          </div>

          <div className="center1">
            <input className="put3" checked="checked" type="checkbox" />{" "}
            <label className="color-white">Remember me</label>
            <button type="button" onClick={handleSubmit} className="button1">
              Login
            </button>
          </div>
          <p className="bottom1">
            <span className="color-white">Don't have an account? </span>{" "}
            <span className="color-blue-bottom ">
              Sign Up <br></br>Forgot your password?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
