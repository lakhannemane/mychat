import React from "react";

const ChatSection = () => {
  return (
    <div className="messages-section chativa-bg-chat ">
      {/* user-name-and-status */}

      <div className="mx-2">

        <div className="user-name-status ">
          <div className="chat-user-recent px-3 py-2   ">
            <div className="d-flex align-items-center ">
              <div className="chat-img-user align-self-center position-relative me-3">
                <img
                  src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                  alt=""
                  className="rounded-circle user-image"
                />
              </div>
              <div className="user-name-message flex-grow-1 overflow-hidden me-auto">
                <h5 className=" chativa-fourth  chativa-fs-a">Alren richard </h5>
                <p className="chativa-extra chativa-fs-c">Online</p>
              </div>

              <div className="user-heaings-icons">
                <div className="icons-user-header d-flex w-50 justify-content-center">
                  <div className="serch user-header-icons ">

                  </div>
                  <div className="call user-header-icons">
                    <i class="fas fa-phone-alt chativa-extra "></i>
                  </div>
                  <div className="video user-header-icons">
                    <i class="fas fa-video chativa-extra"></i>
                  </div>
                  <div className="dots user-header-icons">
                    <i class="fa-regular fa-ellipsis chativa-extra"></i>
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
                <p className="client chativa-secondary chativa-fs-b">
                  Hello, how are you Jacob?{" "}
                </p>
              </div>
            </div>
            {/* day status */}
            <div className="  d-flex justify-content-center">
              <div className="day-informartion">
                <p className="day  chativa-br">yesterday</p>
              </div>
            </div>
            <div className=" w-75 mx-end d-flex justify-content-right">
              <div className="user-message msg">
                <p className="client chativa-secondary chativa-fs-b">
                  Can you find a house for me at an affordable price?{" "}
                </p>
              </div>
            </div>
            <div className=" w-75 mx-end d-flex justify-content-right">
              <div className="user-message msg">
                <p className="client chativa-secondary chativa-fs-b">
                  I’II give you a nice commission if you can find it.{" "}
                </p>
              </div>
            </div>
            <div className=" w-75 ms-auto d-flex justify-content-end ">
              <div className="your-message">
                <p className="you chativa-secondary chativa-fs-b">
                  Hello, Mark I’m fine thank you how are you{" "}
                </p>
              </div>
            </div>
            <div className=" w-75 mx-end d-flex justify-content-right ">
              <div className="user-message msg">
                <p className="client chativa-secondary chativa-fs-b">
                  hi jacob did you find the affordable house i told you{" "}
                </p>
              </div>
            </div>
            <div className=" w-75 mx-end d-flex justify-content-right">
              <div className="user-message msg">
                <p className="client chativa-secondary chativa-fs-b">
                  Hello, how are you Jacob?{" "}
                </p>
              </div>
            </div>
            <div className="w-75 mx-end d-flex justify-content-right">
              <div className="user-message msg">
                <p className="client chativa-secondary chativa-fs-b">
                  Can you find a house for me at an affordable price?{" "}
                </p>
              </div>
            </div>
            <div className="w-75 mx-end d-flex justify-content-right">
              <div className="user-message msg">
                <p className="client chativa-secondary chativa-fs-b">
                  I’II give you a nice commission if you can find it.{" "}
                </p>
              </div>
            </div>
            <div className="w-75 ms-auto d-flex justify-content-end">
              <div className="your-message">
                <p className="you chativa-secondary chativa-fs-b">
                  Hello, Mark I’m fine thank you how are you{" "}
                </p>
              </div>
            </div>
            {/* day status */}
            <div className="d-flex justify-content-center ">
              <div className="day-informartion">
                <p className="day chativa-br">Today</p>
              </div>
            </div>

            <div className="w-75 mx-end ">
              <div className="user-message msg">
                <p className="client chativa-secondary chativa-fs-b">
                  hi jacob did you find the affordable house i told you hi jacob
                  did you find the affordable house i told you{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* message send input */}

        <div className="message-sent-section w-100 ">
          <div className="d-flex">
            <div className="form-for-send-message ">
              <form>
                <input
                  type="text"
                  placeholder="Enter message here"
                  className="
            sent-message-input chativa-br  "
                />
              </form>
            </div>
            {/* <div className="icons-send-section1 d-flex ">
            <div className="attach-icon icons-send-section ">
              <i class="fa-regular fa-paperclip"></i>
            </div>
            <div className="smily-icon icons-send-section">
              <i class="far fa-smile"></i>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
