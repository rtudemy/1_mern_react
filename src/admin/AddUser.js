import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Formik, Form, Field } from "formik";
// import "../style.css";
import { signup } from '../auth';
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// Messages
const required = "This field is required";
const maxLength = "Your input exceed maximum length";
const minLength = "Your input is minimum length";

// Error Component
const errorMessage = (error) => {
  return <div className="invalid-feedback">{error}</div>;
};

const validateName = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length < 4) {
    error = minLength;
  } else if (value.length > 20) {
    error = maxLength;
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length < 4) {
    error = minLength;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
};

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = required;
  } else if (value.length < 4) {
    error = minLength;
  }
  return error;
};

export default function AddUser() {
  const [status, setStatus] = useState("");

  return (
    <Formik
      initialValues={{
        Name: "",
        Email: "",
        Password: "",
      }}
      onSubmit={(data) => {
        //console.log(data);
        signup(data)
          .then((res) => {
            console.log(res);
            toast.success(res.data.errors[0].msg);
          })
          .catch((err) => {
            // console.log(err);
            // toast.success(err);
          });
      }}
    >
      {({ errors, touched, isValidating }) => (
        <div className="container">
          {status.type == "success" ? (
            <div>success create</div>
          ) : (
            <div>success flase</div>
          )}

          <div className="col-sm-12">
            <h3>User Signup</h3>
          </div>
          <ToastContainer />

          <div className="col-sm-12">
            <Form>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Name"
                  name="Name"
                  validate={validateName}
                />
                {errors.Name && touched.Name && errorMessage(errors.Name)}
              </div>
              <div className="form-group">
                <Field
                  type="email"
                  name="Email"
                  className="form-control"
                  placeholder="Email"
                  validate={validateEmail}
                />
                {errors.Email && touched.Email && errorMessage(errors.Email)}
              </div>
              <div className="form-group">
                <Field
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="Password"
                  validate={validatePassword}
                />
                {errors.Password &&
                  touched.Password &&
                  errorMessage(errors.Password)}
              </div>

              <div className="form-group">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
}
