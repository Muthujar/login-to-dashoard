import React from "react";
import "../sidebar/sidebar.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import icon1 from "../../../../assets/icons/icon1.svg";
import icon2 from "../../../../assets/icons/icon2.svg";
import icon3 from "../../../../assets/icons/icon3.svg";
import icon4 from "../../../../assets/icons/icon4.svg";
import icon5 from "../../../../assets/icons/icon5.svg";
import icon6 from "../../../../assets/icons/icon6.svg";
import icon7 from "../../../../assets/icons/icon7.svg";
import icon8 from "../../../../assets/icons/icon8.svg";
import icon9 from "../../../../assets/icons/icon9.svg";


// import icon1 from "../../../assets/icons/icon1.svg";
// import icon2 from "../../../assets/icons/icon2.svg";

export const Sidebar = () => {
  return (
    <div className="sidebar-full">
      <div className="sidebar-start">
        <img
          className="side-logo-1"
          alt=""
          src="https://preview.keenthemes.com/keen/demo1/assets/media/logos/default-dark.svg"
        />
        <div className="icon-box-1">
          <MdOutlineArrowBackIosNew />
          <MdOutlineArrowBackIosNew className="icon-1" />
        </div>
      </div>
      <div>
        <div className="sidebar-con1">
          <img alt="" className="icon-align" src={icon1} />
          <p className="color-white sideText0">Dashboards</p>
          <MdOutlineExpandMore className="color-type-2" />
        </div>
        <p className="color-type-1">PAGES</p>
        <div>
          <div className="flex-class">
            <img alt="" className="icon-align" src={icon2} />
            <p className="sideText">User Profile</p>
            <MdOutlineExpandMore className="color-type-3" />
          </div>
          <div className="flex-class">
            <img alt="" className="icon-align" src={icon3} />
            <p className="sideText">Account</p>
            <MdOutlineExpandMore className="color-type-3" />
          </div>
          <div className="flex-class">
            <img alt="" className="icon-align" src={icon4} />
            <p className="sideText">Authentication</p>
            <MdOutlineExpandMore className="color-type-3" />
          </div>
          <div className="flex-class">
            <img alt="" className="icon-align" src={icon5} />
            <p className="sideText">Corporate</p>
            <MdOutlineExpandMore className="color-type-3" />
          </div>

          <div className="flex-class">
            <img alt="" className="icon-align" src={icon6} />
            <p className="sideText">Social</p>
            <MdOutlineExpandMore className="color-type-3" />
          </div>
          <div className="flex-class">
            <img alt="" className="icon-align" src={icon9} />
            <p className="sideText">Blog</p>
            <MdOutlineExpandMore className="color-type-3" />
          </div>
          <div className="flex-class">
            <img alt="" className="icon-align" src={icon7} />
            <p className="sideText">Careers</p>
            <MdOutlineExpandMore className="color-type-3" />
          </div>
          <div className="flex-class">
            <img alt="" className="icon-align" src={icon8} />
            <p className="sideText">Utilities</p>
            <MdOutlineExpandMore className="color-type-3" />
          </div>
        </div>
      </div>
    </div>
  );
};
