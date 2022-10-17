import { Modal, Switch } from "antd";
import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from 'formik';


const AddProduct = ({ isModalOpen, setIsModalOpen }) => {

  const [showPrice, setShowPrice] = useState(false)
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values, resetForm) => {
    console.log("handlesubmit values", values)
    resetForm();
    handleCancel()
  }

  const onChange = (checked) => {
    console.log("checked", checked)
    setShowPrice(checked)
  }
  return (
    <>
      <Modal
        title="Add Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose
        footer={false}
      >
        <div className="drag-photo-section scrollbar">

          <div className="form-section ">
            <Formik
              initialValues={{ image: "", p_name: "", p_n_category: "", category: "", price: "", d_price: "", p_description: "", button_type: "" }}
              validate={values => {
                const errors = {};

              }}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values, resetForm);
              }}
            >
              {({ isSubmitting, resetForm }) => (
                <Form>

                  <div className="pick-photo ">
                    <p className="drag-line">Drag a photo here</p>
                    <p className="or">or</p>
                    <Field type="file" name="image" className="   input-field" placeholder="Product Name" />

                  </div>
                  {/* file */}
                  {/* <Field type="file" name="image" className="form-control   input-field" placeholder="Product Name" /> */}
                  {/* <ErrorMessage name="p_name" component="div" /> */}
                  <div className="product-name py-4">

                    <Field type="text" name="p_name" className="form-control   input-field" placeholder="Product Name" />
                    <p className="text-end sub-line-paragrpah">0/58</p>
                  </div>
                  {/* <ErrorMessage name="p_name" component="div" /> */}

                  <div className="product-category-section pb-5">

                    {/* select /create new  category */}
                    <Field as="select" name="p_n_category" className="form-control input-field">
                      <option value="">Create new category</option>
                      <option value="New category">New category</option>

                    </Field>
                    {/* <ErrorMessage name=" p_n_category" component="div" /> */}

                    {/* product category */}
                    <Field type="text" name="category" className="form-control input-field" placeholder="Product Category" />
                    {/* <ErrorMessage name="category" component="div" /> */}
                    <div className="examples d-flex justify-content-between mx-2" >
                      <p className="exmples-paragraph sub-line-paragrpah">Examples like Software project, and all</p>
                      <p className="text-end sub-line-paragrpah">0/58</p>



                    </div>
                  </div>

                  {/* ====================show price==================== */}
                  <div className="price-section pb-4">

                    <div className="show-price-section d-flex justify-content-between">
                      <h6 className="name-show-price chativa-forth chativa-fs-a">Show price Range</h6>
                      <Switch onChange={onChange} />
                    </div>


                    {!showPrice ?
                      <div>
                        < Field type="text" name="price" className="form-control input-field" placeholder="Product price (INR)" />
                        {/* <ErrorMessage name="price" component="div" /> */}
                        <p className="text-start sub-line-paragrpah ms-2">Optional</p>
                      </div>
                      :
                      <div className=" d-flex justify-content-between">

                        {/* show price  */}
                        <div>

                          < Field type="text" name="price" className="form-control input-field" placeholder="Product price (INR)" />
                          {/* <ErrorMessage name="price" component="div" /> */}
                          <p className="text-start sub-line-paragrpah ms-2">Optional</p>
                        </div>
                        <div>

                          <Field type="text" name="d_price" className="form-control input-field" placeholder="Product Discounted price (INR)" />
                          {/* <ErrorMessage name="d_price" component="div" /> */}
                          <p className="text-start sub-line-paragrpah ms-2">Optional</p>
                        </div>
                        {/* show discounteed price */}

                      </div>

                    }






                  </div>
                  {/* decription pf product */}
                  <Field as="textarea" rows={3} name="p_description" className="form-control input-field" placeholder="Product Discrption" />
                  <p className="text-start sub-line-paragrpah ms-2">Optional</p>



                  {/* add Button */}

                  <Field as="select" name="button_type" className="form-control input-field">
                    <option value="">Add Button</option>
                    <option value="buy">Buy</option>
                    <option value="sale">Sale</option>
                    <option value="add">Add</option>
                  </Field>


                  {/* mark as special */}
                  <div className="d-flex">

                    <Field type="checkbox" name="checked" value="One" />
                    <div className="mark-as-special pt-5 ms-2" >
                      <h6>Mark as Specail</h6>
                      <p className="sub-line-paragrpah pt-1">products marked special are shown at the top of the page</p>
                    </div>
                  </div>

                  <div className="button-save-section text-end ">'
                    <button type="submit" onSubmit={handleSubmit} className=" chativa-btn chativa-btn-primary mt-5">
                      Save
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>

      </Modal>
    </>
  );
};

export default AddProduct;
