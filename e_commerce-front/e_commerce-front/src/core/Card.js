import React, { useState } from "react";
import moment from "moment";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import { addItem, updateItem, removeItem } from "./cartHelpers";

const Card = ({
  product,
  showDescription = true,
  showViewProductButton = true,
  showAddToCartButton = true,
  cartUpdate = false,
  showRemoveProductButton = false,

  setRun = (f) => f, //default value of function
  run = undefined, // default value of undefined
}) => {
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);

  // Note that the "View Product" button and link only renders if showViewProductButton is true
  const showViewButton = (showViewProductButton) => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`}>
          <button className="btn btn-outline-primary float-end">
            View Product
          </button>
        </Link>
      )
    );
  };

  //Description only shows in product page
  const showDescriptionText = (showDescription) => {
    return (
      showDescription && (
        <p class="rounded text-justify para mb-0"> {product.description} </p>
      )
    );
  };

  const addToCart = () => {
    addItem(product, () => {
      setRedirect(true);
    });
  };

  // Note that this method executes only if the redirect state is true
  // Redirect component comes from react-router-dom
  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  // Note that the "Add to cart" button only renders if showAddToCartButton is true
  const showAddToCart = (showAddToCartButton) => {
    return (
      showAddToCartButton &&
      product.quantity > 0 && (
        <button onClick={addToCart} className="btn btn-outline-warning mt-2">
          Add to cart
        </button>
      )
    );
  };

  // Note that the "Remove Product" button only renders if showRemoveProductButton is true
  const showRemoveButton = (showRemoveProductButton) => {
    return (
      showRemoveProductButton && (
        <button
          onClick={() => {
            removeItem(product._id);
            setRun(!run); // run useEffect() in parent Cart component
          }}
          className="btn btn-outline-danger mt-2 mb-2"
        >
          Remove Product
        </button>
      )
    );
  };

  const showStock = (quantity) => {
    return quantity > 0 ? (
      <span className="btn btn-success mt-2 mb-2" style={{ cursor: "default" }}>
        In Stock
      </span>
    ) : (
      <span className="btn btn-danger mt-2 mb-2" style={{ cursor: "default" }}>
        Out of Stock
      </span>
    );
  };

  const handleChange = (productId) => (event) => {
    setRun(!run); // run useEffect() in parent Cart component
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      updateItem(productId, event.target.value);
    }
  };

  const showCartUpdateOptions = (cartUpdate) => {
    return (
      cartUpdate && (
        <div className="input-group">
          <div className="input-group-prepend ">
            <span className="input-group-text rounded-right">
              Adjust Quantity
            </span>
          </div>

          <input
            style={{ height: "38px" }}
            type="number"
            className="form-control rounded-1"
            value={count}
            onChange={handleChange(product._id)}
          />
        </div>
      )
    );
  };
  return (
    <div class=" container mt-5 mb-6">
      <div class=" d-flex justify-content-center row mb-4 ">
        <div class="shadow-sm col-10 md-9">
          <div class="row p-2 bg-white border rounded">
            <div class="col-md-3 mt-4">
              <ShowImage
                class="img-fluid img-responsive rounded product-image"
                item={product}
                url="product"
              />
            </div>

            <div class="col-md-6 mt-2">
              <p class="blockquote display-8 text-success ">
                <b>{product.name}</b>
              </p>
              {shouldRedirect(redirect)}
              <div class="d-flex flex-row"></div>
              {showDescriptionText(showDescription)}
              {/*    <p class="text-justify para mb-0"></p>
              {product.description}*/}
              <p
                className="black-8 mt-4"
                style={{ background: "#e6e6e6", width: "60%" }}
              >
                Category: {product.category && product.category.name}
              </p>
              <p
                className="black-8"
                style={{ background: "#e6e6e6", width: "50%" }}
              >
                Added on:{moment(product.createdAt).fromNow()}
              </p>
              {showStock(product.quantity)}

              <br></br>
            </div>
            <div class="align-items-center align-content-center col-md-3 border-left mt-1">
              <div
                className="d-flex justify-content-end flex-row px-4 mt-6"
                //  style={{ marginLeft: "120px" }}
              >
                <h4 class="black-9 ml-1">
                  RM {parseFloat(product.price).toFixed(2)}
                </h4>
              </div>

              <div class=" d-flex flex-column m-2 float-end">
                {showViewButton(showViewProductButton)}

                {showAddToCart(showAddToCartButton)}
                {showRemoveButton(showRemoveProductButton)}

                {showCartUpdateOptions(cartUpdate)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
