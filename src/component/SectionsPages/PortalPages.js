import React from "react";
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

const PortalPages = () => {
  return (
    <>
      {/* recent users */}
      <div className="recent w-100">
        <div className="recent-title-section">
          <p className="chativa-fs-b chativa-fw-5 chativa-secondary">Recents</p>
        </div>

        <div className="recent-users-section">
          <ul className="list-unstyled myscrollbar" id="myScrollbar">
            <li className="user-item">
              {Users.map((ele, index) => {
                return (
                  <div className="user" key={index}>
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
                            {ele.name}
                            <span className="ms-3">
                              <i
                                class="fa-solid fa-thumbtack"
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
                          <p className="tertary-fs tertary">12:00</p>
                          <p className="message-count">2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </li>
            <li className="user-item">
              <div className="user">
                <div className="chat-user-recent px-3 py-3 active-chat chativa-br ">
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
                        <span className="ms-3">
                          <i
                            class="fa-solid fa-thumbtack"
                            style={{
                              transform: "rotate(45deg)",
                              color: "#AEB3C2",
                            }}
                          ></i>
                        </span>
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
                    <div className="user-name-message flex-grow-1 overflow-hidden position-relative">
                      <h5 className="chativa-fs-a chativa-secondary  ">
                        Alren richard{" "}
                        <span className="ms-3">
                          <i
                            class="fa-solid fa-thumbtack"
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
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PortalPages;
