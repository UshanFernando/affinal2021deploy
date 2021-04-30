import React from "react";
import ConnectBtn from "../Components/ConnectBtn";

function Connect(props) {
  return (
    <div id="contact" class="container">
      <div class="addo-contact">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <span class="heading-meta">Get In Touch</span>
              <h2
                class="addo-heading animate-box"
                data-animate-effect="fadeInLeft"
              >
                Connect With Me
              </h2>{" "}
            </div>
          </div>
          <div class="row">
            <div
              class="col-md-12 mb-30 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div class="row">
                <ConnectBtn
                  icon="fa-facebook"
                  name="Facebook"
                  url="https://www.facebook.com/ushan.fernando.315"
                />
                <ConnectBtn
                  icon="fa-github"
                  name="Github"
                  url="https://www.facebook.com/ushan.fernando.315"
                />
                <ConnectBtn
                  icon="fa-linkedin"
                  name="Facebook"
                  url="https://www.facebook.com/ushan.fernando.315"
                />
                <ConnectBtn
                  icon="fa-stack-overflow"
                  name="Stack Overflow"
                  url="https://stackoverflow.com/users/8342080/ushan-fernando"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
            <p>
              <b>GET IN TOUCH</b>
            </p>
            <form method="post" class="row">
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    required
                  />{" "}
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Email" />{" "}
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-sm-12">
                <div class="form-group">
                  <button class="btn" type="submit">
                    Say Hello!
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Connect;
