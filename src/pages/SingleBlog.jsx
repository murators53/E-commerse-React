import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import BlogCard from "../componnets/BlogCard";
import BreadCrumb from "../componnets/BreadCrumb";
import Meta from "../componnets/Meta";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4"/> Go back to Blogs
                </Link>
                <h3 className="title">A Beatiful Morning Renaissance</h3>
                <img
                  src="https://varosundelisi.com/wp-content/uploads/2020/05/blog2.jpg"
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  accusamus dolore quo voluptate labore tempora dignissimos,
                  expedita cupiditate eum, neque aperiam. Ut expedita magnam
                  quia, deserunt voluptatibus quaerat omnis, odit culpa suscipit
                  dignissimos voluptate mollitia distinctio incidunt iure veniam
                  aut perferendis minus eligendi quidem, reiciendis ratione
                  placeat itaque. Doloribus, inventore. Aspernatur id iste
                  expedita consectetur quod assumenda tempora! Obcaecati iste
                  officiis, pariatur nulla aliquid, quas molestiae aperiam vitae
                  tenetur maiores ratione delectus. Ipsum facilis itaque, amet
                  culpa fugit placeat quo qui quae dicta eligendi ullam quaerat
                  atque repellat obcaecati earum iure labore nesciunt? Debitis
                  totam explicabo officia sint laboriosam eligendi!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
