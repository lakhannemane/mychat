import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { IoBasketOutline } from "react-icons/io5";
import { MdOutlineDesignServices, MdOutlineStore } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Users = [
  {
    id: 1,
    name: "Mark Zukarberg",
    message: "how are you",
  },
  {
    id: 2,
    name: "Mark Messar",
    message: "how are you",
  },
  {
    id: 3,
    name: "Genral",
    message: "how are you",
  },
  {
    id: 4,
    name: "Alex deo",
    message: "how are you",
  },
  {
    id: 5,
    name: "dwen Brawo",
    message: "how are you",
  },
  {
    id: 6,
    name: "Msd ",
    message: "how are you",
  },
  {
    id: 7,
    name: "Shreyas Iyyer",
    message: "how are you",
  },
  {
    id: 8,
    name: "Akshay Kumar",
    message: "how are you",
  },
];

const ChatMenuPage = ({ activeSetting, setActiveSetting }) => {
  const [portalActive, setPortalActive] = useState({ media: "google" });

  console.log(activeSetting);

  return (
    <div className="recent-user-section chativa-bg-recent">
      {/* title */}

      <div className="recentPanel">
        <div className="poratls-section d-flex justify-content-between w-100 ">
          <ul className="list-unstyled  recent-portal  align-items-center w-100">
            <li>
              <span>5</span>
              <i className="fa-brands fa-google "></i>
            </li>
            <li>
              {/* <span>5</span> */}
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
            <li>
              {/* <span>5</span> */}
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              {/* <span>5</span> */}
              <i className="fa-brands fa-facebook"></i>
            </li>
          </ul>
        </div>
        <hr />

        {/* list for services */}

        <div className="menu-options">
          <ul className="list-unstyled tab-list">
            <li
              className={
                activeSetting.name === "info"
                  ? "active-tab tab-list-item chativa-fs-a chativa-fw-5 "
                  : "tab-list-item chativa-fs-a chativa-fw-5   "
              }
              onClick={() => setActiveSetting({ id: 1, name: "info" })}
            >
              {" "}
              <span className="info-icon-wraper">
                <MdOutlineStore className="info-bar-icon " />{" "}
              </span>
              Info
            </li>
            <li
              className={
                activeSetting.name === "services"
                  ? "active-tab tab-list-item chativa-fs-a chativa-fw-5  "
                  : "tab-list-item chativa-fs-a chativa-fw-5 "
              }
              onClick={() => setActiveSetting({ id: 2, name: "services" })}
            >
              {" "}
              <span className="info-icon-wraper">
                {" "}
                <MdOutlineDesignServices className="info-bar-icon" />
              </span>
              Services
            </li>
            <li
              className={
                activeSetting.name === "product"
                  ? "active-tab tab-list-item chativa-fs-a chativa-fw-5  "
                  : "tab-list-item chativa-fs-a chativa-fw-5 "
              }
              onClick={() => setActiveSetting({ id: 3, name: "product" })}
            >
              {" "}
              <span className="info-icon-wraper">
                <IoBasketOutline className="info-bar-icon" />
              </span>{" "}
              Products
            </li>
            <li
              className={
                activeSetting.name === "bussinesSetting"
                  ? "active-tab tab-list-item chativa-fs-a chativa-fw-5  "
                  : "tab-list-item chativa-fs-a chativa-fw-5 "
              }
              onClick={() =>
                setActiveSetting({ id: 4, name: "bussinesSetting" })
              }
            >
              {" "}
              <span className="info-icon-wraper">
                <GoSettings className="info-bar-icon" />
              </span>{" "}
              Bussiness Setting
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChatMenuPage;
