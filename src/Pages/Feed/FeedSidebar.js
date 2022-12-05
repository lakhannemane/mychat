import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
    MdOutlineLocalActivity,
    MdOutlineTipsAndUpdates,
} from "react-icons/md";

const ActivitySidebar = ({ setMenu, menu }) => {
    return (
        <div className="recent-user-section" style={{ background: "#F5F5F5" }}>
            <div className="recentPanel ">
                <div className="menu-options">
                    <ul className="list-unstyled tab-list">
                        {/* <li

                        className={
                            menu.name === "activity"
                                ? "active-tab tab-list-item chativa-fs-a chativa-fw-5 "
                                : "tab-list-item chativa-fs-a chativa-fw-5   "
                        }
                        onClick={() => setMenu({ id: 2, name: "activity" })}
                    >
                        <span className="info-icon-wraper">
                            {" "}
                            <MdOutlineLocalActivity className="info-bar-icon" />
                        </span>

                        Activity
                    </li> */}
                        <li
                            className={
                                menu.name === "jobs"
                                    ? "active-tab tab-list-item chativa-fs-a chativa-fw-5 "
                                    : "tab-list-item chativa-fs-a chativa-fw-5   "
                            }
                            onClick={() => setMenu({ id: 1, name: "jobs" })}
                        >
                            <span className="info-icon-wraper">
                                <MdOutlineTipsAndUpdates className="info-bar-icon" />
                            </span>
                            Job Updates
                        </li>
                    </ul>

                    <div className="add-feed-button">
                        <ul className="list-unstyled">
                            <li>
                                <AiOutlinePlusCircle />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActivitySidebar;
