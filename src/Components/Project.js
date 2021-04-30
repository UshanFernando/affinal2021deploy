import React from "react";

function Project(props) {
  return (
    <div class="col-md-12 col-sm-12 col-lg-5 project-item pt-3 m-2">
      <div class="blog-entry animate-box" data-animate-effect="fadeInLeft">
        <a href="post.html" class="blog-img ">
          <img
            src={props.img}
            class="img-fluid"
            alt=""
            style={{ height: 280, objectFit: "cover" }}
          />
        </a>
        <div class="desc  ">
          <h3>
            <a href="post.html">{props.title}</a>
          </h3>
          <p>{props.desc}</p>
          <span>
            <div class="row p-1">
              <div class=" col-md-4 col-lg-4 col-xl-3">
                <b>Technologies </b>
              </div>
              <div class=" col-md-7 col-lg-8">
                <b>
                  <a href="#">{props.tech}</a>
                </b>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Project;
