import React from "react";

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
                <i class="fa-regular fa-gauge chativa-fs-titles mb-2"></i>
                <p className="chativa-fs-a">Dashbord</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-regular fa-comment-dots chativa-fs-titles mb-2"></i>
                <p className="chativa-fs-a">Chats</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-regular fa-clipboard-list   chativa-fs-titles mb-2"></i>
                <p className="  chativa-fs-a">Activity</p>
              </div>
            </a>
          </li>
        </ul>

        <ul className="ul nav-list list-unstyled">
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-regular fa-circle-user  chativa-fs-titles mb-2"></i>
                <p className="  chativa-fs-a">Profile</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-regular fa-circle-user  chativa-fs-titles mb-2"></i>
                <p className="  chativa-fs-a">Profile</p>
              </div>
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              <div className="d-flex flex-column align-items-center">
                <i class="fa-regular fa-arrow-right-from-bracket   chativa-fs-titles mb-2"></i>
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
