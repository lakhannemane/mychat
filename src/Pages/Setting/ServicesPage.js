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
import { useLinkClickHandler } from "react-router-dom";
import { Tabs } from "antd";
import AddProduct from "./Models/AddProduct";
import Services from "./SettingPages/Services";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryList } from "../../Store/Slices/getCategorySlice";

const ServicesPage = ({ activeSetting, setActiveSetting }) => {


  const dispatch = useDispatch()
  const { category, status } = useSelector(state => state.category)

  console.log("data values are there", category)
  console.log("data values are there", status)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    // if (status === "loading") {
    dispatch(fetchCategoryList())
    // }
  }, [dispatch])
  return (
    <div className="chativa-bg-chat leftGlobal leftContainer py-4">
      <div className="row justify-content-center">
        <div className="col col-xl-10 col-12">

          {
            activeSetting.name === "info" ?
              <div className="row">
                <div className="col-8 ">


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
                        Prometteur Solution Pvt Ltd. | Top Web and Mobile App
                        Developement company in India
                      </h5>
                      <p>
                        <MdOutlineEdit className="chativa-fs-a" />
                      </p>
                    </div>

                    {/* orgnization type */}
                    <div className="orgnization-display-name d-flex justify-content-between mx-3">
                      <p className="chativa-primary">Software company</p>
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
                            {" "}
                            2228, EFC Tech Centre, 2nd Floor, J.K Infotech II ,
                            Hinjewadi - Phase 1", Near Ruby Hall Clinic, Hinjawadi"
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
                          <p className="chativa-secondary "> Add Service Area</p>
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
                                  <td>Sunday</td>
                                  <td>Closed</td>
                                </tr>
                                <tr>
                                  <td>Sunday</td>
                                  <td>Closed</td>
                                </tr>
                                <tr>
                                  <td>Sunday</td>
                                  <td>Closed</td>
                                </tr>
                                <tr>
                                  <td>Sunday</td>
                                  <td>Closed</td>
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
                          <p className="chativa-secondary"> Add Service Area</p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>

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
                                <tr>
                                  <td>11/08/09</td>
                                  <td>Closed</td>
                                </tr>
                                <tr>
                                  <td>11/92/12</td>
                                  <td>Closed</td>
                                </tr>
                                <tr>
                                  <td>11/92/12</td>
                                  <td>Closed</td>
                                </tr>
                                <tr>
                                  <td>11/92/12</td>
                                  <td>Closed</td>
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

                    {/* call number */}
                    <div className="orgnization-loction-name mx-4   my-4">
                      <div className="row">
                        <div className="col-lg-1">
                          <p className="icon-info-page chativa-fs-titles chativa-fw-7">
                            <IoCallSharp />
                          </p>
                        </div>
                        <div className="col-lg-10 mt-2">
                          <p className="chativa-secondary chativa-fs-a">08087555678</p>
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
                          <p className="chativa-secondary chativa-fs-a">prometteur</p>
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
                            http://www.prometteursolutions.com/
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
                            <h5 className="tag-hading">From the Bussiness</h5>
                            <p className="chativa-secondary chativa-fs-a">
                              Add Attributes
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
                            <h5 className="tag-hading">From the Bussiness</h5>
                            <p>Add Attributes</p>
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
                            <p className="chativa-secondary">
                              Custom Web and Mobile app development for Your Business
                              Our expertise in multiple business areas helps us to
                              develop web and mobile solutions tailored with care for
                              our clients. We develop projects from scratch or can
                              resume the project at any stage
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
                                <h5 className="tag-hading">From the Bussiness</h5>
                                <p className="chativa-secondary">Add Attributes</p>
                              </li>
                              <li>
                                <h5 className="tag-hading">From the Bussiness</h5>
                                <p className="chativa-secondary">Add Attributes</p>
                              </li>
                              <li>
                                <h5 className="tag-hading">From the Bussiness</h5>
                                <p className="chativa-secondary">Add Attributes</p>
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
                          <p className="chativa-secondary">
                            Prometteur Solutions is a leading global systems integrator
                            and business transformation consulting organization, focused
                            primarily on mobile and cloud-based app development
                            solutions in different verticals like E-Commerce,
                            Healthcare, Banking, Ed-Tech, Real estate, Hospitality,
                            Manufacturing, Telecommunications and
                            Agriculture.\nPrometteur helps companies innovate and
                            transform by leveraging its unique insights, differentiated
                            services and flexible partnering models. This has helped
                            customers reduce operating costs, gain competitive advantage
                            and generate new revenue streams.\nThe company is among the
                            top mobile application development companies in India, and
                            also a pioneer in web application development.
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
                          <p className="chativa-secondary"> Add opening date</p>
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
                          <p className="chativa-secondary"> Add Photos</p>
                        </div>
                        <div className="col-lg-1 text-end">
                          <p>
                            <MdOutlineEdit className="chativa-fs-a" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="google-bussiness-adds py-4 px-3">
                    <h5 className="chativa-accent">Your Bussiness is live in Google</h5>

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

              </div> : activeSetting.name === "services" ?
                <div className="row">
                  <div className="col-12 ">
                    <Services />
                  </div>
                </div> : activeSetting.name === "product" ?
                  <div className="row">
                    <div className="col-12 ">
                      <div className="product-section-bussiness  " >
                        <div className="heading-section-product">

                          <h5 className="product-page-heading">
                            Managae products
                          </h5>
                          <p className="subheading-product-section chativa-fs-a">
                            Let customers discovers your bussiness by adding your products to your bussiness profile on Google Search and Maps
                          </p>
                        </div>

                        <div className="buttons-product-manipulate ">
                          <button className="chativa-btn chativa-btn-primary" onClick={showModal}> Add Product</button>
                          <button className=" chativa-btn"> <IoEyeOutline className="me-2 " />see it on Google</button>

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
                                          <img src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" width="100%" />
                                        </div>
                                        <div className="hedaing-pricing px-2 pt-2">
                                          <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4 ">
                                            Brantford Project
                                          </h5>
                                          <p className="chativa-fs-a pt-2 chativa-common chativa-fw-7">$29.34 - $33.33</p>                                      </div>
                                      </div>
                                    </div>
                                    <div className="col-3">
                                      <div className="product ">
                                        <div className="product-image">
                                          <img src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" width="100%" />
                                        </div>
                                        <div className="hedaing-pricing px-2 pt-2">
                                          <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4">
                                            Chativa Project
                                          </h5>
                                          <p className="chativa-fs-a pt-2 chativa-common chativa-fw-7">$12.34 - $20.33</p>                                      </div>
                                      </div>
                                    </div><div className="col-3">
                                      <div className="product ">
                                        <div className="product-image">
                                          <img src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" width="100%" />
                                        </div>
                                        <div className="hedaing-pricing px-2 pt-2">
                                          <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4">
                                            Royle Court Project
                                          </h5>
                                          <p className="chativa-fs-a pt-2 chativa-common chativa-fw-7">$25.34 - $30.33</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-3">
                                      <div className="product ">
                                        <div className="product-image">
                                          <img src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" width="100%" />
                                        </div>
                                        <div className="hedaing-pricing px-2 pt-2">
                                          <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4">
                                            Royle Court Project
                                          </h5>
                                          <p className="chativa-fs-a pt-2 chativa-common  chativa-fw-7">$25.34 - $30.33</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-3">
                                      <div className="product ">
                                        <div className="product-image">
                                          <img src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" width="100%" />
                                        </div>
                                        <div className="hedaing-pricing px-2 pt-2">
                                          <h5 className="headiing-name chativa-fourth chativa-fs-b chativa-fw-4">
                                            Royle Court Project
                                          </h5>
                                          <p className="chativa-fs-a pt-2 chativa-common  chativa-fw-7">$25.34 - $30.33</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-3">
                                      <div className="product ">
                                        <div className="product-image">
                                          <img src="https://images.unsplash.com/photo-1573165231859-48b6a66b8b1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="" width="100%" />
                                        </div>
                                        <div className="hedaing-pricing px-2 pt-2">
                                          <h5 className="headiing-name chativa-fs-b chativa-fw-4">
                                            Royle Court Project
                                          </h5>
                                          <p className="chativa-fs-a pt-2 chativa-common  chativa-fw-7">$25.34 - $30.33</p>
                                        </div>
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </Tabs.TabPane>
                              <Tabs.TabPane tab="Software " key="2">
                                <div className="row-for-product">
                                  content-second
                                </div>
                              </Tabs.TabPane>
                              <Tabs.TabPane tab="All" key="3">
                                <div className="row-for-product">
                                  contet third
                                </div>
                              </Tabs.TabPane>
                            </Tabs>
                          </div>

                        </div>

                      </div>
                    </div>
                  </div> : activeSetting.name === "bussinesSetting" ? <div className="row">
                    <div className="col-12">
                      bussiness
                    </div>
                  </div> : "nothing"


          }




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
