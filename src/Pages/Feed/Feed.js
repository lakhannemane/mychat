import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { allJobs } from "../../Store/Slices/FeedSlice/Feedslice";

// // import { GoogleLogin } from "react-google-login";

const Activity = () => {
  const [UpdateFeed, setUpdateFeed] = useState();

  const Job = useSelector(allJobs);
  useEffect(() => {
    console.log("frred invoked");
  }, []);

  // console.log("data", Job);

  return (
    <div style={{ width: "100%" }}>
      <div className="feed">
        <div className="row justify-content-center">
          <div className="col-9">
            <div className="row">
              <div className="col-12">
                <div className="feed-rss-section">
                  {/* <h1>All Feed </h1> */}
                  {Job
                    ? Job?.jobs?.map((ele, index) => {
                        return (
                          <div className="card-jobs" key={index}>
                            <div className="update-time  d-flex align-items-center">
                              <img
                                src="https://icons.feedercdn.com/upwork.com"
                                alt=""
                              />
                              <span>All jobs | upwork.com</span>
                              &nbsp; &nbsp;
                              <span className="time-ago">
                                {" "}
                                - {moment(ele.pubDate)
                                  .fromNow()
                                  .toUpperCase()}{" "}
                              </span>
                            </div>
                            <div className="post-feed">
                              <h5>
                                <a href={`${ele.link}`}>
                                  {ele.title.replaceAll("&amp;", "")}
                                </a>
                              </h5>
                              <div>
                                {ele.content
                                  .replaceAll("<br />", "")
                                  .replaceAll("<b>", "")
                                  .replaceAll("</b>", "")
                                  .replaceAll("<br /", "")
                                  .replaceAll("&amp;quot;", " ")
                                  .replaceAll("&#039;", " ")
                                  .replaceAll("&bull;", "")
                                  .replaceAll(" &ndash; ", "")
                                  .replaceAll("&nbsp;", "")
                                  .slice(0, 160)}
                                ...
                              </div>{" "}
                            </div>
                          </div>
                        );
                      })
                    : "job"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Activity;
