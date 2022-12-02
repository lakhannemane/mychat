import React, { useState } from "react";
import MainWraper from "../../Hoc/MainWraper";
import Activity from "./Feed";
import ActivitySidebar from "./FeedSidebar";

const Index = () => {
  const [menu, setMenu] = useState({ name: "jobs", id: 1 });
  return (
    <div className="global_panel golbalChildSection d-flex">
      <ActivitySidebar menu={menu} setMenu={setMenu} />
      <Activity menu={menu} setMenu={setMenu} />
    </div>
  );
};

export default MainWraper(Index);
