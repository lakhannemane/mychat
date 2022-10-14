import React, { useState } from "react";
import MainWraper from "../../Hoc/MainWraper";
import ChatMenuPage from "./ChatMenuPage";
import ServicesPage from "./ServicesPage";

const Setting = () => {
  const [activeSetting, setActiveSetting] = useState({
    id: 1,
    name: "info",
  });

  return (
    <div class="global_panel golbalChildSection d-flex">
      <ChatMenuPage
        activeSetting={activeSetting}
        setActiveSetting={setActiveSetting}
      />
      <ServicesPage
        activeSetting={activeSetting}
        setActiveSetting={setActiveSetting}
      />
    </div>
  );
};

export default MainWraper(Setting);
