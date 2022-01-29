import React, { useState } from "react";

import { Link } from "react-router-dom";
import Layout from "../core/Layout";
import { signup } from "../auth/index";
import buttomDecorations from "../images/buttom-decorations.svg";
import figuerFlying from "../images/figuer_flying.svg";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    error: "",
    success: false,
  });

  const { name, email, password, address, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password, address }).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          address: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => (
    <div
      class="container"
      style={{
        marginLeft: "0px",
        width: "1800px",
        maxWidth: "100%",
        marginTop: "5px",
        borderRadius: "10px",
      }}
    >
      <div class="row h-100 ">
        <div
          className="rounded shadow-lg  col-6 d-flex flex-column align-items-center justify-content-center leftSide"
          style={{
            backgroundColor: "#5CC795",
            height: "850px",
            marginLeft: "-320px",
          }}

          // style="background-color: #5CC795;"
        >
          <img
            src={figuerFlying}
            alt="flying figuer"
            style={{ width: "350px", marginRight: "1em" }}
            //  style="width: 350px; margin-right: 1em; "
          />
          <h3
            style={{ fontWeight: "bold", fontSize: "2em", color: "white" }}
            //   style="font-weight: bold; font-size: 2em; "
          >
            Welcome To RoParts
          </h3>
          <p
            style={{ width: "19em", fontSize: "28px", textAlign: "center" }}

            //style="width: 19em; font-size: 28px; text-align: center;"
          >
            Phasellus risus turpis, pretium sit amet magna non, molestie
            ultricies enim.
          </p>
          <p
            style={{
              fontSize: "1.3em",
              fontWeight: "bold",
              marginTop: "1.125em",
              color: "",
            }}
            //  style="margin-top: 1.125em; font-size: 1.3em; font-weight: bold"
          >
            you have an account ?{" "}
          </p>
          <a
            href="/signin"
            class="btn btn-default"
            style={{ marginTop: ".438em" }}
            // style="margin-top: 3.438em;"
          >
            Sign In
          </a>
        </div>
        <div class="col-8 d-flex flex-column align-items-center  righSide ">
          <h3
            style={{
              fontWeight: "bold",
              fontSize: "3em",
              marginTop: "100px",
              color: "#707070",
            }}
            //  style="font-weight: bold; font-size: 3em; margin-top: auto;color: #707070; "
          >
            Join US
          </h3>
          <p
            style={{
              width: "25em",
              fontSize: "1.2em",
              textAlign: "start",
              fontWeight: "bold",
              color: "#ACACAC",
            }}
            //  style="width: 25em; font-size: 1.6em; text-align: center; color: #ACACAC;"
          ></p>

          <div class="row d-flex  justify-content-center textfields">
            <div class="col-5">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name<span>*</span>
                </label>
                <input
                  onChange={handleChange("name")}
                  type="text"
                  className="form-control"
                  value={name}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address*
                </label>
                <input
                  onChange={handleChange("email")}
                  type="email"
                  className="form-control"
                  value={email}
                />
              </div>
            </div>

            <div class="col-5">
              <div class="mb-3">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone Number
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="e.g: 01163693006"
                    size="200"
                    required
                  />
                </div>

                <label for="exampleFormControlInput1" class="form-label">
                  Password<span>*</span>
                </label>
                <input
                  onChange={handleChange("password")}
                  type="password"
                  className="form-control"
                  value={password}
                />
              </div>
            </div>
          </div>
          <div
            class="d-flex flex-row align-self-between"
            style={{
              marginTop: "400px",
              position: "absolute",
            }}
          >
            <button onClick={clickSubmit} className="btn btn-default signUp">
              Sign Up
            </button>
          </div>
          <div
            style={{
              backgroundImage: `url(${buttomDecorations})`,
              width: "100%",
              height: "6.2em",
              marginTop: "auto",
            }}
            //  style="background-image: url(images/buttom-decorations.svg); width: 100%; height: 6.2em; margin-top: auto;"
            class="align-self-end"
          ></div>
        </div>
      </div>
    </div>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-info"
      style={{ display: success ? "" : "none" }}
    >
      New account is created. Please <Link to="/signin">Signin</Link>
    </div>
  );

  return (
    <Layout title="" description="" className="container col-md-8 offset-md-2">
      {showSuccess()}
      {showError()}
      {signUpForm()}
    </Layout>
  );
};

export default Signup;
