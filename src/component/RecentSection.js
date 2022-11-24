import moment from "moment/moment";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchChat } from "../Store/Slices/Chat/chatSlice";
import { chatUserList, fetchChatUser } from "../Store/Slices/Chat/userSlice";

const Users = [
  {
    id: 1,
    name: "Mark Ja",
    message: "how are you",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pin: true,
    date: moment("2022-11-23T06:19:27.911Z").format("LT"),
  },
  {
    id: 2,
    name: "Mark mesar",
    message: "how are you",
    date: moment("2022-11-23T05:07:28.911Z").format("LT"),
    messageCount: "2",
  },
  {
    id: 3,
    name: "Genral",
    message: "how are you",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pin: "true",
    date: moment("2022-11-23T05:08:29.911Z").format("LT"),
  },
  {
    id: 4,
    name: "Alex deo",
    message: "how are you",
    date: moment("2022-11-23T05:09:30.911Z").format("LT"),
  },
  {
    id: 5,
    name: "dwen Brawo",
    message: "how are you",
    date: moment("2022-11-23T05:10:31.911Z").format("LT"),
  },
  {
    id: 6,
    name: "Alia bhatt",
    message: "how are you",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    date: moment("2022-11-23T05:11:32.911Z").format("LT"),
  },
  {
    id: 7,
    name: "Shreyas I",
    message: "how are you",
    date: moment("2022-11-23T05:30:33.911Z").format("LT"),
  },
  {
    id: 8,
    name: "Akshay ",
    message: "how are you",
    date: moment("2022-11-23T05:25:44.911Z").format("LT"),
    messageCount: "3",
  },
  {
    id: 8,
    name: "Saini ",
    message: "how are you",
    date: moment().format("LT"),
  },
];

