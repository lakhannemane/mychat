import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Users = [
  {
    id: 1,
    name: "Mark Zukarberg",
    message: "how are you",
    image:
      "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pin: "true",
  },
  {
    id: 2,
    name: "Mark Messar",
    message: "how are you",
  },
  {
    id: 3,
    name: "Genral",
    message: "how are you",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fGZhY2UlMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    pin: "true",
  },
  {
    id: 4,
    name: "Alex deo",
    message: "how are you",
  },
  {
    id: 5,
    name: "dwen Brawo",
    message: "how are you",
  },
  {
    id: 6,
    name: "Alia bhatt",
    message: "how are you",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 7,
    name: "Shreyas Iyyer",
    message: "how are you",
  },
  {
    id: 8,
    name: "Akshay Kumar",
    message: "how are you",
  },
];

const RecentSection = ({ userData, setUserData }) => {
  const [userImage, setUserImages] = useState(true);
  const [name, setName] = useState();
  const [filterData, setFilterData] = useState();

  const [portalActive, setPortalActive] = useState({ media: "google" });

  const onHandleSubmitValue = (e) => {
    e.prventDefault();

    console.log("handle submit values ");
  };
  const onSetvalues = (e) => {
    // console.log("values name of handleChage is ", e.target.name);
    // console.log("handle chnage value ");
    // console.log("values name of handleChage is ", e.target.values);
    setName(e.target.value);
    const data = Users.filter((ele, index) => {
      return ele.name.toLowerCase().includes(e.target.value);
    });
    console.log("daata values ", data);
    setFilterData(data);
  };

  const onSetUser = (data) => {
    setUserData(data);
    console.log("data value is ", data);
  };

  // let reg = /lakhan/g;
  // var sites = {
  //   links: [
  //     { href: "https://www.example.com/v1/contact-us/ca" },
  //     { href: "https://www.example.com/v1/contact-us/au" },
  //     { href: "https://www.example.com/v1/contact-us/us" },
  //     { href: "https://www.example.com/v1/dontcontact-us/us" },
  //   ],
  // };

  const regex = new RegExp(name, "g");
  console.log(regex, "regex value");
  var new_text = Users.filter((href) => {
    return (
      <>{href.name.match(regex, <span class="highlight"> +name + </span>)}</>
    );
  });

  console.log(new_text, "fdfsdfsd");

  // document.getElementById("search_para").innerHTML=new_text;
  // const matchedSites = sites.links.filter(({ href }) => href.match(regex));

  // console.log(matchedSites);

  return (
    <div className="recent-user-section chativa-bg-recent ">
      {/* title */}

      <div className="recentPanel">
        <div className="recent-title">
          <h5
            className="title  chativa-fw-5"
            style={{ fontSize: "22px" }}
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
                placeholder="search user here"
                className="w-100 serchbar-input chativa-br "
                name="name"
                value={name}
                onChange={(e) => onSetvalues(e)}
              />
            </form>
          </div>
        </div>

        {/* poratls section */}

        <div className="poratls-section d-flex justify-content-between w-100 portal-scrollbar">
          <ul className="list-unstyled  recent-portal  align-items-center w-100">
            <li>
              <span>5</span>
              <i className="fa-brands fa-google "></i>
            </li>
            <li><span>5</span>
              <i className="fa-brands fa-linkedin-in"></i>
            </li>
            <li><span>5</span>
              <i className="fa-brands fa-linkedin-in"></i></li>
            <li><span>5</span>
              <i className="fa-brands fa-linkedin-in"></i></li>
            {/* <li className="nav-item">
              <div
                className={
                  portalActive.media === "google"
                    ? "new-item position-relative "
                    : " one-portal position-relative   chativa-primary "
                }
                onClick={() => setPortalActive({ media: "google" })}
              >
                <div className="google-message-notificaion">
                  <p className="count-number text-white chativa-fw-5">5</p>
                </div>
                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                  
                </div>
              </div>
            </li>

            <li className="nav-item">
              <div
                className={
                  portalActive.media === "linkdein"
                    ? "new-item position-relative"
                    : " one-portal position-relative chativa-primary"
                }
                onClick={() => setPortalActive({ media: "linkdein" })}
              >
                <div className="google-message-notificaion">
                  <p className="count-number text-white chativa-fw-5">7</p>
                </div>
                <div className="portal  chativa-br d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-linkedin-in"></i>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={
                  portalActive.media === "Instagram"
                    ? "new-item position-relative"
                    : " one-portal position-relative  chativa-primary"
                }
                onClick={() => setPortalActive({ media: "Instagram" })}
              >
                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div
                className={
                  portalActive.media === "facebook"
                    ? "new-item position-relative"
                    : " one-portal position-relative  chativa-primary "
                }
                onClick={() => setPortalActive({ media: "facebook" })}
              >
                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-facebook"></i>
                </div>
              </div>
            </li> */}
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
            <div className="recent-users-section">
              <ul className="list-unstyled myscrollbar" id="myScrollbar">
                {filterData
                  ? filterData.map((ele, index) => {
                    return (
                      <li
                        key={index}
                        className={
                          userData.id === ele.id
                            ? "active-user chat-user-recent a chativa-br"
                            : "chat-user-recent a chativa-br"
                        }
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
                                        src={ele.image}
                                        alt=""
                                        className="rounded-circle user-image"
                                      />
                                    ) : (
                                      <p
                                        className="fw-bold chativa-fs-b mt-3"
                                        style={{ color: "#7B76CD" }}
                                        onClick={() => alert("hellooo")}
                                      >
                                        {ele.name.charAt(0).toUpperCase()}
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
                                <h5 className="chativa-fs-a chativa-secondary">
                                  {/* {ele.name} */}
                                  {ele.name}
                                  <span className="ms-3">
                                    <i
                                      className="fa-solid fa-thumbtack"
                                      style={{
                                        transform: "rotate(45deg)",
                                        color: "#AEB3C2",
                                      }}
                                    ></i>
                                  </span>
                                </h5>
                                <p className="chativa-secondary chativa-fs-c">
                                  nice to meeting you😃
                                </p>
                              </div>

                              <div className="user-message-time">
                                <p className="tertary-fs chativa-accent">
                                  12:00
                                </p>
                                <p className="message-count">2</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    );
                  })
                  : Users.map((ele, index) => {
                    return (
                      <li
                        className={
                          userData.id === ele.id
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
                                        src={ele.image}
                                        alt=""
                                        className="rounded-circle user-image"
                                      />
                                    ) : (
                                      <p
                                        className="fw-bold chativa-fs-b mt-3"
                                        style={{ color: "#7B76CD" }}
                                        onClick={() => alert("hellooo")}
                                      >
                                        {ele.name.charAt(0).toUpperCase()}
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
                                <h5 className="chativa-fs-a chativa-secondary  ">
                                  {ele.name}
                                  <span className="ms-3">
                                    <i
                                      className="fa-solid fa-thumbtack"
                                      style={{
                                        transform: "rotate(45deg)",
                                        color: "#AEB3C2",
                                      }}
                                    ></i>
                                  </span>
                                </h5>
                                <p className="chativa-secondary chativa-fs-c">
                                  nice to meeting you😃
                                </p>
                              </div>

                              <div className="user-message-time">
                                <p className="tertary-fs chativa-accent">
                                  12:00
                                </p>
                                <p className="message-count">2</p>
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
