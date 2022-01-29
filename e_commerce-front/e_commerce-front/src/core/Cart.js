import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./Layout";
import { getCart } from "./cartHelpers";
import Card from "./Card";
import Checkout from "./Checkout";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [run, setRun] = useState(false);

  useEffect(() => {
    setItems(getCart());
  }, [run]);

  const showItems = (items) => {
    return (
      <div style={{ marginLeft: "20px" }}>
        <h2>Your cart has {`${items.length}`} items</h2>
        <hr style={{ marginLeft: "-20px" }} />
        {items.map((product, i) => (
          <Card
            showDescription={false}
            key={i}
            product={product}
            showAddToCartButton={false}
            cartUpdate={true}
            showRemoveProductButton={true}
            setRun={setRun}
            run={run}
          />
        ))}
      </div>
    );
  };

  const noItemsMessage = () => (
    <h2>
      Your cart is empty. <br /> <Link to="/shop">Continue shopping</Link>
    </h2>
  );

  return (
    <Layout title="" description="" className="">
      <div className="card">
        <div className="row">
          <div className="col-8">
            {items.length > 0 ? showItems(items) : noItemsMessage()}
          </div>

          <div className="col-4">
            <h2 className="mb-2">Your cart summary</h2>
            <hr />
            <Checkout products={items} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
