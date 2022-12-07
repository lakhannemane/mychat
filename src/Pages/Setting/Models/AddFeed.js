import { Modal } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";

const AddFeed = ({ isModalOpen, setIsModalOpen, id }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (values) => {
    console.log(values, "handleSubmit values");
  };

  return (
    <Modal
      title={id ? "Add Feed" : "Update Feed "}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose
      footer={false}
    >
      <Formik
        initialValues={{ title: "", Url: "" }}
        validate={(values) => {
          let errors = {};

          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              type="text"
              name="title"
              placeholder="Title"
              className="form-control field-input"
            />
            {id && (
              <Field
                type="text"
                name="Url"
                placeholder="Feed Url"
                className="form-control field-input"
              />
            )}

            <div className="button-save-section text-end ">
              <button
                type="submit"
                className=" chativa-btn chativa-btn-primary "
              >
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddFeed;
