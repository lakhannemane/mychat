import React, { useState } from "react";
import MainWraper from "../../Hoc/MainWraper";
import ChatMenuPage from "./ChatMenuPage";
import ServicesPage from "./ServicesPage";

const Setting = () => {
  const [activeSetting, setActiveSetting] = useState({
    id: 1,
    name: "info",
  });

  const [portalActive, setPortalActive] = useState();

  return (
    <div className="global_panel golbalChildSection d-flex">
      <ChatMenuPage
        portalActive={portalActive}
        setPortalActive={setPortalActive}
        activeSetting={activeSetting}
        setActiveSetting={setActiveSetting}
      />
      <ServicesPage
        portalActive={portalActive}
        setPortalActive={setPortalActive}
        activeSetting={activeSetting}
        setActiveSetting={setActiveSetting}
      />
    </div>
  );
};

export default MainWraper(Setting);
