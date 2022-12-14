import React, { useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiChevronRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { fetServiceList } from "../../../Store/Slices/serviceSlice";

const Services = (props) => {
  console.log("service page ", props);

  const dispatch = useDispatch();
  const service = useSelector((state) => state.service);

  console.log("ervice page", service);

  useEffect(() => {
    dispatch(fetServiceList());
  }, [dispatch]);

  // service.services.map((e) => {
  //   console.log("values", e.structuredServiceItem.serviceTypeId);
  // });
  return (
    <div className="setting-services-section">
      <div className="category-display-section ">
        <div className="company-type px-3 py-3">
          <h5 className="company-type-heading">Software Company</h5>
          <p className="sub-heaading-services">primary category</p>
        </div>

        <div className="categories-list-name-decription">
          <ul className="list-unstyled">
            {service.services &&
              service.services.map((ele) => {
                return (
                  <li className="category-item" key={ele.id}>
                    <div className="first-category px-3 py-3 d-flex justify-content-between align-items-center">
                      <div className="category-item-detail flex-grow">
                        <h5 className="category-name text-capitalize">
                          {ele.structuredServiceItem.serviceTypeId
                            .split("_")
                            .join(" ")
                            .substring(12)}
                        </h5>
                        <p className="description chativa-secondary chativa-fs-a">
                          {ele.structuredServiceItem.description
                            ? ele.structuredServiceItem.description
                            : ""}
                        </p>
                      </div>
                      <div className="service-category-icons">
                        <HiChevronRight />
                      </div>
                    </div>
                  </li>
                );
              })}

            {/* <li className="category-item">
              <div className="first-category px-3 py-3 d-flex justify-content-between align-items-center">
                <div className="category-item-detail flex-grow">
                  <h5 className="category-name">
                    Big data consulting & Implementation
                  </h5>
                </div>
                <div className="service-category-icons">
                  <HiChevronRight />
                </div>
              </div>
            </li>
            <li className="category-item">
              <div className="first-category px-3 py-3 d-flex justify-content-between align-items-center">
                <div className="category-item-detail flex-grow">
                  <h5 className="category-name">Bussiness to Bussiness</h5>
                </div>
                <div className="service-category-icons">
                  <HiChevronRight />
                </div>
              </div>
            </li>
            <li className="category-item">
              <div className="first-category px-3 py-3 d-flex justify-content-between  align-items-center">
                <div className="category-item-detail flex-grow">
                  <h5 className="category-name">Cloud Services</h5>
                </div>
                <div className="service-category-icons">
                  <HiChevronRight />
                </div>
              </div>
            </li>

            <li className="category-item">
              <div className="first-category px-3 py-3 d-flex justify-content-between align-items-center">
                <div className="category-item-detail flex-grow">
                  <h5 className="category-name">Computer Upgrades</h5>
                </div>
                <div className="service-category-icons">
                  <HiChevronRight />
                </div>
              </div>
            </li>

            <li className="category-item">
              <div className="first-category px-3 py-3 d-flex justify-content-between align-items-center">
                <div className="category-item-detail flex-grow">
                  <h5 className="category-name">Date Center Management</h5>
                </div>
                <div className="service-category-icons">
                  <HiChevronRight />
                </div>
              </div>
            </li>
            <li className="category-item">
              <div className="first-category px-3 py-3 d-flex justify-content-between align-items-center">
                <div className="category-item-detail flex-grow">
                  <h5 className="category-name">
                    EnterPrices Software developrment
                  </h5>
                  <p className="description chativa-secondary chativa-fs-a">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ratione officia magni error modi impedit, fuga facere quam
                    dolore natus doloribus reiciendis rem in voluptatibus
                    quibusdam nesciunt laudantium consequatur quod?
                  </p>
                </div>
                <div className="service-category-icons">
                  <HiChevronRight />
                </div>
              </div>
            </li>
            <li className="category-item">
              <div className="first-category px-3 py-3 d-flex justify-content-between align-items-center">
                <div className="category-item-detail flex-grow">
                  <h5 className="category-name">Application developement</h5>
                  <p className="description chativa-secondary chativa-fs-a">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ratione officia magni error modi impedit, fuga facere quam
                    dolore natus doloribus reiciendis rem in voluptatibus
                    quibusdam nesciunt laudantium consequatur quod?
                  </p>
                </div>
                <div className="service-category-icons">
                  <HiChevronRight />
                </div>
              </div>
            </li>
            <li className="category-item">
              <div className="first-category px-3 py-3 d-flex justify-content-between align-items-center">
                <div className="category-item-detail flex-grow">
                  <h5 className="category-name">Application developement</h5>
                  <p className="description chativa-secondary chativa-fs-a">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ratione officia magni error modi impedit, fuga facere quam
                    dolore natus doloribus reiciendis rem in voluptatibus
                    quibusdam nesciunt laudantium consequatur quod?
                  </p>
                </div>
                <div className="service-category-icons">
                  <HiChevronRight />
                </div>
              </div>
            </li>

            <li className="category-item">
              <div className="first-category px-3 py-3 d-flex justify-content-between ">
                <div className="category-item-detail flex-grow">
                  <h5 className="category-name">Application developement</h5>
                  <p className="description chativa-secondary chativa-fs-a">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                    ratione officia magni error modi impedit, fuga facere quam
                    dolore natus doloribus reiciendis rem in voluptatibus
                    quibusdam nesciunt laudantium consequatur quod?
                  </p>
                </div>
                <div className="service-category-icons">
                  <HiChevronRight />
                </div>
              </div>
            </li> */}
          </ul>

          <div className=" px-3 ">
            <div className="content-of-category">
              <h5 className="add-category-btn ">
                <BsPlusLg /> Add Another Services
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="add-anthor-category py-4">
        <button className="chativa-btn chativa-common">
          Add another bussiness category
        </button>
      </div>
    </div>
  );
};

export default Services;
