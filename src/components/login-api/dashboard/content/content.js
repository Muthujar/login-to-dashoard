import React from "react";
// import "../dashboard/dashboard.css";
import "../content/content.css";
import { MdOutlineExpandMore } from "react-icons/md";
import icon10 from "../../../../assets/icons/icon10.svg";
import icondots from "../../../../assets/icons/icondots.svg";
import icon11 from "../../../../assets/icons/icon11.svg";
import icon12 from "../../../../assets/icons/icon12.svg";
import icon13 from "../../../../assets/icons/icon13.svg";
import person1 from "../../../../assets/IMG/person1.jpg";
import person2 from "../../../../assets/IMG/person2.jpg";
import person3 from "../../../../assets/IMG/person3.jpg";
import person4 from "../../../../assets/IMG/person4.jpg";
import chart from "../../../../assets/IMG/chart.png";
import icon14 from "../../../../assets/icons/icon14.svg";
import { GrOnedrive } from "react-icons/gr";
import { CiBank } from "react-icons/ci";
import { ImNewspaper } from "react-icons/im";
import { TfiMobile } from "react-icons/tfi";
import { TbBrandTelegram } from "react-icons/tb";
import { GrEmptyCircle } from "react-icons/gr";
import arrowup from "../../../../assets/icons/arrowup.svg";

