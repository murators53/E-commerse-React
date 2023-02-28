import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../componnets/BreadCrumb";
import Container from "../componnets/Container";
import Meta from "../componnets/Meta";
import { AiFillDelete } from "./../Icon";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3">Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>

              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="images/watch.jpg"
                      alt="product image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75 text-secondary">
                    <h5 className="title">ADSasd</h5>
                    <p className="color">Size:S</p>
                    <p className="size">Color: #A98VZ4</p>
                  </div>
                </div>
                <div className="cart-col-2 fw-bold fs-4">$100.00</div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <input
                    type="number"
                    max={10}
                    min={1}
                    defaultValue="1"
                    id=""
                    className="form-control"
                  />
                  <AiFillDelete className="text-danger fs-5" />
                </div>
                <div className="cart-col-4">100$ </div>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="images/watch.jpg"
                      alt="product image"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75 text-secondary">
                    <h5 className="title">ADSasd</h5>
                    <p className="color">Size:S</p>
                    <p className="size">Color: #A98VZ4</p>
                  </div>
                </div>
                <div className="cart-col-2 fw-bold fs-4">$100.00</div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <input
                    type="number"
                    max={10}
                    min={1}
                    defaultValue="2"
                    id=""
                    className="form-control"
                  />
                  <AiFillDelete className="text-danger fs-5" />
                </div>
                <div className="cart-col-4">200$</div>
              </div>
              <div className="py-3">
                <Link to="/product" className="button">
                  Continue Shopping
                </Link>
              </div>
              <div className="d-flex pt-3 justify-content-between align-items-center">
                <p className="text-secondary">Order special instructions</p>
                <p className="text-secondary fs-4">
                  Subtotal <span className="fw-semibold">$100.00</span>
                </p>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <p className="text-secondary fs-4">
                  Taxes and shipping calculated at checkout
                </p>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <Link to="/checkout" className="button w-25 text-center">
                  Check Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
