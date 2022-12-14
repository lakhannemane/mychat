import React, { useEffect, useRef, useState } from "react";
import {
  BsThreeDots,
  BsTelephone,
  BsCameraVideo,
  BsSearch,
} from "react-icons/bs";
import { BiMicrophone, BiUserCircle } from "react-icons/bi";
import { GrSend } from "react-icons/gr";
import { ImAttachment } from "react-icons/im";
import { IoCheckmarkDoneSharp, IoSettingsOutline } from "react-icons/io5";
import { Dropdown, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Allchat, fetchChat } from "../Store/Slices/Chat/chatSlice";
import { fetchSendMessage } from "../Store/Slices/Chat/sendMessageSlice";
// import io from "socket.io-client";
import { io } from "socket.io-client";
// import { fetchChatUser } from "../Store/Slices/Chat/userSlice";
// // import io from "socket.io-client";
const socket = io.connect("https://gmb.prometteur.in:3330");

const ChatSection = ({ userData }) => {
  // console.log(socket);
  const dispatch = useDispatch();
  const [messageData, setMessageData] = useState();
  const chatHistory = useSelector(Allchat);

  const [render, setRender] = useState(false);
  console.log("Recent Page", userData);
  console.log("chatsection data in chat page", userData);
  const bottomRef = useRef(null);
  const [message, setMessage] = useState();

  const onChangeValue = (e) => {
    setMessage(e.target.value);
  };

  const onSubminValues = (e) => {
    e.preventDefault();
  };

  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: <NavLink target="/chat">Home</NavLink>,
        },
        {
          key: "2",
          label: (
            <NavLink to="/chat">
              <span className="chat-header-seeting-icon">
                <BiUserCircle className="setting-icon " />
              </span>{" "}
              &nbsp;profile
            </NavLink>
          ),
        },
        {
          key: "3",
          label: (
            <NavLink to="/setting">
              {" "}
              <span className="chat-header-seeting-icon">
                <IoSettingsOutline className="setting-icon" />
              </span>{" "}
              Setting
            </NavLink>
          ),
        },
      ]}
    />
  );

  const sendMessage = () => {
    dispatch(
      fetchSendMessage({
        conversationId: userData?.conversationId,
        message: message,
      })
    );
    setMessage("");
    setRender(true);
  };

  useEffect(() => {
    if (userData) {
      dispatch(fetchChat(userData?.conversationId));
    }

    setRender(false);
    socket.on("message", (value) => {
      // console.log(value, "socket message get at index page");
      setMessageData(value);
    });
    setMessageData("");
  }, [dispatch, userData]);

  useEffect(() => {
    if (userData) {
      dispatch(fetchChat(userData?.conversationId));
    }
  }, [dispatch, userData]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [dispatch]);

  return (
    <>
      <div className="messages-section chativa-bg-chat ">
        {/* user-name-and-status */}

        <div className="mx-3">
          <div
            className="user-name-status  header-chat py-2 "
            style={{ background: "#FBFDFF" }}
          >
            <div className="chat-user-recent px-3 py-2   ">
              <div className="d-flex align-items-center ">
                <div className="chat-img-user align-self-center position-relative me-3">
                  {/* <img
                    src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                    alt=""
                    className="rounded-circle user-image"
                  /> */}
                  <div
                    className="rounded-circle user-image d-flex align-items-center justify-content-center"
                    style={{ background: "#D4D3FC" }}
                  >
                    <p className="firstCharacter" style={{ color: "#7B76CD" }}>
                      {userData && userData.displayName.charAt(0).toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="user-name-message flex-grow-1 overflow-hidden me-auto">
                  <h5 className=" chativa-fourth  chativa-fs-a">
                    {userData && userData.displayName}
                    <br />
                    <span className="chativa-extra chativa-fs-c">Online</span>
                  </h5>
                </div>

                <div className="user-heaings-icons">
                  <div className="icons-user-header d-flex w-50 justify-content-center">
                    <div className="serch user-header-icons ">
                      <BsSearch className="chativa-fs-b chativa-extra" />
                    </div>
                    <div className="call user-header-icons">
                      <BsTelephone className="chativa-fs-b chativa-extra" />
                    </div>
                    <div className="video user-header-icons">
                      <BsCameraVideo className="chativa-fs-b chativa-extra" />
                    </div>
                    <div className="dots user-header-icons">
                      <Dropdown overlay={menu} placement="bottomRight">
                        <BsThreeDots className="chativa-fs-b chativa-extra" />
                      </Dropdown>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* message-section-field */}
          <div className="message-field mt-5 chatscrollbar " id="chatscrollbar">
            <div className="row">
              {chatHistory.messages &&
                chatHistory?.messages.map((ele, index) => {
                  if (ele.displayName === "Prometteur Solutions Pvt Ltd") {
                    return (
                      <div className="w-75 ms-auto d-flex justify-content-end">
                        <div className="your-message">
                          <p className="you chativa-secondarychativa-fs-a ">
                            {ele.messageText}
                            <span></span>
                          </p>
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div className=" w-75 mx-end d-flex justify-content-right">
                        <div className="user-message msg">
                          <p className="client chativa-secondarychativa-fs-a">
                            {ele.messageText}
                          </p>
                        </div>
                      </div>
                    );
                  }
                })}

              <div ref={bottomRef} />
            </div>
          </div>
          {/* message send input */}

          <div className="message-sent-section   bg-white  d-flex justify-content-between">
            <div className="width-input position-relative">
              <div className="form-for-send-message ">
                <form onSubmit={onSubminValues}>
                  <input
                    type="text"
                    placeholder="Message"
                    className="
            sent-message-input chativa-br  w-100"
                    name="message"
                    value={message}
                    onKeyPress={(e) => {
                      e.key === "Enter" && sendMessage();
                    }}
                    onChange={(e) => onChangeValue(e)}
                  />
                </form>
              </div>
              <div className="icons-send-section1 d-flex text-white ">
                <div className="attach-icon icons-send-section ">
                  <ImAttachment className="chativa-extra" />
                </div>
                <div className="smily-icon icons-send-section">
                  <i className="far fa-smile chativa-extra"></i>
                </div>
              </div>
            </div>
            <div className="send-button">
              <button className="btn border" onClick={() => sendMessage()}>
                {!message ? (
                  <BiMicrophone className="chativa-fs-titles chativa-extra" />
                ) : (
                  <GrSend className="chativa-fs-titles chativa-extra" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSection;
