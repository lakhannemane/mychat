import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

import AddFeed from "../Setting/Models/AddFeed";
import { SiFreelancer, SiUpwork } from "react-icons/si";
import { Tooltip } from "antd";
import { BiPencil } from "react-icons/bi";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allAccounts, fetchAccounts } from "../../Store/Slices/Accounts/AccountSlice";
import { GrFacebookOption } from "react-icons/gr";
import { allFeeds, fetchAllFeed, fetchSingleFeed } from "../../Store/Slices/FeedSlice/Feedslice";




const ActivitySidebar = ({ Accounts }) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [element, setElement] = useState();
    const dispatch = useDispatch();
    const [feedActive, setFeedActive] = useState(Accounts.account ? Accounts.account[0] : "")

    let activeElement;
    if (Accounts.account && Accounts.account[0].account === "Google" && !Accounts.account.message) {
        activeElement = Accounts.account[0]
    }
    console.log(activeElement, "active element")

    const allFeedData = useSelector(allFeeds);

    let activeFeed;
    if (allFeedData && allFeedData.feed) {
        activeFeed = allFeedData.feed[0]._id
        console.log(activeFeed, "active feed ==============================================")
    }

    useEffect(() => {
        if (activeElement) {
            dispatch(fetchAllFeed(activeElement._id))
        }
        if (activeFeed) {
            dispatch(fetchSingleFeed(activeFeed))
        }
    }, [activeElement, isModalOpen])


    console.log("=======feed active element=======", feedActive)

    useEffect(() => {
        if (feedActive) {
            dispatch(fetchAllFeed(feedActive._id))
        }
        if (feedActive) {
            dispatch(fetchSingleFeed(activeFeed))
        }
    }, [feedActive, isModalOpen])





    console.log("all feed data ", allFeedData)

    const onHandleSubmitValue = (e) => {
        e.prventDefault();

    };



    const onEditHandler = (number) => {
        setId(number)
        setIsModalOpen(true)
    }

    const addHandler = (IdNumber) => {
        setElement(IdNumber);
        setIsModalOpen(true);
        setId("")
    }




    const ongethandelr = (values) => {
        dispatch(fetchAllFeed(values._id))
        setFeedActive(values)
        // activeElement = values

    }

    const getFeeddataHandler = (data) => {
        dispatch(fetchSingleFeed(data._id))
    }
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
                        {Accounts?.account && Accounts?.account?.map((portal, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={() => ongethandelr(portal)}
                                    className={feedActive && feedActive._id === portal._id ? "new-item position-relative " : !feedActive && activeElement?._id === portal._id ? "new-item position-relative" : "position-relative"}
                                >
                                    {portal.account === "Google" ? <i className="fa-brands fa-google "></i> : portal.account === "Flipkart" ? <i className="fa-brands fa-linkedin-in"></i> : portal.account === "Linkdein" ? <GrFacebookOption /> : ""}
                                </li>
                            )
                        })}
                        {/* <li
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
                        </li> */}

                    </ul>
                </div>
                <div className="menu-options">
                    <ul className="list-unstyled tab-list">
                        {allFeedData && allFeedData?.feed?.map((feed, index) => {
                            return (
                                <li
                                    key={index}
                                    className={
                                        "tab-list-item chativa-fs-a chativa-fw-5 "}
                                    onClick={() => getFeeddataHandler(feed)}
                                >
                                    <div className="d-flex align-items-center justify-content-between">
                                        <span>
                                            {feed.title}
                                        </span>
                                        <span className="info-icon-wraper  " >
                                            <BiPencil className="info-bar-icon" onClick={() => onEditHandler(feed)} />
                                        </span>
                                    </div>
                                </li>
                            )
                        })}

                        {/* 
                        <li
                            className={
                                menu.name === "jobs"
                                    ? "active-tab tab-list-item chativa-fs-a chativa-fw-5 "
                                    : "tab-list-item chativa-fs-a chativa-fw-5   "
                            }
                            onClick={() => setMenu({ id: 1, name: "jobs" })}
                        >
                            <div className="d-flex align-items-center justify-content-between">
                                <span>
                                    Job Updates
                                </span>
                                <span className="info-icon-wraper  " >
                                    <BiPencil className="info-bar-icon" onClick={() => onEditHandler("2")} />
                                </span>
                            </div>


                        </li> */}
                    </ul>

                    <div className="add-feed-button">
                        <ul className="list-unstyled">
                            <li>

                                <Tooltip title="Add Feed" placement="topRight">
                                    <AiOutlinePlusCircle onClick={() => addHandler(allFeedData?.account_id)} />
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <AddFeed isModalOpen={isModalOpen} element={element} id={id} setIsModalOpen={setIsModalOpen} />
        </div >
    );
};

export default ActivitySidebar;
