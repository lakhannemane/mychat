import React from "react";
import Sidebar from "../Layout/Sidebar";

const MainWraper = (Component) => {
    return (props) => {
        return (
            <div className="d-flex w-100" style={{ height: "880px" }}>
                <Sidebar style={{ minWidth: "6%", height: "100%" }} />

                <Component style={{ width: "95%" }} />
            </div>
        );
    };
};

export default MainWraper;
