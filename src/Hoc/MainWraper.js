import React from "react";
import Sidebar from "../Layout/Sidebar";

const MainWraper = (Component) => {
  return (props) => {
    return (
      <div className="d-flex w-100 body_wrapper" style={{ height: "880px" }}>
        <Sidebar
          className="sidebar_panel"
          style={{ minWidth: "6%", height: "100%" }}
        />
        <div className="bodyContainer">
          <Component />
        </div>
      </div>
    );
  };
};

export default MainWraper;
