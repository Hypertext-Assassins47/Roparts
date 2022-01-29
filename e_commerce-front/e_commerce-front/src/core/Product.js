import React, { useState, useEffect } from "react";
import Layout from "./Layout";
import { read, listRelated } from "./apiCore";
import Card from "./Card";

const Product = (props) => {
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [error, setError] = useState(false);

  const loadSingleProduct = (productId) => {
    read(productId).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProduct(data);
        // fetch related products
        listRelated(data._id).then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setRelatedProduct(data);
          }
        });
      }
    });
  };

  useEffect(() => {
    const productId = props.match.params.productId;
    loadSingleProduct(productId);
  }, [props]);

  return (
    <Layout
      title="" //{product && product.name}
      description=""
      className="d-flex justify-content-center mx-auto"
    >
      <div className="container-fluid">
        <div className="mx-auto">
          <h4
            className="rounded shadow-sm col-4 d-flex justify-content-center p-2 "
            style={{ background: "#f9e9e9", marginLeft: "400px" }}
          >
            {product && product.name}
          </h4>
          {product && product.description && (
            <Card product={product} showViewProductButton={false} />
          )}
        </div>

        <div className="col-8 mx-auto">
          <h4
            className="shadow-lg col-4 d-flex justify-content-center p-2 "
            style={{
              background: "#a9e9e9",
              marginLeft: "420px",
              marginTop: "50px",
            }}
          >
            Related Products
          </h4>
          {relatedProduct.map((p, i) => (
            <div className="mb-3">
              <Card key={i} product={p} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
