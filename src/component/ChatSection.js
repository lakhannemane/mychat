import React, { useState } from "react";
import {
  BsThreeDots,
  BsTelephone,
  BsCameraVideo,
  BsSearch,
} from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { GrSend } from "react-icons/gr";
import { ImAttachment } from "react-icons/im";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const ChatSection = ({ userData }) => {

  console.log("chatsection data in chat page", userData)
  const [message, setMessage] = useState();
  const onChangeValue = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    setMessage(e.target.value);
  };

  const onSubminValues = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="messages-section chativa-bg-chat ">
        {/* user-name-and-status */}

        <div className="mx-3">
          <div className="user-name-status ">
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
                    <p
                      className="fw-bold  mt-4 pt-2 fs-3"
                      style={{ color: "#7B76CD" }}
                    >
                      {userData.name.charAt(0).toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="user-name-message flex-grow-1 overflow-hidden me-auto">
                  <h5 className=" chativa-fourth  chativa-fs-a">
                    {userData.name}
                  </h5>
                  <p className="chativa-extra chativa-fs-c">Online</p>
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
                      <BsThreeDots className="chativa-fs-b chativa-extra" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* message-section-field */}
          <div className="message-field mt-5 chatscrollbar " id="chatscrollbar">
            <div className="row">
              <div className="d-flex ">
                <div className="user-message msg">
                  <p className="client chativa-secondarychativa-fs-a">
                    Hello, how are you Jacob?{" "}
                  </p>
                </div>
              </div>
              {/* day status */}
              <div className="  d-flex justify-content-center">
                <div className="day-informartion">
                  <p className="day  chativa-br chativa-fs-a">yesterday</p>
                </div>
              </div>
              <div className=" w-75 mx-end d-flex justify-content-right">
                <div className="user-message msg">
                  <p className="client chativa-secondarychativa-fs-a">
                    Can you find a house for me at an affordable price?{" "}
                  </p>
                </div>
              </div>
              <div className=" w-75 mx-end d-flex justify-content-right">
                <div className="user-message msg">
                  <p className="client chativa-secondarychativa-fs-a">
                    I’II give you a nice commission if you can find it.{" "}
                  </p>
                </div>
              </div>
              <div className=" w-75 ms-auto d-flex justify-content-end ">
                <div className="your-message">
                  <p className="you chativa-secondarychativa-fs-a">
                    Hello, Mark I’m fine thank you how are you{" "}<span><IoCheckmarkDoneSharp style={{ color: "#32a7ff" }} /></span>
                  </p>
                </div>
              </div>
              <div className=" w-75 mx-end d-flex justify-content-right ">
                <div className="user-message msg">
                  <p className="client chativa-secondarychativa-fs-a">
                    hi jacob did you find the affordable house i told you{" "}
                  </p>
                </div>
              </div>
              <div className=" w-75 mx-end d-flex justify-content-right">
                <div className="user-message msg">
                  <p className="client chativa-secondarychativa-fs-a">
                    Hello, how are you Jacob?{" "}
                  </p>
                </div>
              </div>
              <div className="w-75 mx-end d-flex justify-content-right">
                <div className="user-message msg">
                  <p className="client chativa-secondarychativa-fs-a">
                    Can you find a house for me at an affordable price?{" "}
                  </p>
                </div>
              </div>
              <div className="w-75 mx-end d-flex justify-content-right">
                <div className="user-message msg">
                  <p className="client chativa-secondarychativa-fs-a">
                    I’II give you a nice commission if you can find it.{" "}
                  </p>
                </div>
              </div>
              <div className="w-75 ms-auto d-flex justify-content-end">
                <div className="your-message">
                  <p className="you chativa-secondarychativa-fs-a ">
                    Hello, Mark I’m fine thank you how are you{" "} <span><IoCheckmarkDoneSharp style={{ color: "#32a7ff" }} /></span>
                  </p>
                </div>
              </div>
              {/* day status */}
              <div className="d-flex justify-content-center ">
                <div className="day-informartion">
                  <p className="day chativa-br chativa-fs-a">Today</p>
                </div>
              </div>

              <div className="w-75 mx-end ">
                <div className="user-message msg">
                  <p className="client chativa-secondarychativa-fs-a">
                    hi jacob did you find the affordable house i told you hi
                    jacob did you find the affordable house i told you{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* message send input */}

        <div className="message-sent-section   bg-white  d-flex justify-content-between">
          <div className="width-input position-relative">
            <div className="form-for-send-message ">
              <form onSubmit={onSubminValues}>
                <input
                  type="text"
                  placeholder="Enter message here"
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
            <button className="btn border">
              {!message ? (
                <BiMicrophone className="chativa-fs-titles chativa-extra" />
              ) : (
                <GrSend className="chativa-fs-titles chativa-extra" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSection;
