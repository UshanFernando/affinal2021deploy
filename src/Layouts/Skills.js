import React from "react";
import "./Skills.css";

function Skills(props) {
  return (
    <div id="skills" class="section container">
      <div class="addo-skills">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-md-12 col-sm-12 col-lg-10 col-xl-5 mb-4 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span class="heading-meta">Abilities</span>
              <h3 class="addo-heading">Technology Stack</h3>
              <main class="hexagon-container">
                <div class="hexagon color-sass" title="HTML">
                  <i class="fab fa-html5 hex-icon"> </i>
                </div>
                <div class="hexagon color-angular" title="Java Script">
                  <i class="fab fa-js hex-icon"> </i>
                </div>
                <div class="hexagon color-gulp" title="React">
                  <i class="fab fa-react hex-icon"> </i>
                </div>
                <div class="hexagon color-html" title="CSS3">
                  <i class="fab fa-css3 hex-icon"> </i>
                </div>

                <div class="hexagon color-git" title="Bootstrap 4">
                  <i class="fab fa-bootstrap hex-icon"> </i>
                </div>
                <div class="hexagon color-javascript" title="Android">
                  <i class="fab fa-android hex-icon"> </i>
                </div>
                <div class="hexagon color-vuejs" title="Flutter">
                  <svg
                    title="Flutter"
                    aria-labelledby="simpleicons-circleci-icon"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M14.314 0L2.3 12 6 15.7 21.684.012h-7.357L14.314 0zm.014 11.072l-6.471 6.457 6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.371z" />
                  </svg>
                </div>
                <div class="hexagon color-rails" title="JAVA">
                  <i class="fab fa-java hex-icon"> </i>
                </div>

                <div class="hexagon color-circleci" title="Mongo DB">
                  <svg
                    title="Mongo DB"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M17.18 9.518c-1.263-5.56-4.242-7.387-4.562-8.086C12.266.939 11.885 0 11.885 0c-.002.019-.004.031-.005.049v.013h-.001c-.002.015-.003.025-.004.039v.015h-.002c0 .01-.002.018-.002.026v.026h-.003c-.001.008-.001.018-.003.025v.021h-.002c0 .007 0 .015-.002.021v.02h-.002c0 .01-.001.022-.002.032v.002c-.003.017-.006.034-.009.05v.008h-.002c-.001.004-.003.008-.003.012v.017h-.003v.022h-.005v.018h-.005v.021h-.004v.019h-.004v.017h-.006v.014h-.004v.018h-.004v.014h-.005v.013H11.8v.015h-.004c-.001.001-.001.003-.001.004v.01h-.003c-.001.002-.001.004-.001.006v.006h-.002c-.001.003-.002.008-.002.01-.003.007-.007.014-.01.021v.002c-.002.002-.004.005-.005.007v.008h-.004v.008h-.005v.008h-.003v.01h-.006v.014h-.004v.004h-.004v.008h-.004v.011h-.004v.008h-.006v.011h-.004v.008h-.005v.008h-.003v.01h-.005v.008h-.004v.006h-.004v.008h-.006V.76h-.004v.006h-.005v.008h-.004v.011h-.005v.004h-.003v.008h-.006v.004h-.004v.01h-.004v.004h-.004v.008h-.005v.006h-.003l-.002.004v.004h-.002c-.001.002-.002.002-.002.004v.001h-.001c-.001.003-.002.005-.004.007v.003h-.001c-.005.006-.008.012-.012.018v.001c-.002.002-.007.006-.009.01v.002h-.001c-.001.001-.003.002-.003.003v.003h-.002l-.003.003v.001h-.001c0 .001-.002.002-.003.004v.004h-.003l-.002.002v.002h-.002c0 .002-.002.002-.002.003v.003h-.004c0 .001-.001.002-.002.003V.92h-.003v.004h-.004V.93h-.004v.008h-.005V.93h-.005v.004h-.004V.94h-.005v.008h-.005v.004h-.004v.006h-.004v.004h-.004V.97h-.006v.004h-.004V.98h-.005v.004h-.004v.005h-.005v.01h-.002v.004h-.006v.005h-.004v.002h-.004v.004h-.005v.01h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.005v.004h-.004v.004h-.004v.01h-.004v.005h-.006v.004h-.004v.004h-.005v.006h-.004v.004h-.005v.007h-.004v.004h-.006V1.1h-.002v.004h-.004v.004h-.005v.004h-.004v.006h-.005v.004h-.003c-.001.001-.001.002-.001.002v.002h-.002l-.004.004s-.002.002-.004.003v.006h-.004v.005h-.004v.004h-.004v.004h-.003l-.003.003v.003h-.002l-.002.002v.003h-.002c-.005.006-.007.01-.014.016-.002.002-.008.007-.012.01-.012.008-.027.021-.039.032-.008.005-.016.012-.022.017v.001h-.001c-.016.013-.031.025-.049.039v.001c-.024.02-.047.039-.074.062V1.34h-.002c-.057.047-.117.1-.186.159V1.5h-.001c-.169.148-.37.338-.595.568l-.015.015-.004.004C9 3.494 6.857 6.426 6.631 11.164c-.02.392-.016.773.006 1.144v.009c.109 1.867.695 3.461 1.428 4.756v.001c.292.516.607.985.926 1.405v.001c1.102 1.455 2.227 2.317 2.514 2.526.441 1.023.4 2.779.4 2.779l.644.215s-.131-1.701.053-2.522c.057-.257.192-.476.349-.662.106-.075.42-.301.797-.645.018-.019.028-.036.044-.054 1.521-1.418 4.362-4.91 3.388-10.599z" />
                  </svg>
                </div>
                <div class="hexagon color-webpack" title="Firebase">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title />
                    <path d="M3.89 15.673L6.255.461A.542.542 0 0 1 7.27.289L9.813 5.06 3.89 15.673zm16.795 3.691L18.433 5.365a.543.543 0 0 0-.918-.295l-14.2 14.294 7.857 4.428a1.62 1.62 0 0 0 1.587 0l7.926-4.428zM14.3 7.148l-1.82-3.482a.542.542 0 0 0-.96 0L3.53 17.984 14.3 7.148z" />
                  </svg>
                </div>
                <div class="hexagon color-bootstrap" title="Node JS">
                  <i class="fab fa-node-js hex-icon"> </i>
                </div>
                <div class="hexagon color-python" title="Python">
                  <svg
                    viewBox="0 0 24 24"
                    aria-labelledby="simpleicons-python-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                  >
                    <title id="simpleicons-python-icon">Python icon</title>
                    <path d="M14.31.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.83l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.23l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05L0 11.97l.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.24l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05 1.07.13zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22z" />
                    <path d="M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01.21.03zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" />
                  </svg>
                </div>

                <div class="hexagon color-haskell" title="Git">
                  <i class="fab fa-git-square hex-icon"> </i>
                </div>
                <div class="hexagon color-meteor" title="Microsoft Azure">
                  <i class="fab fa-accusoft hex-icon"> </i>
                </div>
                <div class="hexagon color-css" title="Google Cloud Platform">
                  <i class="fab fa-google hex-icon"> </i>
                </div>
                <div class="hexagon color-atom" title="Amazon AWS">
                  <i class="fab fa-aws hex-icon"> </i>
                </div>
              </main>
            </div>
            <div
              class="col-md-12 col-sm-12 col-lg-10 col-xl-5 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span class="heading-meta">Abilities</span>
              <h2
                class="addo-heading animate-box"
                data-animate-effect="fadeInLeft"
              >
                My Skills
              </h2>
              <p class="bar-title">
                Creativity<span class="percent align-right">90%</span>
              </p>
              <div class="bar">
                <div class="bar-fill bar-fill-developer start"></div>
              </div>
              <p class="bar-title">
                Adaptivity<span class="percent align-right">95%</span>
              </p>
              <div class="bar">
                <div class="bar-fill bar-fill-adaptivity start"></div>
              </div>
              <p class="bar-title">
                Self Learning<span class="percent align-right">95%</span>
              </p>
              <div class="bar">
                <div class="bar-fill bar-fill-webdesign start"></div>
              </div>
              <p class="bar-title">
                Commuinication<span class="percent align-right">75%</span>
              </p>
              <div class="bar">
                <div class="bar-fill bar-fill-socialmedia start"></div>
              </div>
              <p class="bar-title">
                Android Development<span class="percent align-right">90%</span>
              </p>
              <div class="bar">
                <div class="bar-fill bar-fill-developer start"></div>
              </div>
              <p class="bar-title">
                Web Development<span class="percent align-right">85%</span>
              </p>
              <div class="bar">
                <div class="bar-fill bar-fill-web start"></div>
              </div>
              <p class="bar-title">
                Embedded System Development
                <span class="percent align-right">80%</span>
              </p>
              <div class="bar">
                <div class="bar-fill bar-fill-emb start"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
