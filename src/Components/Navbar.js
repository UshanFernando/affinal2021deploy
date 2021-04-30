import React from "react";
import scrollIntoView from "scroll-into-view-if-needed";
const skills = document.getElementById("skills");
const about = document.getElementById("about");
const home = document.getElementById("home");
const contact = document.getElementById("contact");
const mywork = document.getElementById("mywork");

function Navbar(props) {
  return (
    <aside id="addo-aside">
      <div id="addo-logo">
        <a href="index.html">
          Ushan<span>F e r n a n d o</span>
        </a>
      </div>

      <nav id="addo-main-menu">
        <ul>
          <li>
            <a
              onClick={() =>
                scrollIntoView(home, {
                  scrollMode: "if-needed",
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                scrollIntoView(about, {
                  scrollMode: "if-needed",
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              About Me
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                scrollIntoView(skills, {
                  scrollMode: "if-needed",
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Skills
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                scrollIntoView(mywork, {
                  scrollMode: "if-needed",
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              My Work
            </a>
          </li>
          <li>
            <a
              onClick={() =>
                scrollIntoView(contact, {
                  scrollMode: "if-needed",
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Connect With Me
            </a>
          </li>
        </ul>
      </nav>

      <div class="addo-footer">
        <ul>
          <li>
            <a href="https://www.facebook.com/ushan.fernando.315">
              <i class="fab fa-facebook font-14px black-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://discord.gg/Tr7S89fR">
              <i class="fab fa-discord  font-14px black-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ushanfernando">
              <i class="fab fa-instagram  font-14px black-icon"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/channel/UCqM29q3zdab-WarsYZ8W1GQ">
              <i class="fab fa-youtube  font-14px black-icon"></i>
            </a>
          </li>
        </ul>
        <p>
          <small>&copy; 2021 Ushan Fernando</small>
        </p>
      </div>
    </aside>
  );
}

export default Navbar;
