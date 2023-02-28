import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../componnets/BreadCrumb";
import CutsomInput from "../componnets/CutsomInput";
import Meta from "../componnets/Meta";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row ">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <CutsomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                    classname="form-control"
                  />

                  <CutsomInput
                    type="password"
                    name="confpassword"
                    placeholder="Confirm Password"
                    classname="form-control"
                  />
                  <div className="">
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Ok</button>
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

export default ResetPassword;
