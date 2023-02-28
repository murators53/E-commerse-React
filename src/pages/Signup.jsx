import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../componnets/BreadCrumb";
import CutsomInput from "../componnets/CutsomInput";
import Meta from "../componnets/Meta";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"} />
      <BreadCrumb title="Sign Up" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Sign Up</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CutsomInput
                    type="text"
                    name="name"
                    placeholder="Name"
                    classname="form-control"
                  />

                  <CutsomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    classname="form-control"
                  />

                  <CutsomInput
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    classname="form-control"
                  />

                  <CutsomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    classname="form-control"
                  />
                  <div className="">
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Sign Up</button>
                      <Link to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
