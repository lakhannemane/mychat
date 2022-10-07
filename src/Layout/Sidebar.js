import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout, AiOutlineDashboard } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { TbClipboardList } from "react-icons/tb";

const Sidebar = () => {
  return (
    <div className="sidebar-logo-section chativa-bg-primary">
      <div className="logo-section">
        <p className="logo text-uppercase text-white chativa-fw-7 ">Chat</p>
      </div>

      <div className="menu-icon text-white d-flex flex-column justify-content-between ">
        <ul className="ul nav-list list-unstyled">
          <li className="nav-item">
            <a href="/" className="nav-link active ">
              <div className="item d-flex flex-column align-items-center  ">
                <AiOutlineDashboard className="chativa-fs-titles  mb-2" />
                <p className="chativa-fs-a">Dashbord</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <BsChatDots className="chativa-fs-titles  mb-2" />{" "}
                <p className="chativa-fs-a">Chats</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <TbClipboardList className="chativa-fs-titles  mb-2" />
                <p className="chativa-fs-a">Activity</p>
              </div>
            </a>
          </li>
        </ul>

        <ul className="ul nav-list list-unstyled">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <IoSettingsOutline className="chativa-fs-titles  mb-2" />
                <p className="  chativa-fs-a">Setting</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <BiUserCircle className="chativa-fs-titles  mb-2 mb-2" />
                <p className="  chativa-fs-a">Profile</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <AiOutlineLogout className="chativa-fs-titles  mb-2" />
                <p className="  chativa-fs-a">Log Out</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
