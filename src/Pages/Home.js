import React from "react";
import ChatSection from "../component/ChatSection";
import MediaSection from "../component/MediaSection";
import RecentSection from "../component/RecentSection";
import MainWraper from "../Hoc/MainWraper";
import Sidebar from "../Layout/Sidebar";

const Home = () => {
  return (
    <div className="chat-app d-flex">
      <RecentSection />
      <ChatSection />
      <MediaSection />
    </div>
  );
};

export default MainWraper(Home);
