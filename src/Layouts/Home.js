import React from "react";
import banner from "../Assets/slider.jpg";
import me from "../Assets/me.jpg";
import Particles from "react-particles-js";
function Home(props) {
  return (
    <div id="home" className="section">
      <Particles
        canvasClassName="party"
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
      <div className="addo-hero js-fullheight">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li id="particles-js">
              <div className="overlay"></div>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <div className="image_wrap">
                          <img src={me} alt="" />
                        </div>
                        <h1>Hi, It's me Ushan Fernando</h1>
                        <h2 className="cd-headline clip">
                          <span>I'm a </span>
                          <span className="cd-words-wrapper">
                            <b className="is-visible">&nbsp;Web Developer</b>
                            <b>n Android Developer</b>
                            <b>&nbsp;Flutter Developer</b>
                            <b>&nbsp;Video Editor</b>
                            <b>&nbsp;Blogger</b>
                          </span>
                        </h2>
                      </div>

                      <div className="arrow bounce">
                        <a
                          href="index.html#about"
                          data-scroll-nav="1"
                          className=""
                        >
                          <i className="ti-angle-double-down"></i>{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
