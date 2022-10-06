import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar-logo-section bg-primary ">
      <div className="logo-section">
        <p className="logo text-uppercase text-white fw-7 ">Chat</p>
      </div>

      <div className="menu-icon text-white d-flex flex-column justify-content-between ">
        <ul className="ul nav-list list-unstyled">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="item d-flex flex-column align-items-center ">
                <i class="fa-solid fa-gauge     sidebar-icon"></i>
                <p className="  paragraph1">Dashbord</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-regular fa-comment-dots    sidebar-icon"></i>
                <p className="  paragraph1">Chats</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-solid fa-clipboard-list     sidebar-icon"></i>
                <p className="  paragraph1">Activity</p>
              </div>
            </a>
          </li>
        </ul>

        <ul className="ul nav-list list-unstyled">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-regular fa-circle-user    sidebar-icon"></i>
                <p className="  paragraph1">Profile</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-regular fa-circle-user    sidebar-icon"></i>
                <p className="  paragraph1">Profile</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-solid fa-arrow-right-from-bracket     sidebar-icon"></i>
                <p className="  paragraph1">Log Out</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
