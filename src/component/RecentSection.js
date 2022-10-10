import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Users = [
  {
    id: 1,
    name: "Mark Zukarberg",
    message: "how are you",
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
    name: "Msd ",
    message: "how are you",
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

  const [portalActive, setPortalActive] = useState(true);

  const onHandleSubmitValue = (e) => {
    e.prventDefault();

    console.log("handle submit values ");
  };
  const onSetvalues = (e) => {
    console.log("values name of handleChage is ", e.target.name);
    console.log("handle chnage value ");
    console.log("values name of handleChage is ", e.target.values);
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

  return (
    <div className="recent-user-section chativa-bg-recent ">
      {/* title */}

      <div className="mx-1">
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
          <ul className="list-unstyled d-flex justify-content-between align-items-center w-100">
            <li className="nav-item">
              <div className="one-portal position-relative new-item">
                <div className="google-message-notificaion">
                  <p className="count-number text-white chativa-fw-5">5</p>
                </div>
                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-google "></i>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <NavLink className="portal-name">
                <div className="one-portal position-relative">
                  <div className="google-message-notificaion">
                    <p className="count-number text-white chativa-fw-5">7</p>
                  </div>
                  <div className="portal  chativa-br d-flex align-items-center justify-content-center">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </div>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="portal-name">
                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="portal-name">
                <div className="portal chativa-br d-flex align-items-center justify-content-center">
                  <i className="fa-brands fa-facebook"></i>
                </div>
              </NavLink>
            </li>
          </ul>

          {/* <div className="one-portal position-relative">
            <div className="google-message-notificaion">
              <p className="count-number text-white chativa-fw-5">7</p>
            </div>
            <div className="portal  chativa-br d-flex align-items-center justify-content-center">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>

          <div className="portal chativa-br d-flex align-items-center justify-content-center">
            <i className="fa-brands fa-instagram"></i>
          </div>

          <div className="portal chativa-br d-flex align-items-center justify-content-center">
            <i className="fa-brands fa-facebook"></i>
          </div> */}
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

          <div className="recent-users-section">
            <ul className="list-unstyled myscrollbar" id="myScrollbar">
              <li className="user-item">
                {filterData
                  ? filterData.map((ele, index) => {
                      return (
                        <div className="user" key={index}>
                          <div
                            className={
                              userData.id === ele.id
                                ? "active-user"
                                : "chat-user-recent px-3 py-3 a chativa-br"
                            }
                          >
                            <div className="d-flex align-items-center">
                              {userImage ? (
                                <div className="chat-img-user align-self-center position-relative me-3">
                                  <div
                                    className="rounded-circle user-image d-flex align-items-center justify-content-center"
                                    style={{ background: "#D4D3FC" }}
                                  >
                                    <p
                                      className="fw-bold chativa-fs-b mt-3"
                                      style={{ color: "#7B76CD" }}
                                      onClick={() => alert("hellooo")}
                                    >
                                      {ele.name.charAt(0).toUpperCase()}
                                    </p>
                                  </div>
                                  {/* <img
                          src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                          alt=""
                          className="rounded-circle user-image"
                        /> */}
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
                      );
                    })
                  : Users.map((ele, index) => {
                      return (
                        <div className="user" key={index}>
                          <div
                            className={
                              userData.id === ele.id
                                ? "active-user"
                                : "chat-user-recent px-3 py-3 a chativa-br"
                            }
                          >
                            <div className="d-flex align-items-center">
                              {userImage ? (
                                <div className="chat-img-user align-self-center position-relative me-3">
                                  <div
                                    className="rounded-circle user-image d-flex align-items-center justify-content-center"
                                    style={{ background: "#D4D3FC" }}
                                  >
                                    <p
                                      className="fw-bold chativa-fs-b mt-3"
                                      style={{ color: "#7B76CD" }}
                                    >
                                      {ele.name.charAt(0).toUpperCase()}
                                    </p>
                                  </div>
                                  {/* <img
                            src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                            alt=""
                            className="rounded-circle user-image"
                          /> */}
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
                      );
                    })}
              </li>

              {/* <li className="user-item">
                            <div className="user">
                                <div className="chat-user-recent px-3 py-3 a chativa-br ">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle user-image"
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden position-relative">
                                            <h5 className="chativa-fs-a chativa-secondary  ">
                                                Alren richard{" "}
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
                                            <div className="typing-div  position-relative">
                                                <p className="typing">Typing</p>
                                                <p className="circle"></p>
                                                <p className="circle"></p>
                                                <p className="circle"></p>
                                            </div>
                                        </div>

                                        <div className="user-message-time">
                                            <p className="tertary-fs tertary">12:00</p>
                                            <p className="message-count">2</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="user-item">
                            <div className="user">
                                <div className="chat-user-recent px-3 py-3 a chativa-br ">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle user-image"
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="chativa-fs-a chativa-secondary  ">
                                                Alren richard{" "}
                                            </h5>
                                            <p className="chativa-secondary  chativa-fs-c">
                                                nice to meeting you😃
                                            </p>
                                        </div>

                                        <div className="user-message-time">
                                            <p className="tertary-fs tertary">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="user-item">
                            <div className="user">
                                <div className="chat-user-recent px-3 py-3 a chativa-br ">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle user-image"
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="chativa-fs-a chativa-secondary  ">
                                                Alren richard{" "}
                                            </h5>
                                            <p className="chativa-secondary  chativa-fs-c">
                                                nice to meeting you😃
                                            </p>
                                        </div>

                                        <div className="user-message-time">
                                            <p className="tertary-fs tertary">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="user-item">
                            <div className="user">
                                <div className="chat-user-recent px-3 py-3 a chativa-br ">
                                    <div className="d-flex align-items-center">
                                        <div className="chat-img-user align-self-center position-relative me-3">
                                            <img
                                                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                                                alt=""
                                                className="rounded-circle user-image"
                                            />
                                            <span className="user-online-status"></span>
                                        </div>
                                        <div className="user-name-message flex-grow-1 overflow-hidden">
                                            <h5 className="chativa-fs-a chativa-secondary  ">
                                                Alren richard{" "}
                                            </h5>
                                            <div className="typing-div  position-relative">
                                                <p className="typing">Typing</p>
                                                <p className="circle"></p>
                                                <p className="circle"></p>
                                                <p className="circle"></p>
                                            </div>
                                        </div>

                                        <div className="user-message-time">
                                            <p className="tertary-fs tertary">12:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentSection;
