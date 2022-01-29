import React from "react";
import Layout from "./Layout";
import "./slide.css";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";
import asset1 from "../images/Asset1.svg";
import asset2 from "../images/Asset2.svg";
import asset3 from "../images/Asset3.svg";



//tidio chat

(function () {
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "https://code.tidio.co/5zf1bwh2xgiwm6xfwv1ro6xzbgvzexyi.js";
  s.async = true;
  document.body.append(s);
})();

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
const Home = () => (
  <Layout title="" description="">
    {/* <Search /> */}
    <div id="background">
      <div class="landing-container ">
        <div class="row ">
          <div class="col-6 d-flex align-items-center justify-content-center h-100">
            <div class="" style={{ width: "35rem" }}>
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{
                    fontSize: "2.7em",
                    fontWeight: "bold",
                    color: "#707070",
                  }}
                  //   style="font-size: 3.7em; font-weight: bold; color: #707070;"
                >
                  IT'S BLACK FRIDAY!
                </h5>
                <p class="card-text" style={{ fontSize: "2em" }}>
                  Get your gifts for the holidays! Our most popular products are
                  now on sale
                </p>
                <a
                  href="/shop"
                  class="btn btn-default"
                  style={{ width: "auto", fontSize: "1em", lineHeight: "1.6" }}
                >
                  GET YOUR DISCOUNT
                </a>
              </div>
            </div>
          </div>
          <div class="col-6 d-flex justify-content-center h-100">
            <div
              id="carouselExampleIndicators"
              class="carousel slide d-flex flex-column justify-content-center"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src={asset1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={asset2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={asset3} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={asset2} class="d-block w-100" alt="..." />
                </div>
              </div>

              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
                <div>
                  <script
                    src=" https://code.tidio.co/5zf1bwh2xgiwm6xfwv1ro6xzbgvzexyi.js"
                    async
                  ></script>
                  ;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default Home;
