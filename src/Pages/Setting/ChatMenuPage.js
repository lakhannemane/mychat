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
                {/* poratls section */}

                <div className="poratls-section d-flex justify-content-between w-100 portal-scrollbar">
                    <ul className="list-unstyled d-flex justify-content-between align-items-center w-100">
                        <li className="nav-item">
                            <div
                                className={
                                    portalActive.media === "google"
                                        ? "new-item position-relative "
                                        : " one-portal position-relative   chativa-primary "
                                }
                                onClick={() => setPortalActive({ media: "google" })}
                            >
                                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                                    <i className="fa-brands fa-google "></i>
                                </div>
                            </div>
                        </li>

                        <li className="nav-item">
                            <div
                                className={
                                    portalActive.media === "linkdein"
                                        ? "new-item position-relative"
                                        : " one-portal position-relative chativa-primary"
                                }
                                onClick={() => setPortalActive({ media: "linkdein" })}
                            >
                                <div className="portal  chativa-br d-flex align-items-center justify-content-center">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div
                                className={
                                    portalActive.media === "Instagram"
                                        ? "new-item position-relative"
                                        : " one-portal position-relative  chativa-primary"
                                }
                                onClick={() => setPortalActive({ media: "Instagram" })}
                            >
                                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                                    <i className="fa-brands fa-instagram"></i>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <div>
                                <div className="portal chativa-br d-flex align-items-center justify-content-center" data-toggle="tooltip" data-placement="top" title="Add new Portal">
                                    <BsPlusLg />
                                </div>
                            </div>
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