export const Content = () => {
  const Data = [
    {
      id: 1,
      photo: person1,
      name: "Guy Hawkins",
      country: "Haiti",
      percent: "78.34%",
    },
    {
      id: 2,
      photo: person2,
      name: "Jane Cooper",
      country: "Monaco",
      percent: "63.83%",
      chart: "",
    },
    {
      id: 3,
      photo: person3,
      name: "Jacob Jones",
      country: "Poland",
      percent: "92.56%",
      chart: "",
    },
    {
      id: 4,
      photo: person4,
      name: "Cody Fishers",
      country: "Mexico",
      percent: "63.08%",
      chart: "",
    },
  ];

  return (
    <div className="content-full">
      <div className="content-start">
        <div className="con-1">
          <h3 className="font-style">Default</h3>
          <p className="font-style1">Home - Dashboards </p>
        </div>
        <div className="flex-class1">
          <button className="button-camp">Select Campaign</button>
          <MdOutlineExpandMore className="button-abs" />
          <div className="plusdiv">
            <img className="plusb" src={icon10} />
          </div>
        </div>
      </div>

      <div className="card-content">
        <div className="flex-class-card">
          <div className=" color-blue card1-uniq card-des1">
            <h1 className="color-white card1-align1 default">69</h1>
            <p className="color-white card1-align2 default ">
              Active Projects in April
            </p>
            <div className="flex-class-card1">
              <p className="color-white card1-align3 default">43 Pending</p>
              <p className="color-white card1-align4 default">72%</p>
            </div>{" "}
            <progress id="file" value="70" max="100">
              {" "}
              70 %{" "}
            </progress>
            <div className="underline"></div>
          </div>

          <div className="card-des2">
            <div className="flex-only-card2">
              {" "}
              <p className="default card2text1 ">$ </p>
              <p className=" default card2-span">69,700</p>
              <p className="card2-text2 default">
                <span>
                  <img src={arrowup} className="arrowup default" />
                </span>
                2.2%
              </p>
            </div>
            <p className="default card2-text3 ">Projects Earnings in April</p>
            <div className="flex-card2">
              <GrEmptyCircle className="circle-icon" />
              <div className="center2-align">
                <div className="flex-only-11 card3-al ">
                  {" "}
                  <p className="span1">-</p>
                  <p className="default card2-text-text-2">Leaf CRM</p>
                </div>
                <div className="flex-only-11 c">
                  {" "}
                  <span className="span2">-</span>
                  <p className="default card2-text-text-2">Mivy App</p>
                </div>
                <div className="flex-only-11">
                  {" "}
                  <span className="span3">-</span>
                  <p className="default card2-text-text-2">Others</p>
                </div>
              </div>
              <div>
                <p className="default card2-amount">$7,660</p>
                <p className="default card2-amount">$2,820</p>
                <p className="default card2-amount">$45,257</p>
              </div>
              <div className="button-side">
                <button className="demo-button">Demos</button>
                <button className="help-button">Help</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-class-card ">
          <div className="card-des1">
            <div className="flex-only">
              {" "}
              <p className="card3-text1 ">External Links</p>
              <img className="dots" src={icondots} />
            </div>
            <div className="flex-only card3-align dot-card3">
              {" "}
              <a className="card3-text2" href="#">
                Avg. Client Rating
              </a>
              <img className="icon11" src={icon11} />
            </div>
            <div className="flex-only card3-align dot-card3">
              {" "}
              <a className="card3-text2" href="#">
                Instagram Followers
              </a>
              <img className="icon11" src={icon11} />
            </div>
            <div className="flex-only card3-align ">
              {" "}
              <a className="card3-text2" href="#">
                Google Ads CPC
              </a>
              <img className="icon11" src={icon11} />
            </div>
          </div>
          <div className="card-des2">
            <div className="flex-only">
              {" "}
              <p className="card4-text1 ">Highlights</p>
            </div>
            <div className="flex-only card4-align dot-card3">
              {" "}
              <a className="card4-text2" href="#">
                Avg. Client Rating
              </a>
              <div className="only-flex-card4">
                <img className="icon12" src={icon12} />
                <p className="default p-card4-left">
                  7.8 <span className="span-10">/10</span>
                </p>
              </div>
            </div>
            <div className="flex-only card4-align dot-card3">
              {" "}
              <a className="card4-text2" href="#">
                Avg.Quotes{" "}
              </a>
              <div className="only-flex-card4">
                <img className="icon13" src={icon13} />
                <p className="default p-card4-left">730</p>
              </div>
            </div>
            <div className="flex-only card4-align ">
              {" "}
              <a className="card4-text2" href="#">
                Avg. Agent Earnings{" "}
              </a>
              <div className="only-flex-card4">
                <img className="icon12" src={icon12} />
                <p className="default p-card4-left">$2,309</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-des5">
          <div className="flex-3">
            <div>
              <p className="card5-text1">Authors Achievements</p>
              <p className="card5-text2">Avg. 69.34% Conv. Rate</p>
            </div>
            <img className="dots-3" src={icondots} />
          </div>

          <div className="flex-card5-start">
            <div className="author-icons">
              <GrOnedrive className="author-icon-1" />
              <p className="posit-text1">SaaS</p>
            </div>
            <div className="author-icons0">
              <CiBank className="author-icon-2" />
              <p className="posit-text2">Crypto</p>
            </div>
            <div className="author-icons0">
              <ImNewspaper className="author-icon-2" />
              <p className="posit-text2">Social</p>
            </div>
            <div className="author-icons0">
              <TfiMobile className="author-icon-2" />
              <p className="posit-text2">Mobile</p>
            </div>
            <div className="author-icons0">
              <TbBrandTelegram className="author-icon-2" />
              <p className="posit-text2">Others</p>
            </div>
          </div>
          <div>
            <table className="table-full">
              <thead>
                <tr className="row-head">
                  <td className="">AUTHOR</td>
                  <td>CONV</td>
                  <td>CHART</td>
                  <td>VIEW</td>
                </tr>
              </thead>
              <tbody>
                {Data.map((list) => (
                  <tr key={list.id}>
                    <td className="flex-table1">
                      <img className="author-photo" alt="'" src={list.photo} />
                      <div className="txt-td1">
                        <p className="txt-table">{list.name} </p>

                        <p className="table-span2"> {list.country}</p>
                      </div>
                    </td>
                    <td className="percent1">{list.percent}</td>
                    <td>
                      <img className="chart-align" src={chart} />
                    </td>
                    <td>
                      <img className="icon14" src={icon14} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="card-des6">
          <h1>ddd</h1>
        </div>
      </div>
    </div>
  );
};
