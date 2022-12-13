import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MainWraper from "../../Hoc/MainWraper";
import { fetchAccounts } from "../../Store/Slices/Accounts/AccountSlice";
import Activity from "./Feed";
import ActivitySidebar from "./FeedSidebar";

const Index = () => {
  const [Accounts, setAccounts] = useState([]);
  const [feedActive, setFeedActive] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAccounts()).then((res) => {
      if (res.payload) {
        setAccounts(res.payload);
      }
    });
  }, []);

  console.log("account in home page", Accounts);
  return (
    <div className="global_panel golbalChildSection d-flex">
      <ActivitySidebar
        Accounts={Accounts}
        feedActive={feedActive}
        setFeedActive={setFeedActive}
      />
      <Activity feedActive={feedActive} setFeedActive={setFeedActive} />
    </div>
  );
};

export default MainWraper(Index);
