import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../componnets/BreadCrumb";
import CutsomInput from "../componnets/CutsomInput";
import Meta from "../componnets/Meta";
import Container from "./../componnets/Container";

const ForgetPassword = () => {
  return (
    <>
      <Meta title={"Forget Password"} />
      <BreadCrumb title="Forget Password" />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row ">
          <div className="col-12 ">
            <div className="auth-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <div className="">
                  <CutsomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    classname="form-control"
                  />
                </div>
                <div className="">
                  <div className="mt-3 d-flex flex-column justify-content-center gap-15 align-items-center">
                    <button className="button border-0" type="submit">
                      Login
                    </button>
                    <Link to="/login">Cancel</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgetPassword;
