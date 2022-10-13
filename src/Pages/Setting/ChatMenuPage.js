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

const ChatMenuPage = ({ userData, setUserData }) => {
    const [portalActive, setPortalActive] = useState({ media: "google" });

    return (
        <div className="recent-user-section chativa-bg-recent" >
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
                            <div
                                className={
                                    portalActive.media === "facebook"
                                        ? "new-item position-relative"
                                        : " one-portal position-relative  chativa-primary "
                                }
                                onClick={() => setPortalActive({ media: "facebook" })}
                            >
                                <div className="portal chativa-br d-flex align-items-center justify-content-center">
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
                        <li className="tab-list-item chativa-fs-a chativa-fw-5"><MdOutlineStore className="fs-3 me-4 my-2" /> Info</li>
                        <li className="tab-list-item chativa-fs-a chativa-fw-5"><MdOutlineDesignServices className="fs-3 me-4 my-2" />Services</li>
                        <li className="tab-list-item chativa-fs-a chativa-fw-5"><IoBasketOutline className="fs-3 me-4 my-2" /> Products</li>
                        <li className="tab-list-item chativa-fs-a chativa-fw-5"><GoSettings className="fs-3 me-4 my-2" /> Bussiness Setting</li>
                    </ul>
                </div>

                {/* recent users */}
                {/* <div
                    className="recent w-100 position-relative"
                    style={{ top: "-15px" }}
                >
                    <div className="recent-title-section">
                        <p className="chativa-fs-b chativa-fw-5 chativa-secondary"></p>
                    </div>

                    {portalActive.media === "google"
                        ? "Google"
                        : portalActive.media === "linkdein"
                            ? "linkdain"
                            : portalActive.media === "Instagram"
                                ? "linkdain"
                                : portalActive.media === "facebook"
                                    ? "linkdain"
                                    : ""}
                </div> */}
            </div>
        </div>
    );
};

export default ChatMenuPage;
