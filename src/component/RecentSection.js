import React from "react";

const RecentSection = () => {
  return (
    <div className="recent-user-section">
      {/* title */}

      <div className="recent-title">
        <h5 className="title first">Chats</h5>
      </div>
      {/* serchbar */}
      <div className="serchbar">
        {/* icon */}
        <div className="icon">
          <p className="search-icon">
            <i class="fa-solid fa-magnifying-glass"></i>
          </p>
        </div>
        {/* input form */}
        <div className="form-input">
          <form action="search-user">
            <input type="text" placeholder="search user here" />
          </form>
        </div>
      </div>

      {/* poratls section */}

      <div className="poratls-section">
        <div className="portal-items"></div>
      </div>
      {/* recent users */}
      <div className="recent">
        <div className="recent-title-section">
          <p className="recent-title">Recents</p>
        </div>
      </div>
    </div>
  );
};

export default RecentSection;
