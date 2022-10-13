import React from "react";
import MainWraper from "../../Hoc/MainWraper";
import ChatMenuPage from "./ChatMenuPage";
import ServicesPage from "./ServicesPage";

const Setting = () => {
  return (
    <div class="global_panel golbalChildSection d-flex">
      <ChatMenuPage />
      <ServicesPage />
    </div>
  );
};

export default MainWraper(Setting);
