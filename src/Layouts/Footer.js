import React from 'react'
import Particles from "react-particles-js";

function Footer() {
    return (
      <div id="addo-footer2" class="section">
        <Particles
          canvasClassName="party-footer"
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
        <div class="addo-narrow-content">
          <div class="row">
            <div
              class="col-md-4 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <p class="addo-lead">
                © 2021 ushanfernando.me. All rights reserved
              </p>
            </div>
            <div
              class="col-md-4 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <h2 class="text-center">
                Thank You
                <br />
                <span>End of page</span>
              </h2>{" "}
            </div>
            <div
              class="col-md-4 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <ul class="social-network">
                <p class="addo-lead">
                  © 2021 ushanfernando.me. All rights reserved
                </p>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer
