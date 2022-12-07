import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import LoginSlice from "../../Store/Slices/LoginSlice";



// const bussiness = "https://www.googleapis.com/auth/business.manage"
// const scope2 = "https://www.googleapis.com/auth/businessmessages"

const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log(values, "valus in handlesubmit");
    // dispatch(Login({ name: "lakhan", age: "23" }));
  };





  return (
    <div className="login-form">
      <div className="row justify-content-center">
        <div className="col col-lg-8 col-xl-8  col-md-10 col-sm-10">
          <div className="row justify-content-center align-item-center">
            <div className="col-lg-5 col-md-7 col-sm-10 ">
              <div className="login_Card_Google ">
                <div className="row justify-content-center align-item-center">
                  <div className="col-lg-11 col-md-8 col-sm-10">
                    <div className=" login_form_section">
                      {/* <div className=""> */}
                      <h4 className="text-center chativa-fs-titles chativa-fw-7">
                        Login
                      </h4>
                      <p className="text-center chativa-fs-a">
                        Hey, Enter your details to get sign in <br />
                        to your account
                      </p>
                      <div>
                        <Formik
                          initialValues={{ email: "", password: "" }}
                          validate={(values) => {
                            let errors = {};
                            if (!values.email) {
                              errors.email = "required*";
                            } else if (
                              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                                values.email
                              )
                            ) {
                              errors.email = "Invalid email address";
                            }
                            if (!values.password) {
                              errors.password = "required*";
                            } else if (values.password.length < 7) {
                              errors.password = "enter valid password";
                              // console.log("enter valid password");
                            }
                            return errors;
                          }}
                          onSubmit={handleSubmit}
                          className="mt-4"
                        >
                          {({ values, errors, handleSubmit }) => (
                            <Form
                              onSubmit={handleSubmit}
                              className="form-login"
                            >
                              <Field
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="form-control field-input"
                              />

                              <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control field-input"
                              />

                              <div className="d-flex mx-auto justify-content-between chativa-fs-a ">
                                <label className="  mb-2">
                                  <Field type="checkbox" />
                                  &nbsp; Remember me
                                </label>
                                <p
                                  style={{ cursor: "pointer" }}
                                  className="ps-3 chativa-fs-a"
                                // onClick={() => setIsModalVisible(true)}
                                >
                                  Forgot Password ?
                                </p>
                              </div>
                              <button
                                type="submit"
                                className="form-control chativa-btn chativa-btn-primary chativa-fs-a mb-3"
                              >
                                Sign in
                              </button>

                              <div className="another-option d-flex align-items-center justify-content-evenly" >
                                <div className="lg-hr-line" style={{ height: "1px", background: "black", width: "40%" }}></div>
                                <div>or</div>
                                <div className="lg-hr-line" style={{ height: "1px", background: "black", width: "40%" }}></div>
                              </div>

                            </Form>
                          )}
                        </Formik>
                        <p className="text-center chativa-fs-a">
                          Don't have account?{" "}
                          <Link to="/" className="ms-2 text-dark">
                            Click here
                          </Link>
                        </p>
                      </div>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
