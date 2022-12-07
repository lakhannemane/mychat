import React, { useEffect, useState } from "react";
import {
  MdOutlineEdit,
  MdOutlineMoreTime,
  MdPlaylistPlay,
  MdShareLocation,
} from "react-icons/md";
import { GoLocation, GoMention } from "react-icons/go";
import { BiCalendarEvent, BiTimeFive, BiWorld } from "react-icons/bi";
import {
  IoBasketOutline,
  IoCallSharp,
  IoEyeOutline,
  IoLinkSharp,
  IoListOutline,
} from "react-icons/io5";
import { TbCameraPlus } from "react-icons/tb";
import { BsTag } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ImShare2 } from "react-icons/im";
import { Tabs } from "antd";
import AddProduct from "./Models/AddProduct";
import Services from "./SettingPages/Services";
import { useDispatch, useSelector } from "react-redux";
// import { fetchHours } from "../../Store/Slices/getTotalhoursSlice";
// import { fetServiceList } from "../../Store/Slices/serviceSlice";
import { fetchInfo } from "../../Store/Slices/getCategorySlice";
import moment from "moment";

const ServicesPage = ({
  activeSetting,
  setActiveSetting,
  portalActive,
  setPortalActive,
}) => {
  const dispatch = useDispatch();
  const Information = useSelector((state) => state.Info.category);

  console.log("information value ", Information);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  // localStorage.setItem("data", JSON.stringify(Information))

  useEffect(() => {
    if (portalActive.portal === "Google") {
      dispatch(fetchInfo());
    }
  }, [dispatch]);

  return (
    <div className="chativa-bg-chat leftGlobal leftContainer py-4">
      <div className="row justify-content-center">
        <div className="col col-xl-10 col-12">
          {activeSetting.name === "info" ? (
            <div className="row">
              <div className="col-8 ">
                {Information.length !== 0 && (
                  <div className=" bg-white border chativa-br">
                    <div className="bussiness-image w-100 ">
                      <img
                        src="https://images.ctfassets.net/pdf29us7flmy/4nQKDdpXBwuQA24HV6PuC4/9ad6d054d76e271e69790c38cfb0ac8d/Screen_Shot_2022-06-06_at_11.53.36_AM.png?w=720&q=100&fm=jpg"
                        alt=""
                        className="w-100 service-info-image"
                      />
                    </div>
                    {/* orgnization name */}
                    <div className="orgnization-name d-flex justify-content-between mx-3">
                      <h5 className="orgnization-main-name">
                        {Information.title}
                      </h5>
                      <p>
                        <MdOutlineEdit className="chativa-fs-a" />
                      </p>
                    </div>

                    {/* orgnization type */}
                    <div className="orgnization-display-name d-flex justify-content-between mx-3">
                      <p className="chativa-primary">
                        {Information.categories.primaryCategory.displayName}
                      </p>
                      <p>
                        <MdOutlineEdit className="chativa-fs-a" />
                      </p>
                    </div>

                    <hr />
                    {/* Location */}

                    <div className="orgnization-loction-name mx-4">
                      <div className="row">
                        <div className="col-1">
                          <div className="icon-page">
                            <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                              <GoLocation />
                            </p>
                          </div>
                        </div>
                        <div className="col-10">
                          <p className="chativa-secondary">
                            {Information.storefrontAddress.addressLines}
                          </p>
                        </div>
                        <div className="col-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/*  */}
                    <div className="orgnization-loction-name  mx-4 my-4">
                      <div className="row">
                        <div className="col-lg-1 ">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <MdShareLocation />
                          </p>
                        </div>
                        <div className="col-10 px-2 mt-2">
                          <p className="chativa-secondary ">
                            {" "}
                            Add Service Area
                          </p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="orgnization-loction-name  mx-4   my-4">
                      <div className="row">
                        <div className="col-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <BiTimeFive />
                          </p>
                        </div>
                        <div className="col-10 mt-2">
                          <div className="table  ">
                            <table className="w-100">
                              <thead>
                                <tr></tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="chativa-secondary">SUNDAY</td>
                                  <td className="chativa-secondary">Closed</td>
                                </tr>
                                {Information.regularHours.periods.map(
                                  (ele, index) => {
                                    return (
                                      <tr key={index}>
                                        <td className="chativa-secondary">
                                          {ele.openDay}
                                        </td>
                                        <td className="text-upperCase chativa-secondary">
                                          {moment(
                                            `${ele.openTime.hours}`,
                                            "hh"
                                          ).format("LT")}{" "}
                                          -{" "}
                                          {moment(
                                            `${ele.closeTime.hours}`,
                                            "hh"
                                          ).format("LT")}
                                        </td>
                                      </tr>
                                    );
                                  }
                                )}
                                <tr>
                                  <td className="chativa-secondary">
                                    SATUREDAY
                                  </td>
                                  <td className="chativa-secondary">Closed</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="orgnization-loction-name mx-4    my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <MdOutlineMoreTime />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <p className="chativa-secondary">
                            {" "}
                            Add or Edit Product
                          </p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* dates-closed */}
                    <div className="orgnization-loction-name mx-4   my-4">
                      <div className="row">
                        <div className="col-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <BiCalendarEvent />
                          </p>
                        </div>
                        <div className="col-10 mt-2">
                          <div className="table  ">
                            <table className="w-100">
                              <thead>
                                <tr></tr>
                              </thead>
                              <tbody>
                                {Information.specialHours.specialHourPeriods.map(
                                  (ele, index) => {
                                    return (
                                      <tr key={index}>
                                        <td className="chativa-secondary ">
                                          {ele.startDate.year}/
                                          {ele.startDate.month}/
                                          {ele.startDate.day}
                                        </td>
                                        <td className="chativa-secondary ">
                                          {ele.closed === true ? "Closed" : ""}
                                        </td>
                                      </tr>
                                    );
                                  }
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="col-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* call number */}
                    <div className="orgnization-loction-name mx-4   my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <IoCallSharp />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <p className="chativa-secondary chativa-fs-a">
                            {Information.phoneNumbers.primaryPhone}
                          </p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* menition orgnizatian */}
                    <div className="orgnization-loction-name mx-4   my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <GoMention />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <p className="chativa-secondary chativa-fs-a">
                            prometteur
                          </p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* email */}
                    <div className="orgnization-loction-name mx-4   my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <BiWorld />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <p className="chativa-secondary chativa-fs-a">
                            {Information.websiteUri}
                          </p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* appointment link */}
                    <div className="orgnization-loction-name mx-4   my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <IoLinkSharp />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <div className="heading-subscription">
                            <h5 className="tag-hading">Apointment Link</h5>
                            <p className="chativa-secondary chativa-fs-a">
                              Add link
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* products */}
                    <div className="orgnization-loction-name mx-4   my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            {" "}
                            <IoBasketOutline />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <div className="products-heading-subscription">
                            <h5 className="tag-hading">Products</h5>
                            <p className="chativa-secondary chativa-fs-a">
                              Add or edit products
                            </p>
                          </div>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* services */}
                    <div className="orgnization-loction-name mx-4   my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <IoListOutline />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <div className="services">
                            <h5 className="services-name-heading">Services</h5>
                            <h6 className="services-company-status">
                              Software company
                            </h6>
                            {Information.serviceItems.map((ele, index) => {
                              return (
                                <p className="chativa-secondary" key={index}>
                                  {ele.structuredServiceItem.serviceTypeId
                                    .split("_")
                                    .join(" ")
                                    .substring(12)
                                    .toUpperCase()}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* tags section */}
                    <div className="orgnization-loction-name mx-4   my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <BsTag />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <div className="tag-headng-description">
                            <ul className="list-unstyled">
                              <li>
                                <h5 className="tag-hading">
                                  From the Bussiness
                                </h5>
                                <p className="chativa-secondary chativa-fs-a font-italic">
                                  Add Attributes
                                </p>
                              </li>
                              <li>
                                <h5 className="tag-hading">
                                  From the Bussiness
                                </h5>
                                <p className="chativa-secondary chativa-fs-a font-italic">
                                  Add Attributes
                                </p>
                              </li>
                              <li>
                                <h5 className="tag-hading">
                                  From the Bussiness
                                </h5>
                                <p className="chativa-secondary chativa-fs-a font-italic">
                                  Add Attributes
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-1 text-end  my-4">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* prometteur description */}
                    <div className="orgnization-loction-name mx-4  my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <MdPlaylistPlay />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <p className="chativa-secondary chativa-fs-a">
                            {Information.profile.description}
                          </p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* add openning date */}
                    <div className="orgnization-loction-name mx-4  my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <BiCalendarEvent />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <p className="chativa-secondary chativa-fs-a">
                            {" "}
                            Add opening date
                          </p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* add  photos */}
                    <div className="orgnization-loction-name mx-4  my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <TbCameraPlus />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <p className="chativa-secondary  chativa-fs-a font-italic">
                            {" "}
                            Add Photos
                          </p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="col-4">
                <div className="google-bussiness-adds py-4 px-3">
                  <h5 className="chativa-accent">
                    Your Bussiness is live in Google
                  </h5>

                  <div className="list-for-function ">
                    <ul className="list-unstyled  mt-4">
                      <li className="my-3 chativa-fs-a">
                        <FcGoogle className="me-2 fs-5" /> view on Search
                      </li>
                      <li className="my-3 chativa-fs-a">
                        <FcGoogle className="me-2 fs-5" /> view on Maps
                      </li>
                      <li className="my-3  chativa-fs-a">
                        <ImShare2 className="me-2 fs-5" />
                        Share your Bussiness Profile
                      </li>
                    </ul>
                  </div>

                  <hr />
                </div>
              </div>
            </div>
          ) : activeSetting.name === "services" ? (
            <div className="row">
              <div className="col-12 ">
                <Services />
              </div>
            </div>
          ) : activeSetting.name === "product" ? (
            <div className="row">
              <div className="col-12 ">
                <div className="product-section-bussiness  ">
                  <div className="heading-section-product">
                    <h5 className="product-page-heading">Managae products</h5>
                    <p className="subheading-product-section chativa-fs-a">
                      Let customers discovers your bussiness by adding your
                      products to your bussiness profile on Google Search and
                      Maps
                    </p>
                  </div>

                  <div className="buttons-product-manipulate ">
                    <button
                      className="chativa-btn chativa-btn-primary"
                      onClick={showModal}
                    >
                      {" "}
                      Add Product
                    </button>
                    <button className=" chativa-btn">
                      {" "}
                      <IoEyeOutline className="me-2 " />
                      see it on Google
                    </button>
                  </div>
                  <div className="tablist-product ">
                    <div className="tablist-product-menu">
                      <Tabs defaultActiveKey="1">
                        <Tabs.TabPane tab="All Products" key="1">
                          <div className="row-for-product">
                            <div className="row">
                              <div className="col-3 ">
                                <div className="product ">
                                  <div className="product-image">
                                    <img
                                      src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                                      alt=""
                                      width="100%"
                                    />
                                  </div>
                                  <div className="hedaing-pricing px-2 pt-2">
                                    <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4 ">
                                      Brantford Project
                                    </h5>
                                    <p className="chativa-fs-a pt-2 chativa-common chativa-fw-7">
                                      $29.34 - $33.33
                                    </p>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="product ">
                                  <div className="product-image">
                                    <img
                                      src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                                      alt=""
                                      width="100%"
                                    />
                                  </div>
                                  <div className="hedaing-pricing px-2 pt-2">
                                    <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4">
                                      Chativa Project
                                    </h5>
                                    <p className="chativa-fs-a pt-2 chativa-common chativa-fw-7">
                                      $12.34 - $20.33
                                    </p>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="product ">
                                  <div className="product-image">
                                    <img
                                      src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                                      alt=""
                                      width="100%"
                                    />
                                  </div>
                                  <div className="hedaing-pricing px-2 pt-2">
                                    <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4">
                                      Royle Court Project
                                    </h5>
                                    <p className="chativa-fs-a pt-2 chativa-common chativa-fw-7">
                                      $25.34 - $30.33
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="product ">
                                  <div className="product-image">
                                    <img
                                      src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                                      alt=""
                                      width="100%"
                                    />
                                  </div>
                                  <div className="hedaing-pricing px-2 pt-2">
                                    <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4">
                                      Royle Court Project
                                    </h5>
                                    <p className="chativa-fs-a pt-2 chativa-common  chativa-fw-7">
                                      $25.34 - $30.33
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="product ">
                                  <div className="product-image">
                                    <img
                                      src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                                      alt=""
                                      width="100%"
                                    />
                                  </div>
                                  <div className="hedaing-pricing px-2 pt-2">
                                    <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4">
                                      Royle Court Project
                                    </h5>
                                    <p className="chativa-fs-a pt-2 chativa-common  chativa-fw-7">
                                      $25.34 - $30.33
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-3">
                                <div className="product ">
                                  <div className="product-image">
                                    <img
                                      src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                                      alt=""
                                      width="100%"
                                    />
                                  </div>
                                  <div className="hedaing-pricing px-2 pt-2">
                                    <h5 className="headiing-name chativa-fs-b chativa-fw-4">
                                      Royle Court Project
                                    </h5>
                                    <p className="chativa-fs-a pt-2 chativa-common  chativa-fw-7">
                                      $25.34 - $30.33
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="Software " key="2">
                          <div className="row-for-product">content-second</div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="All" key="3">
                          <div className="row-for-product">contet third</div>
                        </Tabs.TabPane>
                      </Tabs>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : activeSetting.name === "bussinesSetting" ? (
            <div className="row">
              <div className="col-12">bussiness</div>
            </div>
          ) : (
            "nothing"
          )}

          {/* =====================footer============= */}
          <div className="row justify-content-center">
            <div className="col-5">
              <div className="row">
                <div className="col-12">
                  <div className="footer d-flex justify-content-between pt-5 position-sticky">
                    <p className="copyright">&copy;2022 Googgle </p>
                    <p className="copyright">Terms </p>
                    <p className="copyright">Privacy & policy </p>
                    <p className="copyright">Contact Policy</p>
                    <p className="copyright">Help</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AddProduct isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
    </div>
  );
};

export default ServicesPage;
