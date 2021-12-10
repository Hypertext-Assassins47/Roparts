import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { getProdcuts } from "./apiCore";
import Card from "./Card";
const ProductsPage = () => {
  const [productsBySell, setProdcutsBySell] = useState([]);
  const [productsByArrival, setProductsByArrival] = useState([]);
  const [error, setError] = useState([false]);

  const loadProductsBySell = () => {
    getProdcuts("sold").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProdcutsBySell(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProdcuts("createdAt").then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProdcutsBySell(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySell();
  }, []);

  return (
    <Layout
      title="Product Page"
      description="prodcut Page "
      className="container-fluid"
    >
      <h2 className="mb-4">New Arrival</h2>
      <div className="row">
        {productsByArrival.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>

      <h2 className="mb-4">Best Sellers</h2>
      <div className="row">
        {productsBySell.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </Layout>
  );
};
export default ProductsPage;
