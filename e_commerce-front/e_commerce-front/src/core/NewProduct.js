import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import newProduct from "../images/newProduct.jpg";
import YoutubeEmbed from "./YoutubeEmbed";

const NewProduct = () => {
  const [productsBySell, setProductsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState(false);

  const loadProductsBySell = () => {
    getProducts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProductsByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout title="" description="" className="container-fluid">
      <div class="">
        <YoutubeEmbed embedId="https://www.youtube.com/embed/Q1mZ4ADUEZs?rel=0&start=47&autoplay=1&mute=1&loop=true" />
        {/*  

        <img src={newProduct} class="rounded mx-auto d-block" alt="..." />
        */}
      </div>
      <h2 className="text-center mb-10">New Arrivals</h2>

      <div className="row">
        {productsByArrival.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default NewProduct;
