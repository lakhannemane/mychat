import React, { useEffect, useState } from "react";
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

const ChatSection = ({ userData }) => {
  const dispatch = useDispatch();
  const chatHistory = useSelector(Allchat);

  const [render, setRender] = useState(false);
  console.log("chat history getting from store", chatHistory.messages);
  console.log("chatsection data in chat page", userData);
  const [message, setMessage] = useState();
  const onChangeValue = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
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
          label: <a target="/chat">Home</a>,
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
        conversationId: userData.conversationId,
        message: message,
      })
    );
    setMessage("");
    setRender(true);
  };

  useEffect(() => {
    dispatch(fetchChat(userData.conversationId));
    setRender(false);
  }, [render]);
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
                      {/* {chatHistory &&
                        chatHistory?.messages[0].displayName
                          .charAt(0)
                          .toUpperCase()} */}
                    </p>
                  </div>
                </div>
                <div className="user-name-message flex-grow-1 overflow-hidden me-auto">
                  <h5 className=" chativa-fourth  chativa-fs-a">
                    {/* {chatHistory && chatHistory?.messages[0].displayName} */}
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
              {chatHistory?.messages?.map((ele, index) => {
                if (ele.displayName === "Prometteur Solutions Pvt Ltd") {
                  return (
                    <div className="w-75 ms-auto d-flex justify-content-end">
                      <div className="your-message">
                        <p className="you chativa-secondarychativa-fs-a ">
                          {ele.messageText}
                          <span>
                            {/* <IoCheckmarkDoneSharp
                              style={{ color: "#32a7ff" }}
                            /> */}
                          </span>
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
              {/* day status */}
              {/* <div className="  d-flex justify-content-center">
                <div className="day-informartion">
                  <p className="day  chativa-br chativa-fs-a">yesterday</p>
                </div>
              </div> */}
              {/* <div className=" w-75 mx-end d-flex justify-content-right">
                <div className="user-message msg">
                  <p className="client chativa-secondarychativa-fs-a">
                    Can you find a house for me at an affordable price?{" "}
                  </p>
                </div>
              </div>

              <div className="w-75 ms-auto d-flex justify-content-end">
                <div className="your-message">
                  <p className="you chativa-secondarychativa-fs-a ">
                    Hello, Mark I’m fine thank you how are you{" "}
                    <span>
                      <IoCheckmarkDoneSharp style={{ color: "#32a7ff" }} />
                    </span>
                  </p>
                </div>
              </div> */}
              {/* day status */}
              {/* <div className="d-flex justify-content-center ">
                <div className="day-informartion">
                  <p className="day chativa-br chativa-fs-a">Today</p>
                </div>
              </div> */}
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