const RecentSection = ({ userData, setUserData }) => {
  const [userImage, setUserImages] = useState(true);
  const [name, setName] = useState();
  const [filterData, setFilterData] = useState();

  const dispatch = useDispatch();

  const [portalActive, setPortalActive] = useState({ media: "google" });
  const TimeFilterData = Users.slice().sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  const onHandleSubmitValue = (e) => {
    e.prventDefault();

    console.log("handle submit values ");
  };
  const onSetvalues = (e) => {
    // console.log("values name of handleChage is ", e.target.name);
    // console.log("handle chnage value ");
    // console.log("values name of handleChage is ", e.target.values);
    setName(e.target.value);
    const data = TimeFilterData.filter((ele, index) => {
      return ele.name.toLowerCase().includes(e.target.value);
    });
    console.log("daata values ", data);
    setFilterData(data);
  };

  console.log(
    Users.map((ele) => ele.date),
    "first user date"
  );

  const data = useSelector(chatUserList);

  console.log(data.threads, "data get from redux store");

  console.log("ordered data ", TimeFilterData);

  const onSetUser = (data) => {
    setUserData(data);
    console.log("###########################", data);
    console.log("user user id", data.conversationId);
    dispatch(fetchChat(data.conversationId));
  };

  useEffect(() => {
    dispatch(fetchChatUser());
  }, []);

  return (
    <div className="recent-user-section chativa-bg-recent ">
      {/* title */}

      <div className="recentPanel">
        <div className="recent-title">
          <h5
            className="title-logo  chativa-fw-5"

            // onClick={() => alert("hellooo")}
          >
            Chats
          </h5>
        </div>
        {/* serchbar */}
        <div className="serchbar position-relative w-100">
          {/* icon */}
          <div className="icon">
            <p className="search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </p>
          </div>
          {/* input form */}
          <div className="form-input ">
            <form action="search-user" onSubmit={onHandleSubmitValue}>
              <input
                type="text"
                placeholder="Search... "
                className="w-100 serchbar-input chativa-br "
                name="name"
                value={name}
                onChange={(e) => onSetvalues(e)}
              />
            </form>
          </div>
        </div>

        {/* poratls section */}

        <div className="poratls-section d-flex justify-content-between w-100 ">
          <ul className="list-unstyled  recent-portal  align-items-center w-100">
            <li
              className={
                portalActive.media === "google"
                  ? "new-item position-relative "
                  : " one-portal position-relative   chativa-primary "
              }
              onClick={() => setPortalActive({ media: "google" })}
            >
              <span>{Users.length}</span>
              <i className="fa-brands fa-google "></i>
            </li>
            <li
              className={
                portalActive.media === "linkdein"
                  ? "new-item position-relative"
                  : " one-portal position-relative chativa-primary"
              }
              onClick={() => setPortalActive({ media: "linkdein" })}
            >
              {/* <span>5</span> */}
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
            <li
              className={
                portalActive.media === "Instagram"
                  ? "new-item position-relative"
                  : " one-portal position-relative  chativa-primary"
              }
              onClick={() => setPortalActive({ media: "Instagram" })}
            >
              {/* <span>5</span> */}
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li
              className={
                portalActive.media === "facebook"
                  ? "new-item position-relative"
                  : " one-portal position-relative  chativa-primary "
              }
              onClick={() => setPortalActive({ media: "facebook" })}
            >
              {/* <span>5</span> */}
              <i className="fa-brands fa-facebook"></i>
            </li>
          </ul>
        </div>

        {/* recent users */}
        <div
          className="recent w-100 position-relative"
          style={{ top: "-15px" }}
        >
          <div className="recent-title-section">
            <p className="chativa-fs-b chativa-fw-5 chativa-secondary">
              Recents
            </p>
          </div>

          {portalActive.media === "google" ? (
            <div className="recent-users-section myscrollbar" id="myScrollbar">
              <ul className="list-unstyled ">
                {data?.threads?.map((ele, index) => {
                  return (
                    <li
                      className={
                        userData.conversationId === ele.conversationId
                          ? "active-user chat-user-recent a chativa-br"
                          : "chat-user-recent a chativa-br"
                      }
                      key={index}
                    >
                      <div className="user">
                        <div>
                          <div className="d-flex align-items-center">
                            {userImage ? (
                              <div className="chat-img-user align-self-center position-relative me-3">
                                <div
                                  className="rounded-circle user-image d-flex align-items-center justify-content-center"
                                  style={{ background: "#D4D3FC" }}
                                >
                                  {ele.image ? (
                                    <img
                                      src={ele.image ? " " : ""}
                                      alt=""
                                      className="rounded-circle user-image"
                                    />
                                  ) : (
                                    <p
                                      className="fw-bold chativa-fs-b mt-3"
                                      style={{ color: "#7B76CD" }}
                                      onClick={() => alert("hellooo")}
                                    >
                                      {ele.displayName.charAt(0).toUpperCase()}
                                    </p>
                                  )}
                                </div>
                                <span className="user-online-status"></span>
                              </div>
                            ) : (
                              "no"
                            )}
                            <div
                              className="user-name-message flex-grow-1 overflow-hidden"
                              onClick={() => onSetUser(ele)}
                            >
                              <p
                                className={
                                  ele.messageCount
                                    ? "time-green chativa-fs-a"
                                    : "chativa-fs-a chativa-secondary  "
                                }
                              >
                                {ele.displayName}
                                {/* {ele.pin === true && <span className="ms-3">
                                    <i
                                      className="fa-solid fa-thumbtack"
                                      style={{
                                        transform: "rotate(45deg)",
                                        color: "#AEB3C2",
                                        fontSize: "10px"
                                      }}
                                    ></i>
                                  </span>} */}
                                <br />
                                <span className="chativa-secondary chativa-fs-c">
                                  {`${ele.lastMessageText.slice(0, 8)}...`}
                                </span>
                              </p>
                            </div>

                            <div className="user-message-time">
                              <p
                                className={
                                  ele.messageCount
                                    ? "time-green"
                                    : "tertary-fs chativa-accent"
                                }
                              >
                                {ele.lastUpdated}
                              </p>
                              {ele.messageCount ? (
                                <p className="message-count">
                                  {ele.messageCount}
                                </p>
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : portalActive.media === "linkdein" ? (
            <h5 className="chativa-fs-a chativa-secondary text-center mt-4">
              No Users
            </h5>
          ) : portalActive.media === "Instagram" ? (
            <h5 className="chativa-fs-a chativa-secondary text-center mt-4">
              No Users
            </h5>
          ) : portalActive.media === "facebook" ? (
            <h5 className="chativa-fs-a chativa-secondary text-center mt-4">
              No Users
            </h5>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentSection;

// {filterData
//   ? filterData.map((ele, index) => {
//     return (
//       <li
//         key={index}
//         className={
//           userData.id === ele.id
//             ? "active-user chat-user-recent a chativa-br"
//             : "chat-user-recent a chativa-br"
//         }
//       >
//         <div className="user">
//           <div>
//             <div className="d-flex align-items-center">
//               {userImage ? (
//                 <div className="chat-img-user align-self-center position-relative me-2">
//                   <div
//                     className="rounded-circle user-image d-flex align-items-center justify-content-center"
//                     style={{ background: "#D4D3FC" }}
//                   >
//                     {ele.image ? (
//                       <img
//                         src={ele.image}
//                         alt=""
//                         className="rounded-circle user-image"
//                       />
//                     ) : (
//                       <p
//                         className="fw-bold chativa-fs-b mt-3"
//                         style={{ color: "#7B76CD" }}
//                         onClick={() => alert("hellooo")}
//                       >
//                         {ele.name.charAt(0).toUpperCase()}
//                       </p>
//                     )}
//                   </div>

//                   <span className="user-online-status"></span>
//                 </div>
//               ) : (
//                 "no"
//               )}
//               <div
//                 className="user-name-message flex-grow-1 overflow-hidden"
//                 onClick={() => onSetUser(ele)}
//               >
//                 <p className="chativa-fs-a chativa-secondary">
//                   {/* {ele.name} */}
//                   {ele.name}

//                   {ele.pin === true && <span className="ms-3">
//                     <i
//                       className="fa-solid fa-thumbtack"
//                       style={{
//                         transform: "rotate(45deg)",
//                         color: "#AEB3C2",
//                         fontSize: "10px"
//                       }}
//                     ></i>
//                   </span>}
//                   <br />
//                   <span className="chativa-secondary chativa-fs-c">
//                     {`${("nice to meeting you😃").slice(0, 8)}...`}
//                   </span>
//                 </p>
//               </div>

//               <div className="user-message-time">
//                 <p className={ele.messageCount ? "time-green" : "tertary-fs chativa-accent"}>
//                   {ele.date}
//                 </p>
//                 {ele.messageCount ? <p className="message-count">{ele.messageCount}</p> : ""}
//               </div>
//             </div>
//           </div>
//         </div>
//       </li>
//     );
//   })
//   : data?.threads.map((ele, index) => {
//     return (
//       <li
//         className={
//           userData.id === ele.id
//             ? "active-user chat-user-recent a chativa-br"
//             : "chat-user-recent a chativa-br"
//         }
//         key={index}
//       >
//         <div className="user">
//           <div>
//             <div className="d-flex align-items-center">
//               {userImage ? (
//                 <div className="chat-img-user align-self-center position-relative me-3">
//                   <div
//                     className="rounded-circle user-image d-flex align-items-center justify-content-center"
//                     style={{ background: "#D4D3FC" }}
//                   >
//                     {ele.image ? (
//                       <img
//                         src={ele.image}
//                         alt=""
//                         className="rounded-circle user-image"
//                       />
//                     ) : (
//                       <p
//                         className="fw-bold chativa-fs-b mt-3"
//                         style={{ color: "#7B76CD" }}
//                         onClick={() => alert("hellooo")}
//                       >
//                         {ele.name.charAt(0).toUpperCase()}
//                       </p>
//                     )}
//                   </div>
//                   <span className="user-online-status"></span>
//                 </div>
//               ) : (
//                 "no"
//               )}
//               <div
//                 className="user-name-message flex-grow-1 overflow-hidden"
//                 onClick={() => onSetUser(ele)}
//               >
//                 <p className={ele.messageCount ? "time-green chativa-fs-a" : "chativa-fs-a chativa-secondary  "}>
//                   {ele.name}
//                   {ele.pin === true && <span className="ms-3">
//                     <i
//                       className="fa-solid fa-thumbtack"
//                       style={{
//                         transform: "rotate(45deg)",
//                         color: "#AEB3C2",
//                         fontSize: "10px"
//                       }}
//                     ></i>
//                   </span>}
//                   <br />
//                   <span className="chativa-secondary chativa-fs-c">
//                     {`${("nice to meeting you😃").slice(0, 8)}...`}
//                   </span>
//                 </p>
//               </div>

//               <div className="user-message-time">
//                 <p className={ele.messageCount ? "time-green" : "tertary-fs chativa-accent"}>
//                   {ele.lastUpdated}
//                 </p>
//                 {ele.messageCount ? <p className="message-count">{ele.messageCount}</p> : ""}
//               </div>
//             </div>
//           </div>
//         </div>
//       </li>
//     );
//   })
//   }
