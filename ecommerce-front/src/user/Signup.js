import React, { useState } from "react";
import "./signup.css";
import Layout from "../core/Layout";
import { signup } from "../auth/index";
import buttomDecorations from "../images/buttom-decorations.svg";
import figuerFlying from "../images/figuer_flying.svg";

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
const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { name, email, password, success, error } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    signup({ name, email, password }).then((data) => {
      if (data.error) {
        console.log("DATA: ", data);
        setValues({ ...values, error: data.error, success: false });
      } else {
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          error: "",
          success: true,
        });
      }
    });
  };

  const signUpForm = () => (
    <div class="container2">
      <div class="row h-100 ">
        <div
          class="col-4 d-flex flex-column align-items-center justify-content-center leftSide"
          style={{
            backgroundColor: "#5CC795",
            height: "870px",
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
            style={{ fontWeight: "bold", fontSize: "2em" }}
            //   style="font-weight: bold; font-size: 2em; "
          >
            Welcome To RoParts
          </h3>
          <p
            style={{ width: "19em", fontSize: "28px", textAlign: "center" }}

            //style="width: 19em; font-size: 28px; text-align: center;"
          >
            Phasellus risus turpis, pretium sit amet magna non, molestie
            ultricies enim. Nullam pulvinar felis at metus malesuada, nec
            convallis lacus commodo.
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
          >
            Phasellus risus turpis, pretium sit amet magna non, molestie
            ultricies enim. Nullam pulvinar felis at metus malesuada, nec
            convallis lacus commodo.{" "}
          </p>

          <div class="row d-flex  justify-content-center textfields">
            <div class="col-5">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  First Name<span>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="e.g: firstname"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Last Name<span>*</span>
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="e.g: lastname"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="e.g: roparts@gmail.com"
                  onChange={handleChange("email")}
                  //    type="text"

                  //  value={email}
                  required
                />
              </div>
            </div>

            <div class="col-5">
              <div class="mb-3">
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Phone Number<span>*</span>
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
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="create password"
                  onChange={handleChange("password")}
                  type="password"
                  //   value={password}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Confirm Password<span>*</span>
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="confirm your password"
                  onChange={handleChange("password")}
                  type="password"
                  required
                />
              </div>
            </div>
          </div>

          <a
            href="/#"
            class="btn btn-default signUp"
            style={{
              marginBottom: "5.8em",

              marginLeft: "auto",

              marginRight: "5em",
            }}
            //  style="margin-bottom: 3.438em; margin-left: auto; margin-right: 4em;"
          >
            Sign Up
          </a>

          <div
            style={{
              backgroundImage: `url(${buttomDecorations})`,
              width: "100%",
              height: "6.2em",
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
      New account succefully created. Please sign in.
    </div>
  );
  return (
    <Layout
      //title="Sign Up"
      //description="Sign up for Node React E-commerce App"
      className="container col-md-8 offset-md-2"
    >
      {showError()}
      {showSuccess()}
      {signUpForm()}
    </Layout>
  );
};

export default SignUp;
