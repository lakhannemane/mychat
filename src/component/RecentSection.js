import React, { useState } from "react";
import { useEffect } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { SiFreelancer, SiUpwork } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import {
  allAccounts,
  fetchAccounts,
} from "../Store/Slices/Accounts/AccountSlice";
import { fetchChat } from "../Store/Slices/Chat/chatSlice";
import { chatUserList, fetchChatUser } from "../Store/Slices/Chat/userSlice";

const RecentSection = ({
  userData,
  setUserData,
  portalActive,
  setPortalActive,
}) => {
  const [userImage, setUserImages] = useState(true);
  const [name, setName] = useState();

  const dispatch = useDispatch();

  // const TimeFilterData = Users.slice().sort((a, b) =>
  //   b.date.localeCompare(a.date)
  // );

  const onHandleSubmitValue = (e) => {
    e.prventDefault();

    // console.log("handle submit values ");
  };
  const onSetvalues = (e) => {
    // console.log("values name of handleChage is ", e.target.name);
    // console.log("handle chnage value ");
    // console.log("values name of handleChage is ", e.target.values);
    // setName(e.target.value);
    // const data = TimeFilterData.filter((ele, index) => {
    //   return ele.name.toLowerCase().includes(e.target.value);
    // });
    // console.log("daata values ", data);
    // setFilterData(data);
  };

  const data = useSelector(chatUserList);
  const Accounts = useSelector(allAccounts);

  // console.log(data.threads, "data get from redux store");

  console.log("ordered data ", portalActive);

  useEffect(() => {
    dispatch(fetchChatUser());
    dispatch(fetchAccounts());
  }, [dispatch]);

  useEffect(() => {
    if (Accounts.account) {
      // se(Accounts.account[0]);
      setPortalActive(Accounts.account[0]);
    }
  }, [Accounts.account]);

  const onSetUser = (data) => {
    setUserData(data);
    // console.log("###########################", data);
    // console.log("user user id", data.conversationId);
    dispatch(fetchChat(data.conversationId));
  };

  useEffect(() => {
    if (data.threads) {
      setUserData(data.threads[0]);
    }
  }, [data.threads, setUserData]);

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
            {Accounts &&
              Accounts?.account?.map((portal, index) => {
                return (
                  <li
                    className={
                      portalActive && portalActive._id === portal._id
                        ? "new-item position-relative "
                        : " one-portal position-relative   chativa-primary "
                    }
                    onClick={() => setPortalActive(portal)}
                  >
                    {portal.account === "Google" ? (
                      <i className="fa-brands fa-google "></i>
                    ) : portal.account === "Linkdein" ? (
                      <i className="fa-brands fa-linkedin-in"></i>
                    ) : portal.account === "Flipkart" ? (
                      <GrFacebookOption />
                    ) : portal.account === "upwork" ? (
                      <SiUpwork />
                    ) : portal?.account === "freelancer" ? (
                      <SiFreelancer />
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
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

          {portalActive &&
            (portalActive?.account === "Google" ? (
              <div
                className="recent-users-section myscrollbar"
                id="myScrollbar"
              >
                <ul className="list-unstyled ">
                  {data?.threads &&
                    data?.threads.map((ele, index) => {
                      return (
                        <li
                          className={
                            userData?.conversationId === ele.conversationId
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
                                          {ele.displayName
                                            .charAt(0)
                                            .toUpperCase()}
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
            ) : portalActive?.account === "linkdein" ? (
              <h5 className="chativa-fs-a chativa-secondary text-center mt-4">
                No Users
              </h5>
            ) : portalActive?.account === "Instagram" ? (
              <h5 className="chativa-fs-a chativa-secondary text-center mt-4">
                No Users
              </h5>
            ) : portalActive?.account === "facebook" ? (
              <h5 className="chativa-fs-a chativa-secondary text-center mt-4">
                No Users
              </h5>
            ) : portalActive?.account === "facebook" ? (
              <h5 className="chativa-fs-a chativa-secondary text-center mt-4">
                No Users
              </h5>
            ) : (
              ""
            ))}
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
