import { Modal } from "antd";
import React, { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from 'formik';


const AddProduct = ({ isModalOpen, setIsModalOpen }) => {
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
        <div className="drag-photo-section">

          <div className="form-section ">
            <Formik
              initialValues={{ image: "", p_name: "", p_n_category: "", category: "", price: "", d_price: "" }}
              validate={values => {
                const errors = {};

              }}
              onSubmit={(values, { resetForm }) => {
                handleSubmit(values, resetForm);
              }}
            >
              {({ isSubmitting, resetForm }) => (
                <Form>

                  <div className="pick-photo">
                    <p className="drag-line">Drag a photo here</p>
                    <p className="or">or</p>
                    <Field type="file" name="image" className="   input-field" placeholder="Product Name" />

                  </div>
                  {/* file */}
                  {/* <Field type="file" name="image" className="form-control   input-field" placeholder="Product Name" /> */}
                  {/* <ErrorMessage name="p_name" component="div" /> */}

                  <Field type="text" name="p_name" className="form-control   input-field" placeholder="Product Name" />
                  {/* <ErrorMessage name="p_name" component="div" /> */}


                  {/* select /create new  category */}
                  <Field type="text" name="p_n_category" className="form-control  input-field" placeholder="Create a new Category" />
                  {/* <ErrorMessage name=" p_n_category" component="div" /> */}

                  {/* product category */}
                  <Field type="text" name="category" className="form-control input-field" placeholder="Product Category" />
                  {/* <ErrorMessage name="category" component="div" /> */}

                  {/* show price  */}
                  <Field type="text" name="price" className="form-control input-field" placeholder="Product price (INR)" />
                  {/* <ErrorMessage name="price" component="div" /> */}
                  {/* show discounteed price */}
                  <Field type="text" name="d_price" className="form-control input-field" placeholder="Product Discounted price (INR)" />
                  {/* <ErrorMessage name="d_price" component="div" /> */}

                  <button type="submit" onSubmit={handleSubmit} className="form-control add-product mt-5">
                    Add product
                  </button>
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
