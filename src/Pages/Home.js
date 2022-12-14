import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import ChatSection from "../component/ChatSection";
import MediaSection from "../component/MediaSection";
import RecentSection from "../component/RecentSection";
import MainWraper from "../Hoc/MainWraper";
import Sidebar from "../Layout/Sidebar";
import { chatUserList, fetchChatUser } from "../Store/Slices/Chat/userSlice";
const socket = io.connect("https://gmb.prometteur.in:3330");

const Home = () => {
  const dispatch = useDispatch();

  const [render, setRender] = useState();

  const data = useSelector(chatUserList);

  // console.log("list Home page", data);
  const [portalActive, setPortalActive] = useState();
  const [userData, setUserData] = useState();

  useEffect(() => {
    dispatch(fetchChatUser());
    socket.on("message", (value) => {
      setRender(value);
    });
    setRender("");
  }, [render]);
  return (
    <div className="chat-app d-flex home_panel golbalChildSection">
      <RecentSection
        userData={userData}
        setUserData={setUserData}
        portalActive={portalActive}
        setPortalActive={setPortalActive}
      />
      <div className="leftContainer d-flex">
        <ChatSection
          userData={userData}
          setUserData={setUserData}
          socket={socket}
        />
        <MediaSection />
      </div>
    </div>
  );
};

export default MainWraper(Home);
