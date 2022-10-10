import React, { useState } from "react";
import ChatSection from "../component/ChatSection";
import MediaSection from "../component/MediaSection";
import RecentSection from "../component/RecentSection";
import MainWraper from "../Hoc/MainWraper";
import Sidebar from "../Layout/Sidebar";

const Home = () => {
  const [userData, setUserData] = useState({
    id: 1,
    name: "Mark Zukarberg",
    message: "how are you",
  });
  return (
    <div className="chat-app d-flex">
      <RecentSection userData={userData} setUserData={setUserData} />
      <ChatSection userData={userData} setUserData={setUserData} />
      <MediaSection />
    </div>
  );
};

export default MainWraper(Home);
