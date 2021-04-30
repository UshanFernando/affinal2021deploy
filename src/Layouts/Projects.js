import React from "react";
import automata from "../Assets/automata.jpg";
import fashion from "../Assets/fashion.JPG";
import Project from "../Components/Project";
import slic from "../Assets/slic.jpg";
import radiolk from "../Assets/radiolk.jpg";

function Projects(props) {
  return (
    <div id="mywork" class="container">
      <div class="addo-blog">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <span class="heading-meta">Work &</span>
              <h2
                class="addo-heading animate-box"
                data-animate-effect="fadeInLeft"
              >
                Projects
              </h2>
            </div>
          </div>
          <div class="row ">
            <Project
              title="Radio LK "
              img={radiolk}
              desc={
                "Completely free mobile app that is capable of live streaming all Sri Lankan Radio Stations All Day through internet. Users can select their preferred streaming quality to balance data usage. App supports background streaming without any interruptions. users also can switch between light and dark themes. "
              }
              tech={"Flutter, Dart , NodeJS , ExpressJS , MongoDB"}
            />
            <Project
              title="Automata"
              img={automata}
              desc={
                "Smart home system capable of controlling and monitoring home appliance in a smart way over WiFi. "
              }
              tech={
                "Android, JAVA , Platform IO, Web Sockets , C++, C ,STM32 , ESP 6268"
              }
            />
            <Project
              title="Fashion Store"
              img={fashion}
              desc={
                "Complete e commerce web app with user management , admin dashboard, product management.  "
              }
              tech={"React , ExpressJS , Mongo DB"}
            />

            <Project
              title="SLIC Mobile App Redesign"
              img={slic}
              desc={
                "Complete e commerce web app with user management , admin dashboard, product management.  "
              }
              tech={"React , ExpressJS , Mongo DB"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
