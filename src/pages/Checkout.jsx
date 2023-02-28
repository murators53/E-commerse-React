import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../componnets/BreadCrumb";
import Meta from "../componnets/Meta";
import { HiOutlineArrowLeft } from "./../Icon";

const Checkout = () => {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <div className="checkout-wrapper">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7 p-5">
              <div className="checkout-left-data">
                <h3 className="website-name fw-light">Dev Corner</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/cart">Cart</Link>
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Information
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp;/
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4>Contact infromation</h4>
                <p>Navdeep Dahiya (orsoglumurat@gmail.com)</p>
                <form action="d-flex gap-15 align-items-center flex-wrap">
                  <div className="w-100 mt-3">
                    <select name="" id="" className="form-control form-select" defaultValue={""}>
                      <option value="" disabled>Select Address</option>
                      <option value="address">Use a new address</option>
                      <option value="states">United States(Navdeep Dahiya)</option>
                    </select>
                  </div>
                  <div className="d-flex gap-15 mt-3">
                    <input
                      type="text"
                      className="flex-grow-1 form-control"
                      placeholder="First name (optional)"
                    />
                    <input
                      type="text"
                      className="flex-grow-1 form-control"
                      placeholder="Last name"
                    />
                  </div>
                  <div className="w-100 mt-3">
                    <input
                      type="text"
                      className="flex-grow-1 form-control"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-100 mt-3">
                    <input
                      type="text"
                      className="flex-grow-1 form-control"
                      placeholder="Apartment, suite, et.(optional)"
                    />
                  </div>
                  <div className="w-100 mt-3 d-flex flex-row gap-15">
                    <input
                      type="text"
                      className="flex-grow-1 form-control"
                      placeholder="City"
                    />
                    <select name="" id="" className="form-control form-select" defaultValue={"Türkiye"}>
                      <option value="Türkiye">Türkiye</option>
                      <option value="Mısır">Mısır</option>
                      <option value="Bosna">Bosna Hersek</option>
                      <option value="Suriye">Suriye</option>
                      <option value="Türkistan">Türkistan</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Arabistan">Arabistan</option>
                      <option value="Mezepotamya">Mezepotamya</option>
                    </select>
                    <input
                      type="number"
                      className="flex-grow-1 form-control"
                      placeholder="ZIP CODE"
                    />
                  </div>
                  <div className="w-100 mt-3 d-flex justify-content-between">
                    <div className="d-flex align-items-center gap-10">
                      <Link to="/cart">
                        <HiOutlineArrowLeft className="fs-4 text-dark" />
                      </Link>
                      <span>Return to cart</span>
                    </div>
                    <Link
                      to="/cart"
                      className="btn bg-danger border-none text-light p-3"
                    >
                      Continue to shipping
                    </Link>
                  </div>
                  <div className="w-100 mt-3"></div>
                </form>
              </div>
            </div>
            <div className="col-5 p-5">
              <div className="row">
                <div className="d-flex gap-15 align-items-center">
                  <div className="col-2  position-relative">
                    <img
                      src="images/tab.jpg"
                      alt="tab"
                      className="img-fluid bg-white rounded "
                    />
                    <span className="position-absolute bg-secondary text-light p-1 ">
                      1
                    </span>
                  </div>
                  <div className="col-7">
                    <p className="">
                      Honor T1 7.0 1 GB RAMD 8 GB ROM 7 inch with Wi-Fi + 3G
                      Tablet
                    </p>
                    <span>S / #B5CEDE</span>
                  </div>
                  <div className="col-2 fw-semibold">$100.00</div>
                </div>
              </div>
              <div className="row">
                <div className="d-flex gap-15 align-items-center">
                  <div className="col-2  position-relative">
                    <img
                      src="images/homeapp.jpg"
                      alt="tab"
                      className="img-fluid bg-white rounded "
                    />
                    <span className="position-absolute bg-secondary text-light p-1 ">
                      1
                    </span>
                  </div>
                  <div className="col-7">
                    <p className="">
                      Honor T1 7.0 1 GB RAMD 8 GB ROM 7 inch with Wi-Fi + 3G
                      Tablet
                    </p>
                    <span>S / #B5CEDE</span>
                  </div>
                  <div className="col-2 fw-semibold">$100.00</div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 ">
                  <div className="border-top border-muted border-bottom my-3">
                    <div className="d-flex justify-content-between mt-3">
                      <p className="text-secondary">Subtotal</p>
                      <p className="fw-semibold">$200.00</p>
                    </div>
                    <div className="d-flex justify-content-between ">
                      <p className="text-secondary">Shipping</p>
                      <p className="fw-semibold">$19.65</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0 text-secondary">Total</p>
                    <div className="d-flex  align-items-center">
                      <p className="text-secondary mb-0">USD </p>
                      <span className="fs-3 mb-1 ms-2">$219.65</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

/* 
<div className="col-3">
                    <img
                      src="images/tab.jpg"
                      alt="tab"
                      className="img-fluid bg-white rounded "
                    />
                  </div>
                  <div className="d-flex flex-row justify-content-between h-full col-9">
                    
                    <div className="flex-shrink-1">
                      <p className="fw-semibold">$100.00</p>
                    </div>
                  </div>
*/
