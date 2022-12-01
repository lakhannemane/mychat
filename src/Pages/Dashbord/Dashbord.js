import axios from "axios";
import React, { useEffect } from "react";
import MainWraper from "../../Hoc/MainWraper";

const Dashbord = () => {
  useEffect(() => {
    axios
      .get(
        "https://www.upwork.com/ab/feed/jobs/rss?q=%28react+OR+angular+OR+node+OR+php+OR+laravel+OR+html+OR+css%29&proposals=5-9&sort=recency&paging=0%3B10&api_params=1&securityToken=500d7afe4485c26fa9a4b6098243520405921470a8996ecf68434e68ea3cb63df773d88643ed6ea931745ee7906fb6c81d23fa1c3365f7cac27bda7585372245&userUid=1249984252982468608&orgUid=1249984261808590849"
      )
      .then((res) => console.log(res.data))
      .catch((err) => err);
  }, []);
  return <div></div>;
};

export default MainWraper(Dashbord);
