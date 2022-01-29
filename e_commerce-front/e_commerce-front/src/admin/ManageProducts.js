import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  const { user, token } = isAuthenticated();

  const loadProducts = () => {
    getProducts().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const destroy = (productId) => {
    deleteProduct(productId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        loadProducts();
      }
    });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Layout
      title="Manage Products"
      description="Perform CRUD on products"
      className="container-fluid"
    >
      <div className="row">
        <div className="col">
          <h2 className="text-center">Total {products.length} products</h2>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <ul className="list-group">
                  {products.map((p, i) => (
                    <li
                      key={i}
                      className="list-group-item d-flex justify-content-between col-12 d-grid"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="col-10">
                        <strong>{p.name}</strong>
                      </div>
                      <Link to={`/admin/product/update/${p._id}`}>
                        <span
                          className="badge badge-warning badge-pill "
                          style={{
                            background: "blue",
                          }}
                        >
                          Update
                        </span>
                      </Link>
                      <span
                        onClick={() => destroy(p._id)}
                        className="badge badge-danger badge-pill"
                        style={{ background: "red", cursor: "pointer" }}
                      >
                        Delete
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ManageProducts;
