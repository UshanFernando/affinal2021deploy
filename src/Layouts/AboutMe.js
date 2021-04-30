import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./AboutMe.css";
import ReactTypingEffect from "react-typing-effect";
import me from "../Assets/me.jpg";
function AboutMe(props) {
  return (
    // <section class="home_banner_area">
    //   <div class="banner_inner">
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-lg-6">
    //           <div class="home_left_img">
    //             <div>
    //               <img src={me} alt="" id="mypic" />
    //             </div>
    //           </div>
    //         </div>
    //         <div class="col-lg-6">
    //           <div class="banner_content">
    //             <h5>This is me</h5>
    //             <h2>Ushan Fernando</h2>
    //             <span style={{ fontSize: 22 }}>
    //              I'm a{" "}
    //               <span >
    //                 <ReactTypingEffect
    //                   text={[" Developer.", " Programmer.", " Blogger."]}
    //                 />
    //               </span>
    //             </span>
    //             <br />
    //             <a class="banner_btn mt-4" href="#">
    //               <i class="fas fa-text"></i>
    //               Download CV
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <div id="about" class="section container">
      <div class="addo-about">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              {" "}
              <span class="heading-meta">Information</span>
              <h2
                class="addo-heading animate-box"
                data-animate-effect="fadeInLeft"
              >
                About Me
              </h2>{" "}
            </div>
          </div>
          <div class="row">
            <div class="col-md-5">
              <img
                src={me}
                class="img-fluid mb-30 animate-box"
                data-animate-effect="fadeInLeft"
                alt=""
              />{" "}
            </div>
            <div class="col-md-7 animate-box" data-animate-effect="fadeInLeft">
              <h2 class="cd-headline clip">Personal Information</h2>
              <p>
                Hi, My name is Ushan Fernando, I'm a tech enthusiaste who is
                addicted to programming. and excited to learn new things.
              </p>

              <div class="addo-about-contact-wrap">
                <div class="row">
                  <div class="col-md-6">
                    <p>
                      <i class="fa fa-birthday-cake black-icon"> </i>
                      <b>Age:</b> 23
                    </p>
                    <p>
                      <i class="fa fa-envelope-open-text black-icon"> </i>
                      <b>Mail:</b> ushansankalpafernando@gmail.com
                    </p>
                  </div>
                  <div class="col-md-6">
                    <p>
                      <i class="fa fa-location-arrow black-icon"> </i>
                      <b>Location:</b> Colombo
                    </p>
                    <p>
                      <i class="fa fa-phone black-icon"> </i>
                      <b>Phone:</b> +94 7828 77077 / 070 3 627 628
                    </p>
                  </div>
                </div>
              </div>
              <h2 class="cd-headline clip">My Education</h2>
              <div class="addo-about-contact-wrap">
                <div class="row mt-2">
                  <div class="col-md-6">
                    <i class="fa fa-book-open black-icon2"> </i>
                    <span style={{ fontWeight: 600, fontSize: 18 }}>
                      Primary Education
                    </span>
                    <p class="mt-2 ml-2">
                      Carey College Colombo 08 - 2003-2014 <br />
                      DS Senanayake Colombo 07 - 2014-2017
                    </p>
                  </div>
                </div>
                <div class="row mt-2">
                  <div class="col-md-12">
                    <i class="fa fa-graduation-cap black-icon2"> </i>
                    <span style={{ fontWeight: 600, fontSize: 18 }}>
                      Higher Education
                    </span>
                    <p class="mt-2 ml-2">
                      4th year software engineering undergradute at SLIIT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
