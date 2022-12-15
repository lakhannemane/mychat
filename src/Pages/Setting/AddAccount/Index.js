import { Modal } from "antd";
import { Field, Form, Formik } from "formik";
import { gapi } from "gapi-script";
import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { AiFillLinkedin } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { useDispatch } from "react-redux";
import { AddAccounts } from "../../../Store/Slices/Accounts/AccountSlice";

const Index = ({ addShow, setAddShow }) => {

    const dispatch = useDispatch();
    const handleOk = () => {
        setAddShow(false);
    };

    const handleCancel = () => {
        setAddShow(false);
    };

    const handleSubmit = (values) => {
        console.log(values)
    }


    const clientId = "957385858873-7ifa7seicebvqta0810m9j789be9acse.apps.googleusercontent.com";

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

        console.log("login si Succesfull0", res);
        localStorage.setItem("g_token", res.accessToken);
        dispatch(AddAccounts({ account: "Google", token: `${res.accessToken}` }))
        setAddShow(false)
    };

    const onFailure = (res) => {
        console.log("login si Succesfull0", res);
    };

    const addAnotherOne = () => {
        dispatch(AddAccounts({ account: "Linkdein", token: `dhasjdgyijkdhe9u2398domojcye273rdi` }))
        // dispatch(AddAccount())
        setAddShow(false)
    }

    const addFlipKart = () => {
        dispatch(AddAccounts({ account: "upwork", token: `dhasjdgyijkdhe9u2398domojcye273rdi` }))
        setAddShow(false)

    }


    return (
        <Modal
            open={addShow}
            onOk={handleOk}
            onCancel={handleCancel}
            destroyOnClose
            footer={false}
            closable={false}

        // width={650}
        >
            <div className="Add-ccount-login" >
                <h3>Welcome back</h3>

                <div className="button-group d-flex flex-column ">
                    {/* {localStorage.getItem("g_token") ? } */}
                    <GoogleLogin
                        clientId={clientId}
                        buttonText="Login in with Google"
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_origin"}
                        // isSignedIn={true}
                        style={{ background: "none !important" }}

                        className="btns d-flex justify-content-center"
                    ></GoogleLogin>
                    {/* <button className="btns my-2 "><span className="login-icons login-linkdin"><FcGoogle /></span>Login in With Google </button> */}

                    <button className="btns my-2 " onClick={() => addAnotherOne()}><span className="login-icons login-linkdin"><AiFillLinkedin /></span>Login in With Linkedln </button>
                    <button className="btns  my-2 " onClick={() => addFlipKart()}> <span className="login-icons login-facebook"><SiUpwork /></span>Login in With UpWork </button>
                </div>

                <div className="or d-flex align-items-center justify-content-evenly mt-3">
                    <div
                        className="hr-or-line"
                        style={{
                            width: "40%",
                            height: "1px",
                            background: "#A7A4E4",
                        }}
                    ></div>
                    <div>OR</div>
                    <div
                        className="hr-or-line"
                        style={{
                            width: "40%",
                            height: "1px",
                            background: "#A7A4E4",
                        }}
                    ></div>
                </div>

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
                            className="form-add-acount"
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



                        </Form>
                    )}
                </Formik>
            </div>
        </Modal>
    );
};

export default Index;
