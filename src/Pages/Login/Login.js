import { Field, Form, Formik } from "formik";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

const clientId =
  "957385858873-7ifa7seicebvqta0810m9j789be9acse.apps.googleusercontent.com";

// const bussiness = "https://www.googleapis.com/auth/business.manage"
// const scope2 = "https://www.googleapis.com/auth/businessmessages"

const Login = () => {
  const handleSubmit = (values) => {
    console.log(values, "valus in handlesubmit");
  };

  const navigate = useNavigate();

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_PUBLIC_GOOGLE_CLIENT_ID,
        scope: "https://www.googleapis.com/auth/business.manage",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (res) => {
    console.log("login si Succesfull0", res.accessToken);
    localStorage.setItem("a_token", res.accessToken);
    navigate("/dashbord");
  };
  const onFailure = (res) => {
    console.log("login si Succesfull0", res);
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

                              <GoogleLogin
                                clientId={clientId}
                                buttonText="Login with Google"
                                onSuccess={onSuccess}
                                onFailure={onFailure}
                                cookiePolicy={"single_host_origin"}
                                // isSignedIn={true}

                                style={{ width: "50px", color: "red" }}
                                className="chativa-btn"
                              ></GoogleLogin>
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
