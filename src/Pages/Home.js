import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatSection from "../component/ChatSection";
import MediaSection from "../component/MediaSection";
import RecentSection from "../component/RecentSection";
import MainWraper from "../Hoc/MainWraper";
import Sidebar from "../Layout/Sidebar";
import { chatUserList, fetchChatUser } from "../Store/Slices/Chat/userSlice";

const Home = ({ socket }) => {
  const dispatch = useDispatch();

  const data = useSelector(chatUserList);

  console.log("list Home page", data);

  const [userData, setUserData] = useState({
    lastUpdated: "17 minutes ago",
    displayName: "gajanan kope",
    state: "Live Agent",
    conversationId: "921e5625-8c67-4c9d-a973-8c651b0c6a41",
    brandId: "7e374ce7-6197-4091-99b1-84076acb5b44",
    lastMessageText: "how are you",
  });

  useEffect(() => {
    dispatch(fetchChatUser());
  }, [dispatch, userData, socket]);
  return (
    <div className="chat-app d-flex home_panel golbalChildSection">
      <RecentSection userData={userData} setUserData={setUserData} />
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
