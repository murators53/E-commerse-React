import React from "react";
import Meta from "../componnets/Meta";
import BreadCrumb from "../componnets/BreadCrumb";
import {
  BiPhoneCall,
  BiInfoCircle,
  AiOutlineHome,
  AiOutlineMail,
} from "./../Icon.js";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact Us"} />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="myFramemap"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108513.53177955872!2d35.105318626949405!3d31.796445333182156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d7d634c1fc4b%3A0xd96f623e456ee1cb!2sJerusalem%2C%20Israel!5e0!3m2!1sen!2str!4v1677235902345!5m2!1sen!2str"
                width="600"
                height="450"
                allowFullScreen=""
                className="border-0 w-100 rounded"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div className="">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                    </div>
                    <div className="">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="">
                      <textarea
                        className="w-100 form-control"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="">
                      <button className="button border-0">Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div className="">
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Hno:277 , Near village chopal , Mandaura, Sonipat
                          Haryana
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="tel:+91 8264954234">+91 8264954234</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="mailto:orsoglumurat@gmail.com">
                          orsoglumurat@gmail.com
                        </a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday - Friday 10 AM - 8 AM</p>
                      </li>
                    </ul>
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

export default Contact;
