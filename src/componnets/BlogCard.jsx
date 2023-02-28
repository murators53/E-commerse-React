import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" alt="blog" className="img-fluid w-100" />
        </div>
        <div className="blog-content">
            <p className="date">22 Feb 2023</p>
            <h5 className="title">A beautiful sunday morning renaissance </h5>
            <p className="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere voluptate hic cum ad nostrum voluptatibus mollitia non, soluta, earum aperiam pariatur dignissimos iste nulla? Qui libero saepe quae maxime impedit.</p>
            <Link to="/blogs/:id" className="button">
                Read More  
            </Link>
        </div>
      </div>
  );
};

export default BlogCard;
