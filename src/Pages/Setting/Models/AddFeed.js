import { Modal } from "antd";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { addFeed, editFeed } from "../../../Store/Slices/FeedSlice/Feedslice";

const AddFeed = ({ isModalOpen, setIsModalOpen, id, element }) => {
  const dispatch = useDispatch();
  console.log("element", element);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  console.log("id get from sidebar", id);

  const handleSubmit = (values) => {
    console.log(values);
    if (id) {
      // update
      dispatch(editFeed(values));
      setIsModalOpen(false);
    } else {
      // add
      dispatch(addFeed(values));
      setIsModalOpen(false);
    }
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
      {id ? (
        <Formik
          initialValues={{ feed_id: id?._id, title: id?.title }}
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

              <div className="button-save-section text-end ">
                <button
                  type="submit"
                  className=" chativa-btn chativa-btn-primary"
                  onKeyPress={(event) => {
                    event.key === "Enter" && handleSubmit();
                  }}
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik
          initialValues={{ account_id: element, title: "", url: "" }}
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

              <Field
                type="text"
                name="url"
                placeholder="Feed Url"
                className="form-control field-input"
              />

              <div className="button-save-section text-end ">
                <button
                  type="submit"
                  className=" chativa-btn chativa-btn-primary "
                  onKeyPress={(event) => {
                    event.key === "Enter" && handleSubmit();
                  }}
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </Modal>
  );
};

export default AddFeed;
