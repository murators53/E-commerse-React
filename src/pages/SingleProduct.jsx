import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import BreadCrumb from "../componnets/BreadCrumb";
import Meta from "../componnets/Meta";
import ProductCard from "../componnets/ProductCard";
import ReactImageZoom from "react-image-zoom";
import Color from "./../componnets/Color";
import { TbGitCompare, AiOutlineHeart, AiOutlineLink } from "./../Icon";
import Container from "./../componnets/Container";
const SingleProduct = () => {
  const [orderedProduct, setorederedProduct] = useState(true);
  const [image, setImage] = useState(
    "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYPDOno90cYZjWwqOLsbKrCtAGBF3yOJjtWwwVmnofZldxLl8BaVE-G8fCDqFzjebfQvVdxILww-Z94vy1AgLDvrpjiPKT4Yr5s-pl-BtlL3KmYiu35pC8&usqp=CAE"
  );
  const props = {
    width: 600,
    height: 500,
    zoomWidth: 500,
    img: image,
  };

  const copyToClipBoard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image py-3 home-wrapper-2">
                <div className="">
                  <ReactImageZoom {...props} />
                  <button className="btn btn-sm btn-secondary" style={{border:'none'}}
                    onClick={() =>
                      setImage(
                        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYPDOno90cYZjWwqOLsbKrCtAGBF3yOJjtWwwVmnofZldxLl8BaVE-G8fCDqFzjebfQvVdxILww-Z94vy1AgLDvrpjiPKT4Yr5s-pl-BtlL3KmYiu35pC8&usqp=CAE"
                      )
                    }
                  >
                    Default Image
                  </button>
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15 ">
                <div
                  className=""
                  onClick={() =>
                    setImage(
                      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604021221000"
                    )
                  }
                >
                  <img
                    className="img-fluid"
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-silver-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604021221000"
                    alt=""
                  />
                </div>
                <div
                  className=""
                  onClick={() =>
                    setImage(
                      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022365000"
                    )
                  }
                >
                  <img
                    className="img-fluid"
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-pink-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022365000"
                    alt=""
                  />
                </div>
                <div
                  className=""
                  onClick={() =>
                    setImage(
                      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604709508000"
                    )
                  }
                >
                  <img
                    className="img-fluid"
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-spacegray-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604709508000"
                    alt=""
                  />
                </div>
                <div
                  className=""
                  onClick={() =>
                    setImage(
                      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022364000"
                    )
                  }
                >
                  <img
                    className="img-fluid"
                    src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-max-select-green-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022364000"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div
              className="col-6 p-3 rounded"
              style={{ backgroundColor: "white" }}
            >
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom">
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value="3"
                      edit="false"
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">( 2 Reviews )</p>
                  </div>
                  <a href="#" className="text-secondary">
                    Write a review
                  </a>
                  <p className="price">$ 100.00</p>
                </div>
                <div className="border-bottom py-3 d-flex align-items-center ">
                  <p className="fw-semibold mb-0">Type&nbsp;: &nbsp;</p>
                  <span className="text-secondary fw-normal">Headsets</span>
                </div>
                <div className="border-bottom py-3 d-flex align-items-center ">
                  <p className="fw-semibold mb-0">Brand&nbsp;: &nbsp;</p>
                  <span className="text-secondary fw-normal">Havells</span>
                </div>
                <div className="border-bottom py-3 d-flex align-items-center ">
                  <p className="fw-semibold mb-0">Tags&nbsp;: &nbsp;</p>
                  <div className="d-flex gap-30">
                    <span className="text-secondary fw-normal">headphones</span>
                    <span className="text-secondary fw-normal">laptop</span>
                    <span className="text-secondary fw-normal">mobile</span>
                    <span className="text-secondary fw-normal">oppo</span>
                    <span className="text-secondary fw-normal">speaker</span>
                  </div>
                </div>
                <div className="border-bottom py-3 d-flex align-items-center ">
                  <p className="fw-semibold mb-0">SKU&nbsp;: &nbsp;</p>
                  <span className="text-secondary fw-normal">SKU027</span>
                </div>
                <div className="border-bottom py-3 d-flex align-items-center ">
                  <p className="fw-semibold mb-0">Availbility&nbsp;: &nbsp;</p>
                  <span className="text-secondary fw-normal">541 in Stock</span>
                </div>
                <div className="border-bottom py-3 d-flex align-items-center ">
                  <p className="fw-semibold mb-0">Size&nbsp;: &nbsp;</p>
                  <div className="d-flex gap-30">
                    <button className="badge text-dark border-1 border-secondary fw-bold">
                      S
                    </button>
                    <button className="badge text-dark border-1 border-secondary fw-bold">
                      M
                    </button>
                    <button className="badge text-dark border-1 border-secondary fw-bold">
                      L
                    </button>
                    <button className="badge text-dark border-1 border-secondary fw-bold">
                      XL
                    </button>
                  </div>
                </div>
                <div className="border-bottom py-3 d-flex  ">
                  <p className="fw-semibold mb-0">Color&nbsp;: &nbsp;</p>
                  <Color />
                </div>
                <div className="border-bottom py-3 d-flex align-items-center ">
                  <p className="fw-semibold mb-0">Quantity&nbsp;: &nbsp;</p>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    max={10}
                    className="form-control "
                    style={{ width: "70px" }}
                  />
                  <div className="d-flex gap-10 ms-3">
                    <button className="button border-0">Add to Cart</button>
                    <button className="button signup border-0">
                      Buy It Now
                    </button>
                  </div>
                </div>
                <div className="border-bottom py-3 d-flex gap-15">
                  <div style={{ fontSize: "13px" }}>
                    <a className="text-secondary">
                      <TbGitCompare className="fs-5 me-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div style={{ fontSize: "13px" }}>
                    <a className="text-secondary">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="border-bottom py-3 d-flex gap-30 align-items-center ">
                  <p className="fw-semibold mb-0">
                    Copy Product Link:&nbsp;: &nbsp;
                  </p>
                  {/* javascript:void(0) geriye undefined doeger donmeso icin */}
                  <a
                    href="javascript:void(0);"
                    className="text-secondary"
                    style={{ fontSize: "13px" }}
                    onClick={() => {
                      copyToClipBoard(
                        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRYPDOno90cYZjWwqOLsbKrCtAGBF3yOJjtWwwVmnofZldxLl8BaVE-G8fCDqFzjebfQvVdxILww-Z94vy1AgLDvrpjiPKT4Yr5s-pl-BtlL3KmYiu35pC8&usqp=CAE"
                      );
                    }}
                  >
                    Copy Product Images
                  </a>
                </div>
                <div className="border-bottom py-3 d-flex gap-30 align-items-center ">
                  <p className="fw-semibold mb-0">
                    <AiOutlineLink className="fs-5" />
                    &nbsp;: &nbsp;
                  </p>
                  <a
                    href="javascript:void(0);"
                    className="text-secondary"
                    style={{ fontSize: "13px" }}
                    onClick={() => {
                      copyToClipBoard("http://localhost:3000/product/:id");
                    }}
                  >
                    Share
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>Description</h4>
                <p className="">
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Fugit asperiores dolorum amet suscipit corporis dolores unde
                  veniam doloribus. Optio impedit placeat facere dolore
                  exercitationem, voluptatem ipsam minus! Expedita, consectetur
                  saepe!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Container class1="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="review-title">Reviews</h4>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div className="">
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      value="3"
                      edit="false"
                      size={24}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based on 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div className="">
                    <a className="text-dark text-decoration-underline">
                      Write a Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <h4>Write a Review</h4>
                <form action="" className="d-flex flex-column gap-15">
                  <div className="">
                    <div className="">
                      <ReactStars
                        count={5}
                        value="3"
                        edit="true"
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                    <textarea
                      className="w-100 form-control"
                      name=""
                      id=""
                      cols="30"
                      rows="3"
                      placeholder="Comments"
                    ></textarea>
                  </div>
                  <div className="d-flex  justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>
              <div className="reviews">
                <div className="review">
                  <ReactStars
                    count={5}
                    value="3"
                    edit="false"
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">Good</p>
                  <p>
                    johhn-12 <span>on</span> Jun 19, 2023{" "}
                  </p>
                  <p>
                    <span>
                      It was a very good product, I use it, I recommend it
                    </span>
                  </p>
                  <div className="review-report d-flex justify-content-end">
                    <p className=" text-decoration-underline">
                      Report as Inappropriate
                    </p>
                  </div>
                </div>
                <div className="review">
                  <ReactStars
                    count={5}
                    value="3"
                    edit="false"
                    size={24}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">Nice Quality, I'll Buy It Again</p>
                  <p>
                    admin <span>on</span> Feb 1, 2023{" "}
                  </p>
                  <p>
                    <span>
                      Great stuff, I think I will get more orders from you guys
                    </span>
                  </p>
                  <div className="review-comment bg-secondary bg-opacity-10 p-3 rounded ms-4">
                    <h4>-Digitic</h4>
                    <p className="">
                      Thank you for your purchase from. Please let us know if we
                      can do anything else for you!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
