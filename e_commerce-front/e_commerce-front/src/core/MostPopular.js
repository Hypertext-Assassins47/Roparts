import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProducts } from "./apiCore";
import Card from "./Card";
import popularImage from "../images/popularImage.jpg";
import YoutubeEmbed from "./YoutubeEmbed";

const MostPopular = () => {
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
        <YoutubeEmbed embedId="https://www.youtube.com/embed/Oa9aWdcCC4o?rel=0&start=33&autoplay=1&mute=1&loop=true" />
        {/*  <img src={popularImage} class="rounded mx-auto d-block" alt="..." />
         */}
      </div>
      {/* 
      <h2 className="text-center mb-10">Most Popular</h2>
      */}
      <div className="row">
        {productsBySell.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </Layout>
  );
};

export default MostPopular;
