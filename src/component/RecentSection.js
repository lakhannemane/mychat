import React from "react";
import { NavLink } from "react-router-dom";
import PortalPages from "./SectionsPages/PortalPages";


const RecentSection = () => {
  return (
    <div className="recent-user-section chativa-bg-recent ">
      {/* title */}

      <div className="mx-1">
        <div className="recent-title">
          <h5 className="title  chativa-fw-5" style={{ fontSize: "22px" }}>
            Chats
          </h5>
        </div>
        {/* serchbar */}
        <div className="serchbar position-relative w-100">
          {/* icon */}
          <div className="icon">
            <p className="search-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </p>
          </div>
          {/* input form */}
          <div className="form-input ">
            <form action="search-user">
              <input
                type="text"
                placeholder="search user here"
                className="w-100 serchbar-input chativa-br "
              />
            </form>
          </div>
        </div>

        {/* poratls section */}

        <div className="poratls-section d-flex justify-content-between w-100">
          <ul className="list-unstyled d-flex justify-content-between align-items-center w-100">
            <li className="nav-item">
              <NavLink className="portal-name">
                <div className="one-portal position-relative">
                  <div className="google-message-notificaion">
                    <p className="count-number text-white chativa-fw-5">5</p>
                  </div>
                  <div className="portal chativa-br d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-google "></i>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="portal-name">
                <div className="one-portal position-relative">
                  <div className="google-message-notificaion">
                    <p className="count-number text-white chativa-fw-5">7</p>
                  </div>
                  <div className="portal  chativa-br d-flex align-items-center justify-content-center">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="portal-name">
                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="portal-name">
                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                  <i class="fa-brands fa-facebook"></i>
                </div>
              </NavLink>
            </li>
          </ul>


          {/* <div className="one-portal position-relative">
            <div className="google-message-notificaion">
              <p className="count-number text-white chativa-fw-5">7</p>
            </div>
            <div className="portal  chativa-br d-flex align-items-center justify-content-center">
              <i class="fa-brands fa-linkedin-in"></i>
            </div>
          </div>

          <div className="portal chativa-br d-flex align-items-center justify-content-center">
            <i class="fa-brands fa-instagram"></i>
          </div>

          <div className="portal chativa-br d-flex align-items-center justify-content-center">
            <i class="fa-brands fa-facebook"></i>
          </div> */}
        </div>

        <PortalPages />
      </div>
    </div>
  );
};

export default RecentSection;
