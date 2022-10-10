import React from "react";

const RecentHoc = (RecentComponent) => {
  return (props) => {
    return (
      <>
        <RecentComponent />
      </>
    );
  };
};

export default RecentHoc;
