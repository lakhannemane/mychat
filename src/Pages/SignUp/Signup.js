import { Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {

    const getValues = (values, resetForm) => {
        console.log(values)
        resetForm();
    }
    return (
        <div className="signup-section pt-5">
            <div className="row justify-content-center">
                <div className="col-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-section px-3 py-5" style={{ boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.3)" }}>
                                <div className="header">
                                    <p className="chative-fs-b" style={{ fontSize: "22px" }}>Sign up with your email <br />
                                        <span style={{ fontSize: "15px" }}>Already have an account! <Link to="/">Sign in</Link></span>
                                    </p>

                                </div>
                                <div className="form-layour py-2 ">

                                    <Formik
                                        initialValues={{
                                            firstName: "",
                                            lastName: "",
                                            email: "",
                                            contact: "",
                                            password: ""
                                        }}
                                        onSubmit={(values, resetForm) => {
                                            getValues(values, resetForm);
                                        }}
                                    >
                                        <Form>
                                            <label htmlFor="firstName">First Name</label>
                                            <Field
                                                id="firstName"
                                                name="firstName"
                                                placeholder="Jane"
                                                className="form-control"
                                            />

                                            <label htmlFor="lastName">Last Name</label>
                                            <Field
                                                id="lastName"
                                                name="lastName"
                                                placeholder="Doe"
                                                className="form-control"
                                            />

                                            <label htmlFor="email">Email</label>
                                            <Field
                                                id="email"
                                                name="email"
                                                placeholder="jane@acme.com"
                                                type="email"
                                                className="form-control"
                                            />
                                            <label htmlFor="email">Password</label>
                                            <Field
                                                id="password"
                                                name="password"
                                                placeholder=""
                                                type="password"
                                                className="form-control"
                                            />

                                            <label htmlFor="email">Contact</label>
                                            <Field
                                                id="contact"
                                                name="contact"
                                                placeholder="+91 *****"
                                                type="number"
                                                className="form-control"
                                            />

                                            <label className="mb-2 my-3">
                                                <Field type="checkbox" />
                                                &nbsp; I am agree the terms of services and priacy policy
                                            </label>

                                            <button type="submit" className="chativa-btn-primary mt-2 form-control">Submit</button>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
