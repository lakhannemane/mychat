import React from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineLogout, AiOutlineDashboard } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { BsChatDots } from "react-icons/bs";
import { TbClipboardList } from "react-icons/tb";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDynamicFeed } from "react-icons/md";
import axios from "axios";

const Sidebar = () => {
  const navigate = useNavigate();

  const goLoginPage = async () => {
    const response = await axios.post(
      "https://gmb.prometteur.in:3330/users/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      }
    );
    if (response.status === 200) {
      navigate("/");
      localStorage.clear();
    } else {
      alert("try again");
    }
  };
  return (
    <div className="sidebar-logo-section chativa-bg-primary">
      <div className="logo-section">
        <p className="logo text-uppercase text-white chativa-fw-7 ">Chat</p>
      </div>

      <div className="menu-icon  d-flex flex-column justify-content-between ">
        <ul className="ul nav-list list-unstyled">
          <li className="nav-item">
            <NavLink to="/dashbord" className="nav-link  ">
              <div className="item d-flex flex-column align-items-center  ">
                <AiOutlineDashboard className="chativa-icons-sidebar " />
                <p className="icons-title">Dashbord</p>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/chat" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <BsChatDots className="chativa-icons-sidebar " />{" "}
                <p className="icons-title">Chats</p>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/activity" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <TbClipboardList className="chativa-icons-sidebar " />
                <p className="icons-title">Activity</p>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Feed" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <MdDynamicFeed className="chativa-icons-sidebar " />
                <p className="icons-title">Feed</p>
              </div>
            </NavLink>
          </li>
        </ul>

        <ul className="ul nav-list list-unstyled">
          <li className="nav-item">
            <NavLink to="/setting" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <IoSettingsOutline className="chativa-icons-sidebar " />
                <p className=" icons-title">Setting</p>
              </div>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <BiUserCircle className="chativa-icons-sidebar " />
                <p className=" icons-title">Profile</p>
              </div>
            </NavLink>
          </li>
          <li className="nav-item " onClick={() => goLoginPage()}>
            {/* <NavLink to="/logout" className="nav-link"> */}
            <div className="d-flex flex-column align-items-center">
              <AiOutlineLogout className="chativa-icons-sidebar " />
              <p className="  icons-title">Log Out</p>
            </div>
            {/* </NavLink> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
