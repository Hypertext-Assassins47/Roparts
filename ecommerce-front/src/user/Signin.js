import React, { useState } from "react";
import "./index.css";
import Layout from "../core/Layout";
import { Redirect } from "react-router-dom";
import { signin, authenticate } from "../auth";
import asset1 from "../images/Asset1.svg";
import background from "../images/background.svg";
import buttomDecorations from "../images/buttom-decorations.svg";
import figuerFlying from "../images/figuer_flying.svg";
import figuerWaving from "../images/figuer_waving.svg";

<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;
<script
  src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
  integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
  crossorigin="anonymous"
></script>;

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
  integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
  crossorigin="anonymous"
></script>;

const Signin = () => {
  const [values, setValues] = useState({
    email: "roparts@gmail.com",
    password: "123456",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error, redirectToReferrer } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    signin({ email, password }).then((data) => {
      if (data.error) {
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

  const sighUpForm = () => (
    <div className="container ">
      <div className="row h-100 ">
        <div
          className="col-4 d-flex flex-column align-items-center justify-content-center leftSide"
          style={{ backgroundColor: "#5CC795", height: "870px" }}
          //style="background-color: #5CC795;"
        >
          <img
            src={figuerWaving}
            alt="flying figuer"
            style={{ width: "320px", marginRight: "1em" }}
            // style="width: 320px; margin-right: 1em; "
          />
          <h3
            style={{ fontWeight: "bold", fontSize: "2em" }}
            // style="font-weight: bold; font-size: 2em; "
          >
            Join RoParts
          </h3>
          <p
            style={{ width: "19em", fontSize: "28px", textAlign: "center" }}

            // style="width: 19em; font-size: 28px; text-align: center;"
          >
            Phasellus risus turpis, pretium sit amet magna non, molestie
            ultricies enim. Nullam pulvinar felis at metus malesuada, nec
            convallis lacus commodo.
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
            >
              Phasellus risus turpis, pretium sit amet magna non, molestie
              ultricies enim. Nullam pulvinar felis at metus malesuada, nec
              convallis lacus commodo.{" "}
            </p>

            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email Address<span>*</span>
              </label>
              <input
                onChange={handleChange("email")}
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="e.g: roparts@gmail.com"
                //   value={email}
                required
                size="50"
              />
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlInput1"
                className="form-label"
                onChange={handleChange("password")}
                type="password"
                //value={password}
              >
                Password<span>*</span>
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Password"
                required
                size="50"
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

  const showError = () => (
    <div
      classNameNameName="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div classNameNameName="alert alert-info">
        <h1>Loading...</h1>
      </div>
    );

  const redirectUser = () => {
    if (redirectToReferrer) {
      return <Redirect to="/" />;
    }
  };

  return (
    <Layout classNameNameName="container col-md-12 offset-md-2">
      {showLoading()}
      {showError()}
      {sighUpForm()}
      {redirectUser()}
    </Layout>
  );
};

export default Signin;
