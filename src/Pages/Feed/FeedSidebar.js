import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import {
    MdOutlineLocalActivity,
    MdOutlineTipsAndUpdates,
} from "react-icons/md";
import AddFeed from "../Setting/Models/AddFeed";
import { SiFreelancer, SiUpwork } from "react-icons/si";
import { Tooltip } from "antd";


const ActivitySidebar = ({ setMenu, menu }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [name, setName] = useState();

    console.log("name", name)

    const [portalActive, setPortalActive] = useState({ media: "upwork" });

    const onHandleSubmitValue = (e) => {
        e.prventDefault();

    };
    return (
        <div className="recent-user-section" style={{ background: "#F5F5F5" }}>
            <div className="recentPanel ">
                {/* serchbar */}
                <div className="serchbar position-relative w-100">
                    {/* icon */}
                    <div className="icon">
                        <p className="search-icon">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </p>
                    </div>
                    {/* input form */}
                    <div className="form-input ">
                        <form action="search-user" onSubmit={onHandleSubmitValue}>
                            <input
                                type="text"
                                placeholder="Search... "
                                className="w-100 serchbar-input chativa-br "
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </form>
                    </div>
                </div>

                {/* poratls section */}

                <div className="poratls-section d-flex justify-content-between w-100 ">
                    <ul className="list-unstyled  recent-portal  align-items-center w-100">
                        <li
                            className={
                                portalActive.media === "upwork"
                                    ? "new-item position-relative "
                                    : " one-portal position-relative   chativa-primary "
                            }
                            onClick={() => setPortalActive({ media: "upwork" })}
                        >

                            <SiUpwork />
                        </li>
                        <li
                            className={
                                portalActive.media === "freelancer"
                                    ? "new-item position-relative"
                                    : " one-portal position-relative chativa-primary"
                            }
                            onClick={() => setPortalActive({ media: "freelancer" })}
                        >

                            <SiFreelancer />
                        </li>

                    </ul>
                </div>
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

                                <Tooltip title="Add Feed" placement="topRight">
                                    <AiOutlinePlusCircle onClick={() => setIsModalOpen(true)} />
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <AddFeed isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    );
};

export default ActivitySidebar;
