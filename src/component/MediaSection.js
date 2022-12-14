import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { MdNotificationsNone, MdTimer } from "react-icons/md";
import { BiNote } from "react-icons/bi";

const MediaSection = () => {
  const [activeMedia, setActiveMedia] = useState({
    id: 5,
    media: "media file",
  });

  return (
    <div className="media-section">
      <div
        className="user-name-status py-2 header-chat"
        // style={{
        //   position: "sticky",
        //   top: "0",
        //   background: "#FFFFFF",
        //   zIndex: "1",
        // }}
      >
        <div className="chat-user-recent px-3   ">
          <div className="d-flex align-items-center">
            <div className="chat-img-user align-self-center position-relative me-3">
              <img
                src="http://chatvia-light.react.themesbrand.com/static/media/avatar-2.feb0f89de58f0ef9b424.jpg"
                alt=""
                className="rounded-circle user-image"
              />
            </div>
            <div className="user-name-message flex-grow-1 overflow-hidden">
              <h5 className=" chativa-fs-a  chativa-fs-a">
                Alren richard <br />
                <span className="chativa-extra chativa-fs-c">
                  Estate Agent Pro
                </span>
              </h5>
            </div>

            <div className="user-heaings-icons">
              <p className="chativa-extra">
                <IoSettingsOutline className="chativa-fs-b chativa-extra" />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* poratls section */}

      <div className="poratls-media-section d-flex justify-content-between w-100 ">
        <ul className="list-unstyled  media-portal  align-items-center w-100">
          <li
            className={`${
              activeMedia.id === 1 ? "active-potal" : ""
            } portal  chativa-br d-flex align-items-center justify-content-center`}
            onClick={() =>
              setActiveMedia({ id: 1, notification: "media notifiction" })
            }
          >
            {/* <span>5</span> */}
            <MdNotificationsNone />
          </li>
          <li
            className={`${
              activeMedia.id === 2 ? "active-potal" : ""
            } portal  chativa-br d-flex align-items-center justify-content-center`}
            onClick={() =>
              setActiveMedia({ id: 2, reminder: "media reminder" })
            }
          >
            {/* <span>5</span> */}
            <MdTimer />{" "}
          </li>
          <li
            className={`${
              activeMedia.id === 3 ? "active-potal" : ""
            } portal  chativa-br d-flex align-items-center justify-content-center`}
            onClick={() => setActiveMedia({ id: 3, Notes: "media notes" })}
          >
            {/* <span>5</span> */}
            <BiNote />{" "}
          </li>
          <li
            className={`${
              activeMedia.id === 4 ? "active-potal" : ""
            } portal  chativa-br d-flex align-items-center justify-content-center`}
            onClick={() =>
              setActiveMedia({ id: 4, calender: "media calender" })
            }
          >
            {/* <span>5</span> */}
            <i className="fa-regular fa-calendar-days"></i>
          </li>
          <li
            className={`${
              activeMedia.id === 5 ? "active-potal" : ""
            } portal  chativa-br d-flex align-items-center justify-content-center`}
            onClick={() => setActiveMedia({ id: 5, media: "media file" })}
          >
            {/* <span>5</span> */}
            <i className="fa-regular fa-images"></i>{" "}
          </li>
        </ul>
      </div>

      {/* <div className="poratls-section d-flex justify-content-between w-100">
        <div className="one-portal position-relative">
          <div className="google-message-notificaion">
            <p className="count-number text-white chativa-fw-5">5</p>
          </div>
          <div
            className={`${
              activeMedia.id === 1 ? "active-potal" : ""
            } portal  chativa-br d-flex align-items-center justify-content-center`}
            onClick={() =>
              setActiveMedia({ id: 1, notification: "media notifiction" })
            }
          >
          
          </div>
        </div>

        <div
          className={`${
            activeMedia.id === 2 ? "active-potal" : ""
          } portal  chativa-br d-flex align-items-center justify-content-center`}
          onClick={() => setActiveMedia({ id: 2, reminder: "media reminder" })}
        >
          {/* <FontAwesomeIcon icon="fa-regular fa-stopwatch" />
           */}
      {/* <MdTimer />
        </div>

        <div
          className={`${
            activeMedia.id === 3 ? "active-potal" : ""
          } portal  chativa-br d-flex align-items-center justify-content-center`}
          onClick={() => setActiveMedia({ id: 3, Notes: "media notes" })}
        >
          <BiNote />
        </div> */}

      {/* //   <div */}
      {/* //     className={`${ */}
      {/* //       activeMedia.id === 4 ? "active-potal" : ""
      //     } portal  chativa-br d-flex align-items-center justify-content-center`}
      //     onClick={() => setActiveMedia({ id: 4, calender: "media calender" })}
      //   >
      //     <i className="fa-regular fa-calendar-days"></i>
      //   </div> */}
      {/* //   <div */}
      {/* //     className={`${ */}
      {/* //       activeMedia.id === 5 ? "active-potal" : ""
      //     }   portal  chativa-br d-flex align-items-center justify-content-center`}
      //     onClick={() => setActiveMedia({ id: 5, media: "media file" })}
      //   >
      //     <i className="fa-regular fa-images"></i>
      //   </div> */}
      {/* // </div> */}

      {/* media file and links  */}

      {activeMedia.id === 1 ? (
        <>
          <div className="media-files-heading-btn mx-auto w-100 user-name-status pb-2">
            <h5 className="text-center chativa-primary chativa-fs-b chativa-fw-5">
              Notifications
            </h5>
          </div>
          <h6 className="media chativa-accent chativa-fs-a chativa-fw-5  mt-2 text-center">
            No Record Yet....
          </h6>
        </>
      ) : activeMedia.id === 2 ? (
        <>
          <div className="media-files-heading-btn mx-auto w-100 user-name-status pb-2">
            <h5 className="text-center chativa-primary   chativa-fs-b chativa-fw-5">
              Reminders
            </h5>
          </div>
          <h6 className="media chativa-accent chativa-fs-a chativa-fw-5  mt-2 text-center">
            No Record Yet....
          </h6>
        </>
      ) : activeMedia.id === 3 ? (
        <>
          <div className="media-files-heading-btn mx-auto w-100 user-name-status pb-2">
            <h5 className="text-center chativa-primary chativa-fs-b chativa-fw-5">
              Notes
            </h5>
          </div>
          <h6 className="media chativa-accent chativa-fs-a chativa-fw-5  mt-2 text-center">
            No Record Yet....
          </h6>
        </>
      ) : activeMedia.id === 4 ? (
        <>
          <div className="media-files-heading-btn mx-auto w-100 user-name-status pb-2">
            <h5 className="text-center chativa-primary chativa-fs-b chativa-fw-5">
              calender
            </h5>
          </div>
          <h6 className="media chativa-accent chativa-fs-a chativa-fw-5  mt-2 text-center">
            No Record Yet....
          </h6>
        </>
      ) : activeMedia.id === 5 ? (
        <div className="images-click">
          <div className="media-files-heading-btn mx-auto w-100 user-name-status pb-2">
            <h5 className="text-center chativa-primary chativa-fs-b chativa-fw-5">
              Media , Files and Links
            </h5>
          </div>

          {/* media property section */}
          <div className="media-property-section  medias-artice">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="media chativa-fs-a chativa-fw-5 ">
                Media <span className=" chativa-accent files-count">5</span>
              </h6>
              <p className="chativa-fs-14px chativa-danger chativa-fw-5 see-all">
                See All
              </p>
            </div>
            <div className="property-media-images  ">
              <div className="property-media-item">
                <img
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="first property"
                  className="media-property-images chativa-br"
                />
              </div>
              <div className="property-media-item">
                <img
                  src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="second property"
                  className="media-property-images chativa-br"
                />
              </div>
              <div className="property-media-item">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="third property"
                  className="media-property-images chativa-br"
                />
              </div>
            </div>
          </div>
          <div className="media-videos-section medias-artice">
            <div className="d-flex justify-content-between  align-items-center">
              <h6 className="media chativa-fs-a chativa-fw-5">
                Videos <span className="chativa-accent files-count">7</span>
              </h6>
              <p className="chativa-fs-14px chativa-danger chativa-fw-5 see-all">
                See All
              </p>
            </div>
            <div className="property-video-images  ">
              <div className="property-media-item">
                <img
                  src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt="first property"
                  className="media-property-images chativa-br"
                />
              </div>
              <div className="property-media-item">
                <img
                  src="https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="second property"
                  className="media-property-images chativa-br"
                />
              </div>
              <div className="property-media-item">
                <img
                  src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt="third property"
                  className="media-property-images chativa-br"
                />
              </div>
            </div>
          </div>

          {/* media links */}
          <div className="files-link medias-artice">
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="media chativa-fs-a chativa-fw-5">
                Files <span className=" chativa-accent files-count">2</span>
              </h6>
              <p className="chativa-fs-14px chativa-danger chativa-fw-5 see-all">
                See All
              </p>
            </div>
            <div className="title-and-link d-flex align-items-center">
              <div className="link-icons-section me-3 chativa-br">
                <i className="fa-solid fa-link chativa-fs-b"></i>
              </div>
              <div className="description">
                <h5 className="chativa-fs-a chativa-fw-5">Google</h5>
                <p className="chativa-extra">https://www.google.com</p>
              </div>
            </div>
            <div className="title-and-link d-flex align-items-center">
              <div className="link-icons-section me-3 chativa-br">
                <i className="fa-solid fa-link chativa-fs-b"></i>
              </div>
              <div className="description">
                <h5 className="chativa-fs-a chativa-fw-5">Dribble</h5>
                <p className="chativa-extra">https://www.drible.com</p>
              </div>
            </div>

            {/* <div className="title-and-link d-flex align-items-center">
          <div className="link-icons-section me-3 chativa-br">
            <p>
              <i className="fa-solid fa-link link-fille-icon"></i>
            </p>
          </div>
          <div className="description">
            <h5 className="chativa-fs-a chativa-fw-5">Figma</h5>
            <p className="chativa-extra">https://www.dribble.com</p>
          </div>
        </div> */}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MediaSection;
