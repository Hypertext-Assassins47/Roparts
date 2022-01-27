import React, { useState } from "react";
import "./index.css";
import Layout from "../core/Layout";
import { Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth";

import buttomDecorations from "../images/buttom-decorations.svg";
import figuerWaving from "../images/figuer_waving.svg";

const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;
  const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        authenticate(data, () => {
          setValues({
            ...values,
            redirectToReferrer: true,
          });
        });
      }
    });
  };

  const signUpForm = () => (
    <div
      className="container"
      style={{
        marginLeft: "0px",
        width: "1800px",
        maxWidth: "100%",
        marginTop: "5px",
        borderRadius: "10px",
      }}
    >
      <div className=" row h-100 ">
        <div
          className="rounded shadow-lg  col-6 d-flex flex-column align-items-center justify-content-center leftSide"
          style={{
            backgroundColor: "#5CC795",
            height: "850px",
            marginLeft: "-320px",
          }}
        >
          <img
            src={figuerWaving}
            alt="flying figuer"
            style={{ width: "320px", marginRight: "1em" }}
            // style="width: 320px; margin-right: 1em; "
          />
          <h3
            style={{ fontWeight: "bold", fontSize: "2em", color: "white" }}
            // style="font-weight: bold; font-size: 2em; "
          >
            Join RoParts
          </h3>
          <p
            style={{ width: "19em", fontSize: "28px", textAlign: "center" }}

            // style="width: 19em; font-size: 28px; text-align: center;"
          >
            Phasellus risus turpis, pretium sit amet magna non, molestie
            ultricies enim..
          </p>
          <a
            href="/signup"
            className="btn btn-default"
            style={{ marginTop: "2.438em" }}
            //style="margin-top: 2.438em;"
          >
            Sign Up
          </a>
        </div>
        <div className="col-8 d-flex flex-column align-items-start  righSide ">
          <div
            style={{
              paddingLeft: "7rem",
              marginTop: "120px",
            }}
            //  style="padding-left: 7rem;"
            className=" align-self-baseline"
          >
            <h3
              style={{
                fontWeight: "bold",
                fontSize: "3em",
                marginTop: "auto",
                color: "#707070",
              }}
              //  style="font-weight: bold; font-size: 3em; margin-top: auto;color: #707070; "
            >
              Welcome Back
            </h3>
            <p
              style={{
                width: "25em",
                fontSize: "1.2em",
                textAlign: "start",
                fontWeight: "bold",
                color: "#ACACAC",
              }}
              //  style="width: 25em; font-size: 1.6em; text-align: start; color: #ACACAC;"
            ></p>

            <div className="mb-3">
              <label className="form-label">
                Email Address<span>*</span>
              </label>
              <input
                onChange={handleChange("email")}
                type="email"
                className="form-control"
                value={email}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Password<span>*</span>
              </label>
              <input
                onChange={handleChange("password")}
                type="password"
                className="form-control"
                value={password}
                placeholder="Enter Your Password"
              />
            </div>

            <div className="d-flex flex-row align-self-between">
              <button onClick={clickSubmit} className="btn btn-default signUp">
                Sign In
              </button>
              <a
                href="/#"
                style={{
                  marginLeft: "2em",
                  textDecoration: "none",
                  fontSize: "1.2em",
                  fontWeight: "bold",
                  color: "#3BA0AF",
                }}
                //  style="margin-left: 2em; text-decoration: none; font-size: 1.2em; font-weight: bold; color: #3BA0AF;"
                className="align-self-center"
              >
                Forgot Password ?
              </a>
            </div>
          </div>
          <div
            className="align-self-end"
            style={{
              backgroundImage: `url(${buttomDecorations})`,
              width: "100%",
              height: "6.2em",
              marginTop: "auto",
            }}
            // style="background-image: url(images/buttom-decorations.svg); width: 100%; height: 6.2em; margin-top: auto;"
          ></div>
        </div>
      </div>
    </div>
  );

  //error handler for wrong pasword
  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="alert alert-info">
        <h2>Loading...</h2>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout title="" description="" className="container col-md-8 offset-md-2">
      {showLoading()}
      {showError()}
      {signUpForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
