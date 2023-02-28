import React from "react";
import Meta from "../componnets/Meta";
import BreadCrumb from "../componnets/BreadCrumb";
import BlogCard from "../componnets/BlogCard";
import Container from "../componnets/Container";
const pages = () => {
  return (
    <>
      <Meta title={"Blogs"} />
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Find By Categories</h3>
                <div className="">
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="d-flex gap-10">
                <div className="row">
                  <div className="col-6 mb-3">
                    <BlogCard />
                  </div>
                  <div className="col-6 mb-3">
                    <BlogCard />
                  </div>
                  <div className="col-6 mb-3">
                    <BlogCard />
                  </div>
                  <div className="col-6 mb-3">
                    <BlogCard />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default pages;
